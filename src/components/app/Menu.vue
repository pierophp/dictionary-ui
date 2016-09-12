<template>
    <side-menu
    :items="items"
    :visible="true"
    title="Dicionário Ticuna"
    width="300px"
  ></side-menu>
</template>

<script>
  import SideMenu from '../common/SideMenu'
  export default {
    data() {
      return {
        items: [{
          'url': '/words',
          'title': 'Dicionário'
        }, {
          'url': '/about',
          'title': 'Sobre'
        }, {
          'url': '/words/W/en/pt/a',
          'title': 'Palavras - Ticuna -> Português',
          'regex': 'words/W/en/pt/[a-z]',
        }, {
          'url': '/words/W/pt/en/a',
          'title': 'Palavras - Português -> Ticuna',
          'regex': 'words/W/pt/en/[a-z]',
        }, {
          'url': '/words/P/en/pt/a',
          'title': 'Frases - Ticuna -> Português',
          'regex': 'words/P/en/pt/[a-z]',
        }, {
          'url': '/words/P/pt/en/a',
          'title': 'Frases - Português -> Ticuna',
          'regex': 'words/P/pt/en/[a-z]',
        }]
      }
    },
    components: {
      SideMenu
    },
  }
</script>

<style>

</style>
