# 📮 Rastreio CLI

[![CI](https://github.com/mayconbalves/cep-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/mayconbalves/cep-cli/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/rastreio-cli.svg)](https://www.npmjs.com/package/rastreio-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![codecov](https://codecov.io/gh/mayconbalves/cep-cli/branch/main/graph/badge.svg)](https://codecov.io/gh/mayconbalves/cep-cli)

[English](./README.md) | **Português**

CLI simples e poderoso para consulta de CEP (Código de Endereçamento Postal) brasileiro usando a API ViaCEP.

## ✨ Funcionalidades

- 🚀 Consulta rápida de CEP diretamente do terminal
- 📍 Retorna informações completas: logradouro, bairro, cidade e estado
- 🎨 Interface colorida e amigável usando Chalk
- ⚡ Leve e rápido
- 🧪 100% de cobertura de testes
- 📦 Zero configuração necessária

## 📦 Instalação

### Uso com NPX (Recomendado)

Sem necessidade de instalação! Execute diretamente:

```bash
npx rastreio-cli <cep>
```

### Instalação Global

```bash
npm install -g rastreio-cli
```

### Instalação como Dependência

```bash
npm install rastreio-cli --save-dev
```

## 🚀 Como Usar

### Exemplo Básico

```bash
npx rastreio-cli 01310-100
```

### Saída Esperada

```
📍 CEP: 01310-100
Endereço: Avenida Paulista
Bairro: Bela Vista
Cidade: São Paulo
Estado: SP
```

### Formatos Aceitos

O CLI aceita CEP com ou sem formatação:

```bash
# Com hífen
npx rastreio-cli 01310-100

# Sem formatação
npx rastreio-cli 01310100
```

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Clonar o Repositório

```bash
git clone https://github.com/mayconbalves/cep-cli.git
cd cep-cli
npm install
```

### Scripts Disponíveis

```bash
# Executar em modo de desenvolvimento
npm run dev -- <cep>

# Rodar testes
npm test

# Rodar testes em modo watch
npm run test:watch

# Verificar cobertura de testes
npm run test:coverage

# Rodar linter
npm run lint

# Corrigir problemas de lint automaticamente
npm run lint:fix

# Formatar código
npm run format

# Verificar formatação
npm run format:check

# Build do projeto
npm run build
```

## 🧪 Testes

Este projeto possui 100% de cobertura de testes usando Jest.

```bash
# Rodar todos os testes
npm test

# Rodar testes com cobertura
npm run test:coverage

# Modo watch para desenvolvimento
npm run test:watch
```

## 🏗️ Estrutura do Projeto

```
cep-cli/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
│       ├── ci.yml          # Pipeline de integração contínua
│       ├── publish.yml     # Pipeline de publicação no NPM
│       └── codeql.yml      # Análise de segurança
├── .husky/                 # Git hooks
│   ├── pre-commit          # Hook de pre-commit (lint-staged)
│   └── pre-push            # Hook de pre-push (testes)
├── src/
│   ├── __tests__/
│   │   └── cep.test.js     # Testes unitários
│   ├── cep.js              # Lógica de consulta de CEP
│   └── index.js            # Entry point do CLI
├── dist/                   # Build output
├── eslint.config.js        # Configuração do ESLint
├── jest.config.js          # Configuração do Jest
├── .prettierrc             # Configuração do Prettier
└── package.json            # Dependências e scripts

```

## 🔄 CI/CD

Este projeto usa GitHub Actions para CI/CD:

### Pipeline de CI

- ✅ Lint (ESLint + Prettier)
- ✅ Testes em múltiplas versões do Node.js (18, 20, 22)
- ✅ Cobertura de código (Codecov)
- ✅ Build do projeto
- ✅ Análise de segurança (CodeQL)

### Pipeline de Publicação

- 📦 Publicação automática no NPM
- 🏷️ Criação de releases no GitHub
- 🔒 Assinatura de pacotes com provenance

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Siga os passos abaixo:

1. **Fork o projeto**

2. **Clone seu fork**
   ```bash
   git clone https://github.com/seu-usuario/cep-cli.git
   cd cep-cli
   ```

3. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/minha-feature
   ```

4. **Instale as dependências**
   ```bash
   npm install
   ```

5. **Faça suas alterações e adicione testes**
   - Mantenha a cobertura de testes em 100%
   - Siga os padrões de código (ESLint + Prettier)

6. **Execute os testes**
   ```bash
   npm test
   npm run lint
   ```

7. **Commit suas alterações**
   ```bash
   git add .
   git commit -m "feat: adiciona nova funcionalidade"
   ```

   Seguimos o padrão de [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat`: Nova funcionalidade
   - `fix`: Correção de bug
   - `docs`: Documentação
   - `style`: Formatação
   - `refactor`: Refatoração
   - `test`: Testes
   - `chore`: Manutenção

8. **Push para seu fork**
   ```bash
   git push origin feature/minha-feature
   ```

9. **Abra um Pull Request**
   - Descreva suas alterações
   - Referencie issues relacionadas
   - Aguarde review

### 📋 Checklist para PRs

- [ ] Código segue os padrões do projeto (ESLint + Prettier)
- [ ] Testes foram adicionados/atualizados
- [ ] Todos os testes estão passando
- [ ] Cobertura de testes mantida em 100%
- [ ] Documentação foi atualizada (se necessário)
- [ ] Commit messages seguem o padrão Conventional Commits

## 🐛 Reportar Bugs

Encontrou um bug? Abra uma [issue](https://github.com/mayconbalves/cep-cli/issues) com:

- Descrição do problema
- Passos para reproduzir
- Comportamento esperado
- Comportamento atual
- Versão do Node.js e do sistema operacional

## 💡 Sugerir Funcionalidades

Tem uma ideia? Abra uma [issue](https://github.com/mayconbalves/cep-cli/issues) com:

- Descrição da funcionalidade
- Por que ela é útil
- Exemplos de uso

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [ViaCEP](https://viacep.com.br/) - API gratuita de consulta de CEP
- [Chalk](https://github.com/chalk/chalk) - Terminal string styling
- [Axios](https://github.com/axios/axios) - HTTP client

## 📞 Contato

- Issues: [GitHub Issues](https://github.com/mayconbalves/cep-cli/issues)
- Email: [crie uma issue](https://github.com/mayconbalves/cep-cli/issues)

---

Feito com ❤️ por [Maycon Alves](https://github.com/mayconbalves)
