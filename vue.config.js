// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const plugins = []
// if (process.env.NODE_ENV === 'production') plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }))

module.exports = {
  outputDir: __dirname + '/docs',
  configureWebpack: {
    plugins
  },
  transpileDependencies: ['x5-notify', 'x5-modal']
}
