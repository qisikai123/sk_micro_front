import './public-path';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

let instance = null;

function render(props = {}) {
  const { container, shared } = props;

  instance = new Vue({
    router,
    render: (h) => h(App, { props: { shared } })
  }).$mount(container ? container.querySelector('#subapp-root') : '#subapp-root');
}

// 独立运行时（不在 qiankun 中），直接渲染
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// qiankun 微应用生命周期
export async function bootstrap() {
  // eslint-disable-next-line no-console
  console.log('[vue-sub-app1] bootstrap');
}

export async function mount(props) {
  // eslint-disable-next-line no-console
  console.log('[vue-sub-app1] mount with props:', props);
  render(props);
}

export async function unmount() {
  // eslint-disable-next-line no-console
  console.log('[vue-sub-app1] unmount');
  if (instance) {
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
  }
}

