<template>
  <div class="home-page">
    <h1>主应用首页</h1>
    <p>这是基于 Vue2 + qiankun 的主应用。</p>

    <section class="section">
      <h2>功能说明</h2>
      <ul>
        <li>使用 qiankun 作为微前端框架，当前工程为主应用。</li>
        <li>路由采用 <code>hash</code> 模式。</li>
        <li>样式使用 <code>Sass</code> 预处理。</li>
        <li>
          通过 <code>shared</code> 模块向子应用暴露组件和工具函数（在子应用中通过
          <code>props.shared</code> 使用）。
        </li>
      </ul>
    </section>

    <section class="section">
      <h2>快速开始</h2>
      <ol>
        <li>在本工程根目录执行 <code>npm install</code></li>
        <li>运行 <code>npm run serve</code> 启动主应用</li>
        <li>
          在子应用中通过 qiankun 的 <code>props</code> 或
          <code>window.__QIANKUN_SHARED__</code> 使用共享能力
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
  };
</script>

<style lang="scss" scoped>
  .home-page {
    h1 {
      margin-bottom: 12px;
    }

    .section {
      margin-top: 24px;
    }
  }
</style>
