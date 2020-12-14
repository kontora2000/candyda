module.exports = {
  root: true,
  env: {
      node: true,
  },
  extends: [
      'plugin:vue/vue3-essential',
      '@vue/typescript/recommended'
  ],
  parserOptions: {
      ecmaVersion: 2020,
  },
  rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'indent': ['error', 4],
      'comma-dangle': ['error', {
          'arrays': 'never',
          'objects': 'always',
          'imports': 'always',
          'exports': 'never',
          'functions': 'never',
      }],
      'no-console': ['warn', { allow: ['error'], }],
      'quotes': ['error','single'],
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
  },
  overrides: [
      {
          files: [
              '**/__tests__/*.{j,t}s?(x)',
              '**/tests/unit/**/*.spec.{j,t}s?(x)'
          ],
          env: {
              mocha: true,
          },
      }
  ],
};
