import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import envCompatible from 'vite-plugin-env-compatible';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default defineConfig({
    envPrefix: 'REACT_APP_',
    build: {
        outDir: 'build',
    },
    plugins: [
        react(),
        envCompatible(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
            },
        }),
    ],
    css: {
        postcss: {
            plugins: [autoprefixer(), tailwindcss()],
        },
    },
})