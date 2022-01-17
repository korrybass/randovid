const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const PORT = 3000
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: [path.resolve(__dirname, 'web/assets')],
    port: PORT,
    devMiddleware:{
      publicPath: '/',
    },
    historyApiFallback: true,
    proxy: {
      '/api/**': {
        changeOrigin: true,
        target: 'http://localhost:3030',
        secure: false,
        headers: {
          Connection: 'keep-alive'
        }
      }
    },
  },
})