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

## Pipelines
- **CI** (`.github/workflows/ci.yml`) — on every push to `main` and every pull request: install, run tests with coverage, upload the coverage report.
- **CD** (`.github/workflows/cd.yml`) — run manually (`workflow_dispatch` with a version): test, package a zip, create a tag + GitHub Release.

Both are explained line by line in `INSTRUCTOR-README.md`.
