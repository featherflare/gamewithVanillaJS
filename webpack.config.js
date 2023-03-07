const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './assets/js/main.js',
    mario: './assets/js/mario.js',
    spaceInvaders: './assets/js/spaceInvaders.js',
    pacman: './assets/js/pacman.js',
  },
  output: {
    path: __dirname + '/dist/',
    filename: './js/[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] },
      files: ['./dist/*'],
      notify: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: 'favicon.ico',
      template: 'src/index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'mario-game.html',
      favicon: 'favicon.ico',
      template: 'src/mario-game.html',
      chunks: ['mario'],
    }),
    new HtmlWebpackPlugin({
      filename: 'space-invaders.html',
      favicon: 'favicon.ico',
      template: 'src/space-invaders.html',
      chunks: ['spaceInvaders'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pacman.html',
      favicon: 'favicon.ico',
      template: 'src/pacman.html',
      chunks: ['pacman'],
    }),
  ],
  watch: true,
  devtool: 'source-map',
}
