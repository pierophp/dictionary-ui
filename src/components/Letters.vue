<template>
  <div id="letters">
    <letter v-for="letter in letters" :letter="letter"></letter>
  </div>
</template>

<script>
  import Letter from '../components/Letter'
  import {
    baseUrl
  } from '../../config'
  export default {
    components: {
      Letter
    },
    props: ['language'],
    data() {
      return {
        letters: []
      }
    },
    ready() {
      this.loadLetters()
    },
    watch: {
      'language': {
        handler() {
          this.loadLetters()
        }
      }
    },
    methods: {
      loadLetters() {

        let that = this

        fetch(baseUrl + 'letters')
          .then(function(response) {
            return response.json();
          })
          .then(function(json) {
            that.letters = json;
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
