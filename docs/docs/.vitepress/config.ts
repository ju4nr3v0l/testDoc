// @ts-ignore
import { defineConfig } from "vitepress"

export default defineConfig({
    lang: 'es-ES',
    title: 'Documentación Técnica',
    description: 'Bienvenido a la documentación técnica del Equipo de Solución de Recaudo y Pasarela',
    themeConfig: {
        nav: [
            { text: 'Pasarela', link: '/pasarela/' },
            { text: 'Checkout', link: '/checkout/' },
            { text: 'Recaudo', link: '/recaudo/' },
            { text: 'Integraciones', link: '/integraciones/' },
        ],
        sidebar: {
            '/pasarela/': [
                {
                    text: 'Pasarela',
                    items: [
                        { text: 'Inicio', link: '/pasarela/' },
                        { text: 'API', link: "/pasarela/" },
                        { text: 'Arquitectura', link: '/pasarela/' },
                        { text: 'Consumo de APIs', link: '/pasarela/' },
                        { text: 'Diagrama funcional', link: '/pasarela/' },
                        { text: 'Componentes', link: '/pasarela/componentes/' },
                    ],
                },
            ],
            '/checkout/': [
                // ...
            ],
            '/recaudo/': [
                // ...
            ],
            '/integraciones/': [
                {
                    text: 'Integraciones',
                    items: [
                        { text: 'WooCommerce', link: '/integraciones/' },
                        { text: 'PrestaShop', link: '/integraciones/' },
                        { text: 'Magento', link: '/integraciones/' },
                        { text: 'VTEX Legacy', link: '/integraciones/' },
                        { text: 'VTEX IO', link: '/integraciones/' },
                        { text: 'Jumpseller', link: '/integraciones/' },
                    ],
                },
            ],
        },
    },
})
