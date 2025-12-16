# 📮 CEP CLI

[![CI](https://github.com/mayconbalves/cep-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/mayconbalves/cep-cli/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/cep-cli.svg)](https://www.npmjs.com/package/cep-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![codecov](https://codecov.io/gh/mayconbalves/cep-cli/branch/main/graph/badge.svg)](https://codecov.io/gh/mayconbalves/cep-cli)

---

## 🇧🇷 Português

CLI simples e poderoso para consulta de CEP (Código de Endereçamento Postal) brasileiro usando a API ViaCEP.

### ✨ Funcionalidades

- 🚀 Consulta rápida de CEP diretamente do terminal
- 📍 Retorna informações completas: logradouro, bairro, cidade e estado
- 🎨 Interface colorida e amigável usando Chalk
- ⚡ Leve e rápido
- 🧪 100% de cobertura de testes
- 📦 Zero configuração necessária

### 📦 Instalação

#### Uso com NPX (Recomendado)

Sem necessidade de instalação! Execute diretamente:

```bash
npx cep-cli <cep>
```

#### Instalação Global

```bash
npm install -g cep-cli
```

#### Instalação como Dependência

```bash
npm install cep-cli --save-dev
```

### 🚀 Como Usar

#### Exemplo Básico

```bash
npx cep-cli 01310-100
```

#### Saída Esperada

```
📍 CEP: 01310-100
Endereço: Avenida Paulista
Bairro: Bela Vista
Cidade: São Paulo
Estado: SP
```

#### Formatos Aceitos

O CLI aceita CEP com ou sem formatação:

```bash
# Com hífen
npx cep-cli 01310-100

# Sem formatação
npx cep-cli 01310100
```

### 🛠️ Desenvolvimento

#### Pré-requisitos

- Node.js 18+
- npm ou yarn

#### Clonar o Repositório

```bash
git clone https://github.com/mayconbalves/cep-cli.git
cd cep-cli
npm install
```

#### Scripts Disponíveis

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

### 🧪 Testes

Este projeto possui 100% de cobertura de testes usando Jest.

```bash
# Rodar todos os testes
npm test

# Rodar testes com cobertura
npm run test:coverage

# Modo watch para desenvolvimento
npm run test:watch
```

### 🏗️ Estrutura do Projeto

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

### 🔄 CI/CD

Este projeto usa GitHub Actions para CI/CD:

#### Pipeline de CI

- ✅ Lint (ESLint + Prettier)
- ✅ Testes em múltiplas versões do Node.js (18, 20, 22)
- ✅ Cobertura de código (Codecov)
- ✅ Build do projeto
- ✅ Análise de segurança (CodeQL)

#### Pipeline de Publicação

- 📦 Publicação automática no NPM
- 🏷️ Criação de releases no GitHub
- 🔒 Assinatura de pacotes com provenance

### 🤝 Como Contribuir

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

#### 📋 Checklist para PRs

- [ ] Código segue os padrões do projeto (ESLint + Prettier)
- [ ] Testes foram adicionados/atualizados
- [ ] Todos os testes estão passando
- [ ] Cobertura de testes mantida em 100%
- [ ] Documentação foi atualizada (se necessário)
- [ ] Commit messages seguem o padrão Conventional Commits

### 🐛 Reportar Bugs

Encontrou um bug? Abra uma [issue](https://github.com/mayconbalves/cep-cli/issues) com:

- Descrição do problema
- Passos para reproduzir
- Comportamento esperado
- Comportamento atual
- Versão do Node.js e do sistema operacional

### 💡 Sugerir Funcionalidades

Tem uma ideia? Abra uma [issue](https://github.com/mayconbalves/cep-cli/issues) com:

- Descrição da funcionalidade
- Por que ela é útil
- Exemplos de uso

### 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

### 🙏 Agradecimentos

- [ViaCEP](https://viacep.com.br/) - API gratuita de consulta de CEP
- [Chalk](https://github.com/chalk/chalk) - Terminal string styling
- [Axios](https://github.com/axios/axios) - HTTP client

### 📞 Contato

- Issues: [GitHub Issues](https://github.com/mayconbalves/cep-cli/issues)
- Email: [crie uma issue](https://github.com/mayconbalves/cep-cli/issues)

---

## 🇺🇸 English

Simple and powerful CLI for querying Brazilian postal codes (CEP - Código de Endereçamento Postal) using the ViaCEP API.

### ✨ Features

- 🚀 Fast CEP lookup directly from the terminal
- 📍 Returns complete information: street, neighborhood, city, and state
- 🎨 Colorful and friendly interface using Chalk
- ⚡ Lightweight and fast
- 🧪 100% test coverage
- 📦 Zero configuration required

### 📦 Installation

#### Use with NPX (Recommended)

No installation needed! Run directly:

```bash
npx cep-cli <cep>
```

#### Global Installation

```bash
npm install -g cep-cli
```

#### Install as Dependency

```bash
npm install cep-cli --save-dev
```

### 🚀 Usage

#### Basic Example

```bash
npx cep-cli 01310-100
```

#### Expected Output

```
📍 CEP: 01310-100
Endereço: Avenida Paulista
Bairro: Bela Vista
Cidade: São Paulo
Estado: SP
```

#### Accepted Formats

The CLI accepts CEP with or without formatting:

```bash
# With hyphen
npx cep-cli 01310-100

# Without formatting
npx cep-cli 01310100
```

### 🛠️ Development

#### Prerequisites

- Node.js 18+
- npm or yarn

#### Clone the Repository

```bash
git clone https://github.com/mayconbalves/cep-cli.git
cd cep-cli
npm install
```

#### Available Scripts

```bash
# Run in development mode
npm run dev -- <cep>

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Check test coverage
npm run test:coverage

# Run linter
npm run lint

# Fix lint issues automatically
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check

# Build the project
npm run build
```

### 🧪 Tests

This project has 100% test coverage using Jest.

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Watch mode for development
npm run test:watch
```

### 🏗️ Project Structure

```
cep-cli/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
│       ├── ci.yml          # Continuous integration pipeline
│       ├── publish.yml     # NPM publish pipeline
│       └── codeql.yml      # Security analysis
├── .husky/                 # Git hooks
│   ├── pre-commit          # Pre-commit hook (lint-staged)
│   └── pre-push            # Pre-push hook (tests)
├── src/
│   ├── __tests__/
│   │   └── cep.test.js     # Unit tests
│   ├── cep.js              # CEP query logic
│   └── index.js            # CLI entry point
├── dist/                   # Build output
├── eslint.config.js        # ESLint configuration
├── jest.config.js          # Jest configuration
├── .prettierrc             # Prettier configuration
└── package.json            # Dependencies and scripts
```

### 🔄 CI/CD

This project uses GitHub Actions for CI/CD:

#### CI Pipeline

- ✅ Lint (ESLint + Prettier)
- ✅ Tests on multiple Node.js versions (18, 20, 22)
- ✅ Code coverage (Codecov)
- ✅ Project build
- ✅ Security analysis (CodeQL)

#### Publishing Pipeline

- 📦 Automatic NPM publishing
- 🏷️ GitHub releases creation
- 🔒 Package signing with provenance

### 🤝 How to Contribute

Contributions are very welcome! Follow these steps:

1. **Fork the project**

2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/cep-cli.git
   cd cep-cli
   ```

3. **Create a branch for your feature**
   ```bash
   git checkout -b feature/my-feature
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Make your changes and add tests**
   - Maintain 100% test coverage
   - Follow code standards (ESLint + Prettier)

6. **Run tests**
   ```bash
   npm test
   npm run lint
   ```

7. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

   We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:
   - `feat`: New feature
   - `fix`: Bug fix
   - `docs`: Documentation
   - `style`: Formatting
   - `refactor`: Refactoring
   - `test`: Tests
   - `chore`: Maintenance

8. **Push to your fork**
   ```bash
   git push origin feature/my-feature
   ```

9. **Open a Pull Request**
   - Describe your changes
   - Reference related issues
   - Wait for review

#### 📋 PR Checklist

- [ ] Code follows project standards (ESLint + Prettier)
- [ ] Tests were added/updated
- [ ] All tests are passing
- [ ] Test coverage maintained at 100%
- [ ] Documentation was updated (if necessary)
- [ ] Commit messages follow Conventional Commits standard

### 🐛 Report Bugs

Found a bug? Open an [issue](https://github.com/mayconbalves/cep-cli/issues) with:

- Problem description
- Steps to reproduce
- Expected behavior
- Current behavior
- Node.js version and operating system

### 💡 Suggest Features

Have an idea? Open an [issue](https://github.com/mayconbalves/cep-cli/issues) with:

- Feature description
- Why it's useful
- Usage examples

### 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

### 🙏 Acknowledgments

- [ViaCEP](https://viacep.com.br/) - Free CEP lookup API
- [Chalk](https://github.com/chalk/chalk) - Terminal string styling
- [Axios](https://github.com/axios/axios) - HTTP client

### 📞 Contact

- Issues: [GitHub Issues](https://github.com/mayconbalves/cep-cli/issues)
- Email: [create an issue](https://github.com/mayconbalves/cep-cli/issues)

---

Made with ❤️ by [Maycon Alves](https://github.com/mayconbalves)
