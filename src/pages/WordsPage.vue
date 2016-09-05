<template>
  <letters :language="$route.params.fromLang"></letters>
  <words
      :type="$route.params.type"
      :from-lang="$route.params.fromLang"
      :to-lang="$route.params.toLang"
      :letter="$route.params.letter"
  ></words>
</template>

<script>
  import Letters from '../components/Letters'
  import Words from '../components/Words'
  export default {
    components: {
      Letters,
      Words
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
