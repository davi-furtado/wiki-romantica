import { cp, mkdir } from 'node:fs/promises'

await mkdir('css', { recursive: true })
await mkdir('js', { recursive: true })
await cp(
  'node_modules/bootstrap/dist/css/bootstrap.min.css',
  'css/bootstrap.min.css',
)
await cp(
  'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
  'js/bootstrap.bundle.min.js',
)
