module.exports = {
	env: {
	  browser: true,
	  es2021: true,
	},
	extends: ['plugin:react/recommended', 'standard', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
	  ecmaFeatures: {
		jsx: true,
	  },
	  ecmaVersion: 12,
	  sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
	  'prettier/prettier': [
		'error',
		{
		  singleQuote: true,
		  arrowParens: 'avoid',
		  trailingComma: 'all',
		  semi: true,
		},
	  ],
	  'no-use-before-define': 'off',
	  '@typescript-eslint/no-use-before-define': ['error'],
	  'react/prop-types': 'off',
	},
  };