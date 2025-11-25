import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'

import { registerMicroApps, start } from 'qiankun'
import shared from './shared'

Vue.config.productionTip = false

// 简单的 hash 模式激活规则生成器
const genActiveRule = hashPrefix => {
  return location => location.hash.startsWith(`#${hashPrefix}`)
}

// 注册子应用（目前只接入 subapp1；如需更多子应用可在此追加）
registerMicroApps([
  {
    name: 'vue-sub-app1',
    entry: '//localhost:7101', // 子应用 1 启动地址
    container: '#subapp-viewport',
    activeRule: genActiveRule('/app1'),
    props: {
      shared,
    },
  },
])

// 启动 qiankun
start({
  sandbox: {
    experimentalStyleIsolation: true,
  },
})

// 可选：把共享能力挂到全局，子应用也可以通过 window 访问
// window.__QIANKUN_SHARED__ = shared;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
