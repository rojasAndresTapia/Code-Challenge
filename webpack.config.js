const path = require('path');

const rootPath = path.resolve(__dirname, '../../');

const resolveFromRootPath = (...args) => path.join(rootPath, ...args);

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolveFromRootPath('dist')
  },
  rules: [
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
  ],
};
