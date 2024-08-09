module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [ 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always-and-inside-groups',
        'alphabetize': { 'order': 'asc', 'caseInsensitive': true }
      }
    ],
    indent: [
      'error',
      2
    ],
    semi: [
      'error',
      'always'
    ],
    quotes: [
      'error',
      'single'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    'space-in-parens': [
      'error',
      'always'
    ],
    'comma-spacing': [
      'error',
      { 'before': false, 'after': true }
    ],
    'no-trailing-spaces': [
      'error'
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'jsx-quotes': [
      'error',
      'prefer-double'
    ],
    'comma-dangle': [
      'error',
      { arrays: 'never', objects: 'never', imports: 'never', exports: 'never', functions: 'never' }
    ],
    'no-multiple-empty-lines': [
      'error',
      { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }
    ]
  },
}
