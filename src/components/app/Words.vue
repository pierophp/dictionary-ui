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

        let resource = this.$resource('words{/type}{/fromLang}{/toLang}?letter={letter}');

        resource.get({
          type: this.type,
          fromLang: this.fromLang,
          toLang: this.toLang,
          letter: this.letter,
        }).then((response) => {
          this.words = response.body;
        });

      }
    }

  }
</script>

<style scoped>
  #letters {
    text-align: center;
  }

  #letters a {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ccc;
    text-align: center;
  }
</style>
