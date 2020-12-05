const path = require('path');

module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, 'custom'), 'node_modules'],
    // fallback: {
    //   crypto: require.resolve("crypto-browserify"),
    //   stream: require.resolve("stream-browserify"),
    //   util: require.resolve("util/"),
    //   buffer: require.resolve("buffer/"),
    // },
    // plugins: [
    //   new CustomResolverPlugin({
    //     dir: path.resolve(__dirname, './src/components'),
    //     moduleName: 'lodash',
    //   }),
    // ],
  },
};
