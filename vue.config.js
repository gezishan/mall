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
        proxy: {
            // 配置跨域
            '/api': {
                target: 'https://www.baidu.com/api',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before(app) {
            // http://localhost:8080/goods
            app.get('/goods', (req, res) => {
                res.json(goods)
            })
        }
    }
}