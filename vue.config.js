const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const plugins = []
if (process.env.NODE_ENV === 'production') plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }))

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/chisnallio/'
    : '/',
  outputDir: __dirname + '/docs',
  transpileDependencies: [],
  configureWebpack: {
    plugins
  }
}
