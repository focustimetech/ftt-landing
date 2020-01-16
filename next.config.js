const withSass = require('@zeit/next-sass');
// const defaultGetLocalIdent = require('@zeit/css-loader/lib/getLocalIdent');
// const withCSS = require("@zeit/next-css");
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
const path = require('path')

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        url: false
    },
    // sassLoaderOptions: {},
    
    webpack (config, { buildId, dev, dir, isServer, config: { distDir } }) {

        return config;
    }
});
