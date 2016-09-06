<template>
  <letters
      :type="$route.params.type"
      :from-lang="$route.params.fromLang"
      :to-lang="$route.params.toLang"
  ></letters>
  <words
      :type="$route.params.type"
      :from-lang="$route.params.fromLang"
      :to-lang="$route.params.toLang"
      :letter="$route.params.letter"
  ></words>
</template>

<script>
  import Letters from '../components/app/Letters'
  import Words from '../components/app/Words'
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
