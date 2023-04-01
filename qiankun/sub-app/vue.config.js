module.exports = {
	lintOnSave: false,
	devServer:{
		port:8081,
		headers:{
			"Access-Control-Allow-Origin": "*"
		}
	},
	configureWebpack:{
		output:{
			library:'subApp',
			libraryTarget:'umd'
		}
	}
}