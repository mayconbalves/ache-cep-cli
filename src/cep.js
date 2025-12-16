import axios from 'axios';

/**
 * Validates if a CEP has exactly 8 digits
 * @param {string} cep - The CEP to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export function validateCep(cep) {
  const cleanCep = cep.replace(/\D/g, '');
  return cleanCep.length === 8;
}

/**
 * Cleans a CEP string, removing non-numeric characters
 * @param {string} cep - The CEP to clean
 * @returns {string} - The cleaned CEP
 */
export function cleanCep(cep) {
  return cep.replace(/\D/g, '');
}

/**
 * Fetches CEP data from ViaCEP API
 * @param {string} cep - The CEP to search
 * @returns {Promise<Object>} - The CEP data
 * @throws {Error} - If CEP is not found or API request fails
 */
export async function fetchCepData(cep) {
  const cleanedCep = cleanCep(cep);

  if (!validateCep(cep)) {
    throw new Error('CEP inválido. Use 8 dígitos.');
  }

  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cleanedCep}/json/`, {
      headers: { Accept: 'application/json' },
    });

    if (data.erro) {
      throw new Error('CEP não encontrado.');
    }

    return data;
  } catch (error) {
    if (error.message === 'CEP não encontrado.') {
      throw error;
    }
    throw new Error('Erro ao consultar o CEP');
  }
}

/**
 * Formats CEP data for display
 * @param {Object} data - The CEP data
 * @returns {Object} - Formatted CEP information
 */
export function formatCepData(data) {
  return {
    cep: data.cep,
    logradouro: data.logradouro || 'N/A',
    bairro: data.bairro || 'N/A',
    localidade: data.localidade || 'N/A',
    uf: data.uf || 'N/A',
  };
}
