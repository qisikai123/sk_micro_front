<template>
  <button class="global-button" @click="$emit('click')">
    <slot>全局按钮</slot>
  </button>
</template>

<script>
  export default {
    name: 'GlobalButton',
  };
</script>

<style lang="scss" scoped>
  /* 使用相对路径，方便在主应用和子应用中都能正常解析 */
  @import '../../styles/variables.scss';

  .global-button {
    padding: 6px 12px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background: $color-primary;
    color: #fff;
    font-size: 14px;
  }
</style>
