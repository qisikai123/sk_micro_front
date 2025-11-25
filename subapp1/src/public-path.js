/* 在 qiankun 环境下动态设置 webpack 的 publicPath */
// eslint-disable-next-line no-undef
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

