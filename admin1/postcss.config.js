// 配置CSS的解析
module.exports = {
	plugins: [
		require('autoprefixer')({
			browsers: [
				"> 1%",
				"not ie <= 8",
				"Chrome >= 45",
				"Firefox >= 20"
			]
		})
	]
}