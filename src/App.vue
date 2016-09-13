<template>
  <div id="app">
    <menu></menu>
    <div id="container">
      <div id="content">
        <router-view></router-view>
        <div class="clearfix"></div>
      </div>
      <app-footer></app-footer>
    </div>

  </div>
</template>

<script>
  import Menu from './components/app/Menu'
  import AppFooter from './components/app/Footer'
  export default {
    components: {
      Menu,
      AppFooter
    }
  }
</script>

<style>
  body {
    background-color: #f7f7f7;
  }

  #container {
    background-color: #fff;
    margin: auto;
  }

  #app {
    overflow: auto;
  }

  #content {
    border-radius: 15px;
    border: 1px solid #ccc;
    margin-right: 30px;
    min-height: calc(100vh - 30px);
    padding: 0px 20px;
  }

  #content h2 {
    margin: 8px 5px 0;
  }

  .form-group {
    position: relative;
  }
</style>
