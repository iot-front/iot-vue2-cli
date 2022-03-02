
const { name } = require('./package');
module.exports = {
	productionSourceMap: false,
	publicPath: './',
	indexPath: 'index.html',
	outputDir: 'dist',
	configureWebpack: {
		entry: ['babel-polyfill', './src/main.js']
	},
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/assets/css/var.scss";`
			}
		}
	},
	devServer: {
		port: 1212,
		open: true,
		proxy: {
			'/apidev': {
				target: 'http://39.107.247.209',
				changeOrigin: true,
				pathRewrite: {
					'^/apidev': ''
				}
			},
			'/apitest': {
				target: 'http://123.57.31.57',
				changeOrigin: true,
				pathRewrite: {
					'^/apitest': ''
				}
			},
			'/apiprod': {
				target: 'https://www.haigeek.com',
				changeOrigin: true,
				secure: false,
				pathRewrite: {
					'^/apiprod': ''
				},
				headers: {
					host: 'https://www.haigeek.com',
					origin: 'https://www.haigeek.com',
					referer: 'https://www.haigeek.com'
				}
			}
		}
	},
	configureWebpack: {
    output: {
      //把子应用打包成umd库格式（必须）
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    }
  }
}
