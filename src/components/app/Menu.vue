<template>
    <side-menu
    :items="items"
    :visible="true"
    title="Dicionário Ticuna"
  >
  <form id="form-search">
    <input type="text" class="form-control" placeholder="Busca"/>
  </form>
  </side-menu>
</template>

<script>
  import SideMenu from '../common/SideMenu'
  export default {
    data() {
      return {
        items: [{
          url: '/',
          title: 'Dicionário'
        }, {
          title: 'Palavras',
          children: [{
            'url': '/words/W/en/pt/a',
            'title': 'Ticuna » Português',
            'regex': 'words/W/en/pt/[a-z]',
          }, {
            'url': '/words/W/pt/en/a',
            'title': 'Português » Ticuna',
            'regex': 'words/W/pt/en/[a-z]',
          }]
        }, {
          title: 'Frases',
          children: [{
            'url': '/words/P/en/pt/a',
            'title': 'Ticuna » Português',
            'regex': 'words/P/en/pt/[a-z]',
          }, {
            'url': '/words/P/pt/en/a',
            'title': 'Português » Ticuna',
            'regex': 'words/P/pt/en/[a-z]',
          }]
        }, {
          'url': '/about',
          'title': 'Sobre'
        }]
      }
    },
    components: {
      SideMenu
    },
  }
</script>

<style scoped>
  #form-search {
    margin-bottom: 15px;
  }
</style>
