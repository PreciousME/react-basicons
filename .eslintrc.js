/* eslint-env node */

module.exports = {
    root: true,
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    rules: {
        'no-case-declarations': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
    }
}
