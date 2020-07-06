module.exports = {
  components: [
    'components/**/*.js',
    'pages/**/components/*.js'
  ],
  ignore: [
    'components/index.js'
  ],
  title: 'Marvel Client Components Doc',
  styleguideDir: 'public/docs',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  }
}
