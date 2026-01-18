# Node.js + Express.js Boilerplate

A modern Node.js + Express.js boilerplate with TypeScript, testing, and linting configured.

## Features

- **TypeScript** - Type safety and modern JavaScript features
- **Express.js** - Fast, minimalist web framework
- **Jest** - Testing framework with TypeScript support
- **ESLint** - Code linting with TypeScript support
- **Supertest** - HTTP assertions for testing endpoints

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

```bash
npm install
```

## Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled application
- `npm run dev` - Run the application in development mode with ts-node
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run lint` - Lint the codebase
- `npm run lint:fix` - Lint and fix issues automatically

## Project Structure

```
.
├── src/
│   ├── __tests__/       # Test files
│   ├── routes/          # Route handlers
│   ├── app.ts           # Express app configuration
│   └── server.ts        # Server entry point
├── dist/                # Compiled JavaScript (generated)
├── coverage/            # Test coverage reports (generated)
├── eslint.config.mjs    # ESLint configuration
├── .gitignore           # Git ignore rules
├── jest.config.js       # Jest configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

## API Endpoints

### Ping

- **GET** `/ping`
  - Response: `{ "message": "pong" }`
  - Status: 200

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run in development mode:
   ```bash
   npm run dev
   ```

3. The server will start on port 3000 (default) or the port specified in the PORT environment variable.

## Testing

Run all tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm run test:coverage
```

## Building for Production

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## License

ISC