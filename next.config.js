const withSass = require('@zeit/next-sass');
// const defaultGetLocalIdent = require('@zeit/css-loader/lib/getLocalIdent');
const withCSS = require("@zeit/next-css");
module.exports = withSass(withCSS({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        url: false
    },
    // sassLoaderOptions: {},
    
    webpack (config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        });

        return config;
    }
}));
