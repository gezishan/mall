const goods = require('./public/goods.json')

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: [],
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },
    devServer: {
        open: true,
        // host: 'localhost',
        host: '0.0.0.0', // 允许外部ip访问
        port: 8080,
        https: false,
        hotOnly: false,
        // proxy: {
        //     // 配置跨域
        //     '/api': {
        //         target: 'https://list.mogu.com',
        //         ws: true,   //如果要代理 websockets，配置这个参数
        //         secure: true,  // false为http访问，true为https访问
        //         changeOrigin: true,   //是否跨域
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // },
        before(app) {
            // http://localhost:8080/goods
            app.get('/goods', (req, res) => {
                res.json(goods)
            })
        }
    }
}