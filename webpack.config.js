const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules : [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use:{loader:'babel-loader',
      options: {
        presents:["@babel/present-env"]
      }},
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
           'file-loader'
     ],
     },
    ]
  },
  plugins: []
};