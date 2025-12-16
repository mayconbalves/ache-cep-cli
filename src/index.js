#!/usr/bin/env node

import chalk from 'chalk';
import axios from 'axios';
import { Command } from 'commander';

const program = new Command();

function validateCep(cep) {
  const cleanCep = cep.replace(/\D/g, '');
  return cleanCep.length === 8;
}

function sanitizeCep(cep) {
  return cep.replace(/\D/g, '');
}

async function fetchCep(value) {
  const cleanCep = sanitizeCep(value);

  if (!validateCep(cleanCep)) {
    throw new Error('CEP inválido. Use 8 dígitos.');
  }
  const { data } = await axios.get(`https://viacep.com.br/ws/${cleanCep}/json/`, {
    headers: { Accept: 'application/json' },
  });

  if (data.erro) {
    throw new Error('CEP não encontrado.');
  }

  return data;
}

function displayResults(value) {
  console.log(chalk.green(`📍 CEP: ${value.cep}`));
  console.log(`Endereço: ${value.logradouro}`);
  console.log(`Bairro: ${value.bairro}`);
  console.log(`Cidade: ${value.localidade}`);
  console.log(`Estado: ${value.uf}`);
}

program
  .version('1.1.0')
  .description('CLI para Buscar e exiber informações de um CEP válido.')
  .argument('<cep>', 'CEP para consulta')
  .action(async (value) => {
    console.log(chalk.blue(`Buscando informações do CEP ${value} ...`));

    try {
      const response = await fetchCep(value);

      displayResults(response);
    } catch (error) {
      console.log(chalk.red(`Error: ${error.message}`));
      process.exit(1);
    }
  });

program.parse();
