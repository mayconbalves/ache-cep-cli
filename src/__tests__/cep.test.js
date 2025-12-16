import { describe, it, expect, jest, beforeEach } from '@jest/globals';

// Mock axios before importing modules that use it
const mockAxiosGet = jest.fn();
jest.unstable_mockModule('axios', () => ({
  default: {
    get: mockAxiosGet,
  },
}));

// Import modules after mocking
const { validateCep, cleanCep, fetchCepData, formatCepData } = await import('../cep.js');

describe('CEP Module', () => {
  describe('validateCep', () => {
    it('should return true for valid 8-digit CEP', () => {
      expect(validateCep('12345678')).toBe(true);
    });

    it('should return true for valid CEP with formatting', () => {
      expect(validateCep('12345-678')).toBe(true);
    });

    it('should return false for CEP with less than 8 digits', () => {
      expect(validateCep('1234567')).toBe(false);
    });

    it('should return false for CEP with more than 8 digits', () => {
      expect(validateCep('123456789')).toBe(false);
    });

    it('should return false for empty CEP', () => {
      expect(validateCep('')).toBe(false);
    });
  });

  describe('cleanCep', () => {
    it('should remove all non-numeric characters', () => {
      expect(cleanCep('12345-678')).toBe('12345678');
    });

    it('should handle CEP without formatting', () => {
      expect(cleanCep('12345678')).toBe('12345678');
    });

    it('should remove multiple types of separators', () => {
      expect(cleanCep('123.45-678')).toBe('12345678');
    });

    it('should handle empty string', () => {
      expect(cleanCep('')).toBe('');
    });
  });

  describe('fetchCepData', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should fetch CEP data successfully', async () => {
      const mockData = {
        cep: '01310-100',
        logradouro: 'Avenida Paulista',
        bairro: 'Bela Vista',
        localidade: 'São Paulo',
        uf: 'SP',
      };

      mockAxiosGet.mockResolvedValue({ data: mockData });

      const result = await fetchCepData('01310-100');

      expect(result).toEqual(mockData);
      expect(mockAxiosGet).toHaveBeenCalledWith('https://viacep.com.br/ws/01310100/json/', {
        headers: { Accept: 'application/json' },
      });
    });

    it('should throw error for invalid CEP', async () => {
      await expect(fetchCepData('123')).rejects.toThrow('CEP inválido. Use 8 dígitos.');
    });

    it('should throw error when CEP is not found', async () => {
      mockAxiosGet.mockResolvedValue({ data: { erro: true } });

      await expect(fetchCepData('99999999')).rejects.toThrow('CEP não encontrado.');
    });

    it('should throw error when API request fails', async () => {
      mockAxiosGet.mockRejectedValue(new Error('Network error'));

      await expect(fetchCepData('01310100')).rejects.toThrow('Erro ao consultar o CEP');
    });
  });

  describe('formatCepData', () => {
    it('should format complete CEP data', () => {
      const mockData = {
        cep: '01310-100',
        logradouro: 'Avenida Paulista',
        bairro: 'Bela Vista',
        localidade: 'São Paulo',
        uf: 'SP',
      };

      const result = formatCepData(mockData);

      expect(result).toEqual({
        cep: '01310-100',
        logradouro: 'Avenida Paulista',
        bairro: 'Bela Vista',
        localidade: 'São Paulo',
        uf: 'SP',
      });
    });

    it('should handle missing optional fields with N/A', () => {
      const mockData = {
        cep: '01310-100',
        localidade: 'São Paulo',
        uf: 'SP',
      };

      const result = formatCepData(mockData);

      expect(result).toEqual({
        cep: '01310-100',
        logradouro: 'N/A',
        bairro: 'N/A',
        localidade: 'São Paulo',
        uf: 'SP',
      });
    });

    it('should handle empty strings as N/A', () => {
      const mockData = {
        cep: '01310-100',
        logradouro: '',
        bairro: '',
        localidade: 'São Paulo',
        uf: 'SP',
      };

      const result = formatCepData(mockData);

      expect(result).toEqual({
        cep: '01310-100',
        logradouro: 'N/A',
        bairro: 'N/A',
        localidade: 'São Paulo',
        uf: 'SP',
      });
    });
  });
});
