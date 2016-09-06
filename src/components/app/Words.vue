<template>
    <word v-for="word in words" :word="word"></word>
</template>

<script>
  import Word from './Word'
  import {
    baseUrl
  } from '../../../config'
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

        let that = this

        fetch(baseUrl + 'words/' + this.type + '/' + this.fromLang + '/' + this.toLang + '/?letter=' + this.letter)
          .then(function(response) {
            return response.json();
          })
          .then(function(json) {
            that.words = json;
          })
          .catch(function(ex) {
            console.log('parsing failed', ex)
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
