const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');
const webpack = require('webpack');

module.exports = override(
    // Add webpack alias for easier module imports
    addWebpackAlias({
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        // Add more aliases as needed
    }),
    (config, env) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            zlib: require.resolve('browserify-zlib'),
            querystring: require.resolve('querystring-es3'),
            assert: require.resolve('assert'),
            buffer: require.resolve('buffer'),
            stream: require.resolve('stream-browserify'),
            util: require.resolve('util'),
            path: require.resolve('path-browserify'),
            crypto: require.resolve('crypto-browserify'),
            http: require.resolve('stream-http'),
            vm: require.resolve('vm-browserify'),
            process: require.resolve('process/browser'),
            fs: false,
            net: false,
            async_hooks: false
        };

        // Add any additional webpack configuration overrides here
        // For example, to use a webpack plugin:
        // config.plugins.push(new webpack.ProvidePlugin({ process: 'process/browser' }));

        return config;
    }
);
