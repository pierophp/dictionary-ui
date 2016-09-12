<template>
  <a v-link="{ path: link }" v-menu-active="{ path: link }">{{ letter | uppercase}}</a>
</template>

<script>
  import MenuActive from '../../directives/MenuActive'
  export default {
    props: ['letter', 'fromLang', 'toLang', 'type'],
    directives: {
      MenuActive
    },
    data() {
      return {
        link: ''
      }
    },
    watch: {
      'letter': {
        handler() {
          this.changeMenuLink()
        }
      },
      'fromLang': {
        handler() {
          this.changeMenuLink()
        }
      },
      'toLang': {
        handler() {
          this.changeMenuLink()
        }
      },
      'type': {
        handler() {
          this.changeMenuLink()
        }
      }
    },
    methods: {
      changeMenuLink() {
        this.link = '/words/' + this.type + '/' + this.fromLang + '/' + this.toLang + '/' + this.letter
      }
    },
    ready() {
      this.changeMenuLink()
    }
  }

</script>
