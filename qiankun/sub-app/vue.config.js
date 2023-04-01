module.exports = {
	devServer:{
		port:8082,
		headers:{
			"Access-Control-Allow-Origin": "*"
		}
	},
	configureWebpack:{
		output:{
			library:'sub-app',
			libraryTarget:'umd'
		}
	}
}
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false//关闭语法检查
})
