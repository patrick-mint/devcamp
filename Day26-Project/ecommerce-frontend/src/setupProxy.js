const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
 app.use(
   '/api',
   createProxyMiddleware({
     target: 'http://13.228.30.203:3000',
     changeOrigin: true,
   })
 );
};
