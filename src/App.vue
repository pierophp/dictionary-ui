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
    float:left;
    margin: auto;
    width: calc(100% - 80px);
  }

  #menu.visible + #container{
    width: calc(100% - 320px);
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
