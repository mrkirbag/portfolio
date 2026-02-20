import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({

    site: 'https://fadikirbag.pages.dev',
    
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