const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './assets/js/main.js',
    mario: './assets/js/mario.js',
    spaceInvaders: './assets/js/spaceInvaders.js',
    pacman: './assets/js/pacman.js',
    pokemon: './assets/js/pokemon.js',
    fighting: './assets/js/fighting.js',
    towerDefense: './assets/js/tower-defense.js',
    pong: './assets/js/pong.js',
    multiroom: './assets/js/multiroom.js',
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
        test: /\.(png|jpe?g|gif|wav|mp3)$/i,
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
    new HtmlWebpackPlugin({
      filename: 'pokemon.html',
      favicon: 'favicon.ico',
      template: 'src/pokemon.html',
      chunks: ['pokemon'],
    }),
    new HtmlWebpackPlugin({
      filename: 'fighting-game.html',
      favicon: 'favicon.ico',
      template: 'src/fighting-game.html',
      chunks: ['fighting'],
    }),
    new HtmlWebpackPlugin({
      filename: 'tower-defense.html',
      favicon: 'favicon.ico',
      template: 'src/tower-defense.html',
      chunks: ['towerDefense'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pong.html',
      favicon: 'favicon.ico',
      template: 'src/pong.html',
      chunks: ['pong'],
    }),
    new HtmlWebpackPlugin({
      filename: 'multiroom.html',
      favicon: 'favicon.ico',
      template: 'src/multiroom.html',
      chunks: ['multiroom'],
    }),
  ],
  watch: true,
  devtool: 'source-map',
}
