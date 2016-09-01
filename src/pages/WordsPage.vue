<template>
  <letters :language="$route.params.fromLang"></letters>
  <words
      :type="$route.params.type"
      :fromLang="$route.params.fromLang"
      :toLang="$route.params.toLang"
      :letter="$route.params.letter"
  ></words>
</template>

<script>
  import Letters from '../components/Letters'
  import Word from '../components/Word'
  import {
    baseUrl
  } from '../../config'
  export default {
    components: {
      Letters,
      Word
    },
    data() {
      return {
        words: []
      }
    },
    route: {
      data() {

      }
    },

    methods: {

    }
  }
</script>
