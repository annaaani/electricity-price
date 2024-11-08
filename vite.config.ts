import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {svelteTesting} from '@testing-library/svelte/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [svelte(), svelteTesting(
        {
            autoCleanup: true,
            resolveBrowser: true,
        }
    )],
    server: {
        proxy: {
            '/api': 'https://dashboard.elering.ee',
        }
    },
    test: {
        environment: 'jsdom',
        setupFiles: ['./src/vitest-setup.ts'],
    }
})

