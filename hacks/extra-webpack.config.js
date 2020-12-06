module.exports = {
  resolve: {
    modules: ['hacks/customModules', 'node_modules'],
    // 'fallback' property is not available in webpack 4:
    // fallback: {
    //   crypto: require.resolve("crypto-browserify"),
    //   stream: require.resolve("stream-browserify"),
    //   util: require.resolve("util/"),
    //   buffer: require.resolve("buffer/"),
    // }
  },
};
