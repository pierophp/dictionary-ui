<template>
  <div class="word">
    <b>{{ word.text }} - </b> {{ word.translation.observation }}
    <ul>
        <li v-for="translationWord in word.translation.words">
            {{ translationWord.text }}
        </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['word']
  }
</script>

<style scoped>
.word {
    font-size: 14px;
    border: 1px solid #ccc;
    padding: 15px;
    margin-top: 10px;
    border-radius: 5px;
}
</style>
