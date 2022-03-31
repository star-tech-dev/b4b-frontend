/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  'root': true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended'
  ],
  'env': {
    'vue/setup-compiler-macros': true
  },
  'rules': {
    'comma-dangle': [2, 'never'],
    'semi': [2, 'never'],
    'quotes': [2, 'single'],
    'space-before-function-paren': [2, 'always'],
    'object-curly-spacing': [2, 'always'],
    '@typescript-eslint/no-explicit-any': 0
  }
}
