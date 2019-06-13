module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/generate': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
    },
  },
};
