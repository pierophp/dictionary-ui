<template>
  <div class="navbar navbar-inverse">

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
</template>

<script>
  import DropdownMenu from './DropdownMenu'
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
              url: '#words/F/en/pt/a'
            }, {
              title: 'Português -> Ticuna',
              url: '#words/F/pt/en/a'
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
