# 📮 Rastreio CLI

[![CI](https://github.com/mayconbalves/cep-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/mayconbalves/cep-cli/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/rastreio-cli.svg)](https://www.npmjs.com/package/rastreio-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![codecov](https://codecov.io/gh/mayconbalves/cep-cli/branch/main/graph/badge.svg)](https://codecov.io/gh/mayconbalves/cep-cli)

**English** | [Português](./README.pt-BR.md)

Simple and powerful CLI for querying Brazilian postal codes (CEP - Código de Endereçamento Postal) using the ViaCEP API.

## ✨ Features

- 🚀 Fast CEP lookup directly from the terminal
- 📍 Returns complete information: street, neighborhood, city, and state
- 🎨 Colorful and friendly interface using Chalk
- ⚡ Lightweight and fast
- 🧪 100% test coverage
- 📦 Zero configuration required

## 📦 Installation

### Use with NPX (Recommended)

No installation needed! Run directly:

```bash
npx rastreio-cli <cep>
```

### Global Installation

```bash
npm install -g rastreio-cli
```

### Install as Dependency

```bash
npm install rastreio-cli --save-dev
```

## 🚀 Usage

### Basic Example

```bash
npx rastreio-cli 01310-100
```

### Expected Output

```
📍 CEP: 01310-100
Endereço: Avenida Paulista
Bairro: Bela Vista
Cidade: São Paulo
Estado: SP
```

### Accepted Formats

The CLI accepts CEP with or without formatting:

```bash
# With hyphen
npx rastreio-cli 01310-100

# Without formatting
npx rastreio-cli 01310100
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/mayconbalves/cep-cli.git
cd cep-cli
npm install
```

### Available Scripts

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

## 🧪 Tests

This project has 100% test coverage using Jest.

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Watch mode for development
npm run test:watch
```

## 🏗️ Project Structure

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

## 🔄 CI/CD

This project uses GitHub Actions for CI/CD:

### CI Pipeline

- ✅ Lint (ESLint + Prettier)
- ✅ Tests on multiple Node.js versions (18, 20, 22)
- ✅ Code coverage (Codecov)
- ✅ Project build
- ✅ Security analysis (CodeQL)

### Publishing Pipeline

- 📦 Automatic NPM publishing
- 🏷️ GitHub releases creation
- 🔒 Package signing with provenance

## 🤝 How to Contribute

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

### 📋 PR Checklist

- [ ] Code follows project standards (ESLint + Prettier)
- [ ] Tests were added/updated
- [ ] All tests are passing
- [ ] Test coverage maintained at 100%
- [ ] Documentation was updated (if necessary)
- [ ] Commit messages follow Conventional Commits standard

## 🐛 Report Bugs

Found a bug? Open an [issue](https://github.com/mayconbalves/cep-cli/issues) with:

- Problem description
- Steps to reproduce
- Expected behavior
- Current behavior
- Node.js version and operating system

## 💡 Suggest Features

Have an idea? Open an [issue](https://github.com/mayconbalves/cep-cli/issues) with:

- Feature description
- Why it's useful
- Usage examples

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## 🙏 Acknowledgments

- [ViaCEP](https://viacep.com.br/) - Free CEP lookup API
- [Chalk](https://github.com/chalk/chalk) - Terminal string styling
- [Axios](https://github.com/axios/axios) - HTTP client

## 📞 Contact

- Issues: [GitHub Issues](https://github.com/mayconbalves/cep-cli/issues)
- Email: [create an issue](https://github.com/mayconbalves/cep-cli/issues)

---

Made with ❤️ by [Maycon Alves](https://github.com/mayconbalves)
