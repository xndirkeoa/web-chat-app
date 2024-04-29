// module.exports = function override(config, env) {
//     // Add webpack configuration overrides here
//     // For example, to externalize 'fs' module:
//     config.externals = {
//       fs: 'commonjs fs',
//       zlib: 'commonjs zlib',
//       querystring: 'commonjs querystring',
//       crypto: 'commonjs crypto',
//       path: 'commonjs path',
//       stream: 'commonjs stream',
//       http: 'commonjs http',
//       net: 'commonjs net',
//       util: 'commonjs util',
//       buffer: 'commonjs buffer',
//       async_hooks: 'commonjs async_hooks'
//     };

//     return config;
//   };
  

const webpack = require('webpack');
// In your webpack configuration or entry file
global.process = require('process/browser');

module.exports = function override(config, env) {
    // config.plugins.push(
    //     new webpack.ProvidePlugin({
    //         process: 'process/browser',
    //     })
    // );

    config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          zlib: require.resolve('browserify-zlib'),
          querystring: require.resolve("querystring-es3"),
          assert: require.resolve("assert"),
          buffer: require.resolve("buffer"),
          stream: require.resolve("stream-browserify"),
          util: require.resolve("util"),
          path: require.resolve("path-browserify"),
          crypto: require.resolve("crypto-browserify"),
          http: require.resolve("stream-http"),
          vm: require.resolve("vm-browserify"), 
          process: require.resolve("process/browser"), 
          fs: false,
          net: false,
          async_hooks: false
        },
      };
    return config;
};
