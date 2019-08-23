// vue.config.js
const path = require('path')
module.exports = {
    configureWebpack: () => ({
        resolve: {
            alias: {
                '@': path.resolve('./src')
            }
        }
    }),
    devServer: {
        host: '192.168.1.69',
        port: '8080'
    },
    chainWebpack: config => {
        config.plugin('define').tap(args => {
            args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
            return args
        })
    }
}