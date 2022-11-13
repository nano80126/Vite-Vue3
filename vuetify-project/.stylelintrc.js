module.exports = {
	extends: ['stylelint-config-standard-scss'],
	customSyntax: 'postcss-scss',
	plugins: ['stylelint-order'],
	ignoreFiles: ['**/*.js', '**/*.ts'],
	overrides: [
		{
			extends: ['stylelint-config-recommended-vue/scss', 'stylelint-config-html/vue'],
			files: ['*.vue', '**/*.vue', '*.html'], // css 相关文件由 postcss-scss 处理
			customSyntax: 'postcss-html',
			rules: {
				// 'selector-pseudo-element-no-unknown': [
				// 	true,
				// 	{
				// 		ignorePseudoElements: ['v-deep']
				// 	}
				// ],
				'selector-max-empty-lines': 0,
				'declaration-empty-line-before': [
					'always',
					{
						except: ['after-declaration', 'first-nested'],
						ignore: ['after-comment', 'inside-single-line-block']
					}
				]
			}
		}
	],
	rules: {
		indentation: 'tab',
		'string-quotes': 'single',
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
