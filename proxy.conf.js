const PROXY_CONFIG = [
    {
        context: [
            "/jsonapi"
        ],
        target: "https://jianglibo.com",
        secure: false
        // ,
        // pathRewrite: {'^/jsonapi' : ''}
    }
]

module.exports = PROXY_CONFIG;