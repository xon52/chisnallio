const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// For copying static files like favicon
const plugins = [
  new CopyPlugin([
    {
      from: path.join(__dirname, 'example/public'),
      to: path.join(__dirname, 'docs'),
      toType: 'dir',
      ignore: ['index.html', '.DS_Store']
    }
  ])
]
// Build analysis
if (process.env.NODE_ENV === 'production') plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }))

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/chisnallio/' : '/',
  outputDir: __dirname + '/docs',
  transpileDependencies: [],
  configureWebpack: {
    plugins
  }
}
