<template>
  <div class="child-container">
    <h2>子应用二</h2>
    <p>当路由为 <code>/app2</code> 且在 hash 中时，这里会挂载子应用二。</p>
    <p>挂载容器为 <code>#subapp-viewport</code>。</p>
  </div>
</template>

<script>
  export default {
    name: 'App2Container',
  };
</script>

<style lang="scss" scoped>
  .child-container {
    h2 {
      margin-bottom: 8px;
    }
  }
</style>
