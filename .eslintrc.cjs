module.exports = {
	parserOptions: {
		project: './tsconfig.json'
	},
	extends: [
		'standard-with-typescript'
	],
	plugins: [
		// 'jsx-a11y',
		// 'react',
		'react-hooks'
	],
	rules: {
		'no-tabs': ['error', { allowIndentationTabs: true }],
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab']
		// 'react/jsx-indent': [2, 'tab', { checkAttributes: true }],
		// 'react/jsx-indent-props': [2, 'tab']
	}
}
