// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // 根据设计图适配  750  -> 375  iphoneX
      viewportWidth: 375
    }
  }
}
