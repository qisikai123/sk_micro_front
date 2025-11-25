<template>
  <div id="layout">
    <header class="app-header">
      <div class="logo">Qiankun 主应用 (Vue2)</div>
      <nav class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/app1">子应用一</router-link>
        <router-link to="/app2">子应用二</router-link>
      </nav>
    </header>

    <main class="app-main">
      <section class="main-view">
        <router-view />
      </section>

      <section class="subapp-view">
        <!-- qiankun 子应用渲染容器 -->
        <div id="subapp-viewport"></div>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';

  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    background: $color-primary;
    color: #fff;

    .logo {
      font-size: 18px;
      font-weight: bold;
    }

    .nav {
      a {
        color: #fff;
        margin-left: 16px;
        text-decoration: none;

        &.router-link-exact-active {
          font-weight: bold;
          text-decoration: underline;
        }
      }
    }
  }

  .app-main {
    display: flex;
    height: calc(100vh - 56px);
  }

  .main-view {
    flex: 1;
    padding: 16px;
    overflow: auto;
  }

  .subapp-view {
    width: 50%;
    min-width: 400px;
    border-left: 1px solid #e5e5e5;
    padding: 16px;
    background: #fafafa;
    overflow: auto;
  }
</style>
