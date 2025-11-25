<template>
  <div class="sub-app">
    <h2>子应用一（Vue2 + qiankun）</h2>

    <p class="desc">
      当前时间（通过主应用的 <code>formatDate</code> 工具函数计算）：
      <strong>{{ now }}</strong>
    </p>

    <p class="desc">
      下面这个按钮组件是 <strong>直接 import 主应用的 GlobalButton 组件</strong>：
    </p>

    <GlobalButton class="mt-8" @click="handleClick">
      子应用中点击我（来自主应用的组件）
    </GlobalButton>

    <router-view />
  </div>
</template>

<script>
// 示例：在子应用中，直接 import 主应用的某个文件（组件 + JS 工具）
import GlobalButton from '@master/shared/components/GlobalButton.vue';
import { formatDate, logWithPrefix } from '@master/shared/utils';

export default {
  name: 'SubAppRoot',
  props: {
    // 主应用通过 qiankun props 传入的共享对象（main.js 中的 shared）
    shared: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    GlobalButton
  },
  data() {
    return {
      now: formatDate(new Date())
    };
  },
  created() {
    // 方式一：直接使用 import 进来的主应用工具
    logWithPrefix('子应用直接 import 主应用的 shared/utils', 'SUB-APP1');

    // 方式二：使用主应用通过 qiankun props 传进来的 shared
    if (this.shared && this.shared.utils && this.shared.utils.logWithPrefix) {
      this.shared.utils.logWithPrefix('子应用通过 props.shared 使用工具函数', 'SUB-APP1');
    }
  },
  methods: {
    handleClick() {
      // eslint-disable-next-line no-alert
      alert('子应用中的 GlobalButton 被点击（组件来自主应用）');
    }
  }
};
</script>

<style lang="scss" scoped>
.sub-app {
  padding: 16px;
  font-size: 14px;

  .desc {
    margin-top: 8px;
  }

  .mt-8 {
    margin-top: 8px;
  }
}
</style>

