<template>
  <div id="app">
    <menu></menu>
    <div id="container">
      <div id="content">
        <router-view></router-view>
        <div class="clearfix"></div>
      </div>
    </div>
    <footer>
      Teste
    </footer>
  </div>
</template>

<script>
  import Menu from './components/app/Menu'
  export default {
    components: {
      Menu
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

  #content h2 {
    margin: 8px 5px 0;
  }

  .form-group {
    position: relative;
  }
</style>
