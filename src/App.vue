<template>
  <div id="app">
    <menu></menu>
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu'

export default {
  components: {
    Menu
  }
}
</script>

<style>
#container{
  margin: 15px;
}

.form-group{
  position:relative;
}
</style>
