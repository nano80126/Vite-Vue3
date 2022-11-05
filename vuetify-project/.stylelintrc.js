module.exports = {
	extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue'],
	customSyntax: 'postcss-html',
	plugins: ['stylelint-order'],
	overrides: [
		{
			files: ['**/*.{scss,css,sass}'], // css 相关文件由 postcss-scss 处理
			customSyntax: 'postcss-scss'
		}
	],
	rules: {
		// indentation: 'tab',
		// 'string-quotes': 'single',
		'order/order': ['custom-properties', 'declarations'],
		'order/properties-order': [
			'position',
			'top',
			'right',
			'bottom',
			'left',
			'overflow',
			'margin',
			'padding',
			'width',
			'height',
			'background',
			'font-size',
			'font-weight',
			'font-family',
			'color'
		]
	}
};
