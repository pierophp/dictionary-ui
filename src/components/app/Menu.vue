<template>
  <div class="navbar navbar-inverse">
    <div id="menu-container">

        <a class="navbar-brand" href="#/">
              Dicionário
        </a>

        <a class="navbar-brand" href="#/about">
              Sobre
        </a>

        <ul class="nav navbar-nav">
            <dropdown-menu v-for="menu in menus" :title="menu.title" :links="menu.links"></dropdown-menu>
        </ul>
    </div>
</div>
</template>

<script>
  import DropdownMenu from '../common/DropdownMenu'
  export default {
    data() {
        return {
          menus: [{
            title: 'Palavras',
            links: [{
              title: 'Ticuna -> Português',
              url: '#words/W/en/pt/a'
            }, {
              title: 'Português -> Ticuna',
              url: '#words/W/pt/en/a'
            }]
          }, {
            title: 'Frases',
            links: [{
              title: 'Ticuna -> Português',
              url: '#words/P/en/pt/a'
            }, {
              title: 'Português -> Ticuna',
              url: '#words/P/pt/en/a'
            }]
          }]
        }
      },
      components: {
        DropdownMenu
      },
  }

  $('.dropdown-toggle').dropdown()
</script>

<style>
  .navbar{
    margin-bottom: 0;
  }
  #menu-container {
    margin: auto;
    max-width: 1160px;
  }
</style>
