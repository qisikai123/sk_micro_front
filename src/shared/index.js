// 对外统一暴露给子应用的能力（组件、工具函数等）
import GlobalButton from './components/GlobalButton.vue';
import * as utils from './utils';

export default {
  components: {
    GlobalButton,
  },
  utils,
};
