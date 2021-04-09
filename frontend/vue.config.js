module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dnbs-website/'
    : '/',
    chainWebpack: config => {
      config.plugins.delete('pwa');
      config.plugins.delete('workbox');
    }
};
