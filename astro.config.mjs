import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({

    site: 'https://fadikirbag.dev',
    
    output: 'static',

    vite: {
        resolve: {
            alias: {
                '@': path.resolve('./src'),
            },
        },
    },
    devToolbar: {
        enabled: false,
    },
});