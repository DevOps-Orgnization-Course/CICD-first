# greeter-api

A tiny Express API used to demonstrate a **simple CI pipeline**.

## Endpoints
- `GET /health` -> `{ "status": "ok" }`
- `GET /greet?name=Ada` -> `{ "message": "Hello, Ada!" }` (defaults to `world`)

## Run locally
```bash
npm install
npm start          # http://localhost:3000
```

## Test
```bash
npm test           # run all tests
npm run test:coverage   # tests + coverage report
```

## Test & lint
```bash
npm run lint            # eslint
npm run test:unit       # pure logic tests
npm run test:api        # endpoint tests
npm run test:coverage   # all tests + coverage
```

## Pipelines
- **CI** (`.github/workflows/ci.yml`) — on push to `main` and every PR, four jobs run in order:
  `lint` -> `test` (Node 18 and 20 in parallel) -> `coverage` (report shown on the run Summary) -> `build` (packages a zip artifact).
- **CD** (`.github/workflows/cd.yml`) — run manually (`workflow_dispatch` with a version): test, package a zip, create a tag + GitHub Release.
