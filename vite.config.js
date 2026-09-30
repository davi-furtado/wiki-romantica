import { defineConfig } from 'vite'
import path from 'node:path'
import { router } from './router.js'

export default defineConfig(({ command }) => {
  return {
    appType: 'mpa',
    base: command === 'build' ? '/wiki-romantica/' : '/',
    plugins: [router()],

    build: {
      rollupOptions: {
        input: {
          index: path.resolve(import.meta.dirname, 'index.html'),
          geracao1: path.resolve(import.meta.dirname, 'geracao1/index.html'),
          GoncalvesDias: path.resolve(import.meta.dirname, 'geracao1/goncalves-dias.html'),
          JoseDeAlencar: path.resolve(import.meta.dirname, 'geracao1/jose-de-alencar.html'),
          geracao2: path.resolve(import.meta.dirname, 'geracao2/index.html'),
          AlvaresDeAzevedo: path.resolve(import.meta.dirname, 'geracao2/alvares-de-azevedo.html'),
          CasimiroDeAbreu: path.resolve(import.meta.dirname, 'geracao2/casimiro-de-abreu.html'),
          geracao3: path.resolve(import.meta.dirname, 'geracao3/index.html'),
          CastroAlves: path.resolve(import.meta.dirname, 'geracao3/castro-alves.html'),
          TobiasBarreto: path.resolve(import.meta.dirname, 'geracao3/tobias-barreto.html'),
          404: path.resolve(import.meta.dirname, '404.html')
        }
      }
    },

    server: {
      host: true
    },
    preview: {
      host: true
    }
  }
})
