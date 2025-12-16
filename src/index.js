#!/usr/bin/env node
import chalk from 'chalk';
import { fetchCepData, formatCepData } from './cep.js';

const input = process.argv[2];

if (!input) {
  console.log(chalk.yellow('Uso: npx cep-cli <cep>'));
  console.log(chalk.cyan('Exemplo: npx cep-cli 01310-100'));
  process.exit(1);
}

/**
 * Main CLI function to search and display CEP information
 * @param {string} code - The CEP code to search
 */
async function main(code) {
  try {
    const data = await fetchCepData(code);
    const formatted = formatCepData(data);

    console.log(chalk.green(`📍 CEP: ${formatted.cep}`));
    console.log(`Endereço: ${formatted.logradouro}`);
    console.log(`Bairro: ${formatted.bairro}`);
    console.log(`Cidade: ${formatted.localidade}`);
    console.log(`Estado: ${formatted.uf}`);
  } catch (error) {
    console.error(chalk.red(error.message));
    process.exit(1);
  }
}

main(input);

export { main };
