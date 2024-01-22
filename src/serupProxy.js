const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      //target: "http://localhost:8080",
      target: "http://43.201.237.33:8080/",
      changeOrigin: true,
    })
  );
};