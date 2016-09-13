<template>
  <div id="letters">
    <letter v-for="letter in letters" :letter="letter" :from-lang="fromLang" :to-lang="toLang" :type="type"></letter>
  </div>
</template>

<script>
  import Letter from './Letter'
  export default {
    components: {
      Letter
    },
    props: ['fromLang', 'toLang', 'type'],
    data() {
      return {
        letters: []
      }
    },
    ready() {
      this.loadLetters()
    },
    watch: {
      'fromLang': {
        handler() {
          this.loadLetters()
        }
      }
    },
    methods: {
      loadLetters() {

        if (!this.fromLang) {
          return;
        }

        this.$http
          .get('letters')
          .then((response) => {
            this.letters = response.body;
          })
          .catch(function(ex) {
            console.log('Exception', ex)
          });
      }
    }

  }
</script>

<style scoped>
  #letters {
    text-align: center;
    padding-top: 15px;
  }

  #letters a {
  border: 1px solid #ccc;
    border-radius: 5px;
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;

    text-align: center;
    font-size: 18px;
    margin: 0 2px;
  }

  #letters a.active {
    background: #337ab7;
    color: #fff;
    text-decoration: none;
  }
</style>
