module.exports = {
    chainWebpack: config => {
        config.plugin('define')
            .tap(args => {
                args[0]['process.env']['@knekk/spinners'] = JSON.stringify(require('./package.json').dependencies['@knekk/spinners'])
                return args
            })
    },
    indexPath: '../index.html',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/dist/'
        : '/'
}
