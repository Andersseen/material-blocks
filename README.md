# Material Blocks

Material Blocks is a collection of reusable UI sections built with **Angular 20**, **Angular Material**, and **Tailwind CSS**. It provides ready‑made building blocks for landing pages, dashboards, and other web apps, with optional server‑side rendering via [AnalogJS](https://analogjs.org).

## Features
- Prebuilt navigation, hero, pricing, and other content sections under `src/examples/`
- Angular Material components styled with Tailwind CSS
- Server‑side rendering support through `@analogjs/platform`
- Syntax highlighting powered by `highlight.js`
- Vite development and build tooling

## Getting Started
### Prerequisites
- Node.js 20+
- [pnpm](https://pnpm.io) installed globally

### Installation
```bash
pnpm install
```

### Development Server
```bash
pnpm start
```
Visit <http://localhost:4200> to view the app. The server reloads on file changes.

### Build
```bash
pnpm build
```
The production build is output to `dist/`.

### Testing
```bash
pnpm test
```
Runs unit tests with Vitest.

## Project Structure
- `src/components/` – shared Angular components
- `src/examples/` – example page sections
- `src/server/` – server‑side rendering entry points

## License
[MIT](LICENSE)
