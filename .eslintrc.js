module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    rules: {
        semi: ['warn', 'never'] /* always, never */,
        quotes: ['error', 'single'],
        indent: ['warn', 4],
    },
}
