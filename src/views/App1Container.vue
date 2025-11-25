<template>
  <div class="child-container">
    <h2>子应用一</h2>
    <p>当路由为 <code>/app1</code> 且在 hash 中时，这里会挂载子应用一。</p>
    <p>挂载容器为 <code>#subapp-viewport</code>。</p>
  </div>
</template>

<script>
export default {
  name: 'App1Container',
}
</script>

<style lang="scss" scoped>
.child-container {
  h2 {
    margin-bottom: 8px;
  }
}
</style>
