module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    './node_modules/standard/eslintrc.json'
    // "standard"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'react/prop-types': 'off',
    'multiline-ternary': ['error', 'never'],
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
    'react-hooks/exhaustive-deps': 'off',
    curly: 'off',
    'no-extra-boolean-cast': 'off'
  }
}
