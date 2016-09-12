<template>
  <div id="app">
    <menu></menu>
    <div id="container">
      <div id="content">
        <router-view></router-view>
        <div class="clearfix"></div>
      </div>
    </div>
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
    max-width: 1160px;
    margin: auto;
    background-color: #fff;
  }

  #content h2 {
    margin: 8px 5px 0;
  }

  .form-group {
    position: relative;
  }
</style>
