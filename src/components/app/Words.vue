<template>
    <word v-for="word in words" :word="word"></word>
</template>

<script>
  import Word from './Word'
  export default {
    components: {
      Word
    },
    props: [
      'type',
      'fromLang',
      'toLang',
      'letter'
    ],
    data() {
      return {
        words: []
      }
    },
    ready() {
      this.loadWords()
    },
    watch: {
      'type': {
        handler() {
          this.loadWords()
        }
      },
      'fromLang': {
        handler() {
          this.loadWords()
        }
      },
      'toLang': {
        handler() {
          this.loadWords()
        }
      },
      'letter': {
        handler() {
          this.loadWords()
        }
      }
    },
    methods: {
      loadWords() {

        if (!this.letter) {
          return;
        }

        let resource = this.$resource('words{/type}{/fromLang}{/toLang}?letter={letter}');

        resource.get({
          type: this.type,
          fromLang: this.fromLang,
          toLang: this.toLang,
          letter: this.letter,
        }).then((response) => {
          this.words = response.body;
        }).catch((error) => {
          console.log(error)
        });

      }
    }

  }
</script>

<style [>

</style>
