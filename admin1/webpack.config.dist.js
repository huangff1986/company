var path = require('path'); // 为了得到项目根路径
var webpack = require('webpack'); // webpack核心
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 为了单独打包css
// var CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理文件夹
var HtmlWebpackPlugin = require('html-webpack-plugin'); //根据模板生成最终html文件
var ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
var os = require('os');
var HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length});
var bundleConfig = require("./antd/dist/bundle-config.json");

// 定义文件路径
const ROOT_PATH = path.resolve(__dirname); // 项目根路径
const APP_PATH = path.resolve(ROOT_PATH, 'src'); // 项目src目录
const APP_FILE = path.resolve(APP_PATH, 'app'); // 项目的入口文件（即src/app.jsx）
const BUILD_PATH = path.resolve(ROOT_PATH, 'antd/dist'); // 发布文件所存放的目录

module.exports = {
	entry: {
		app: APP_FILE,
	},
	output: {
		publicPath: '/dist',
		path: BUILD_PATH,
		filename: '[name].js',
		chunkFilename: '[name].[chunkhash:5].min.js' 
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: ['happypack/loader?id=js']
		},{
			test: /\.css$/, // 解析.css,注意这里要用这个插件作为loader,最后才能生成单独的css文件
			exclude: /node_modules/,
			use: ExtractTextPlugin.extract({
			    fallback:'style-loader', 
			    use:['happypack/loader?id=css']
			}) // 用这种方式写的，表示此类文件单独打包成一个css文件
		},{
			// 解析less,原理同上
			test: /\.less$/, // 去掉exclude: /^node_modules$/是为了babel-plugin-import按需加载antd资源
			use: ExtractTextPlugin.extract({
			    fallback:'style-loader', 
			    use:['happypack/loader?id=less']
			})
		},{
			test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/, // 解析各种非图片文件
			exclude: /node_modules/,
			use: ['file-loader?name=[name].[ext]']
		},{
			test: /\.(png|jpg|gif)$/, 
			exclude: /node_modules/,
			use: ['url-loader?limit=8192&name=images/[hash:8].[name].[ext]'],
		},{
			test: /\.jsx$/,
			exclude: /node_modules/,
			use: ['happypack/loader?id=jsx']
		}]
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
		    filename: '../index.html', //生成的html存放路径，相对于（比如前面配置的BUILD_PATH是“build/dist”,即index.html会生成到build下，其他文件会打包到build/dist下）
		    template: './src/template/index.html', //html模板路径
		    bundleName: bundleConfig.bundle.js,
		    favicon: './favicon.ico',
		    inject: 'body', // 是否将js放在body的末尾
		    hash: true, // 是否为本页面所有资源文件添加一个独特的hash值
		}),
		new ExtractTextPlugin('[name].css'),
		new webpack.optimize.CommonsChunkPlugin({
		    children: true,
		    // (选择所有被选 chunks 的子 chunks)
		    minChunks: 3,
		}),
		new ParallelUglifyPlugin({
		    include: BUILD_PATH,
		    workerCount: os.cpus().length,
		    uglifyJS:{
		        output: {
		            comments: false, // 删除代码中所有注释
		            max_line_len: 50000
		        },
		        compress: {
		            warnings: false, // 忽略警告
		            drop_debugger: true,
		            drop_console: true
		        }
		    }
		}),
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
		new HappyPack({
		    id: 'js',
		    threadPool: happyThreadPool,
		    verboseWhenProfiling:true,
		    verbose: process.env.HAPPY_VERBOSE === '1',
		    loaders: [ 'babel-loader' ],
		    // debug:true
		}),
		new HappyPack({
		    id: 'jsx',
		    threadPool: happyThreadPool,
		    verboseWhenProfiling:true,
		    verbose: process.env.HAPPY_VERBOSE === '1',
		    loaders: [ 'jsx-loader', 'babel-loader'],
		    // debug:true
		}),
		new HappyPack({
		    id: 'css',
		    threadPool: happyThreadPool,
		    verboseWhenProfiling:true,
		    verbose: process.env.HAPPY_VERBOSE === '1',
		    loaders: [ 'css-loader', 'postcss-loader' ],
		    // debug:true
		}),
		new HappyPack({
		    id: 'less',
		    threadPool: happyThreadPool,
		    verboseWhenProfiling:true,
		    verbose: process.env.HAPPY_VERBOSE === '1',
		    loaders: [ 'css-loader', 'postcss-loader', 'less-loader' ],
		    // debug:true
		}),
		new webpack.DllReferencePlugin({
		    context: __dirname,
		    manifest: require('./antd/dist/bundle.manifest.json')
		})
	],

	resolve: {
		modules: [
			APP_PATH,
			"node_modules"
		],
		extensions: ['.js', '.jsx', '.less', '.css']
	}
}