const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{html,js}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'fira-mono': ['Fira Code', ...defaultTheme.fontFamily.mono],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
