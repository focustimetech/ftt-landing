const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        url: false
    },    
    webpack (config, { buildId, dev, dir, isServer, config: { distDir } }) {
        return config;
    }
});
