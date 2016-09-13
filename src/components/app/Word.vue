<template>
  <div class="word">
    <div>
      <span class="label label-primary main-word">{{ word.text }}</span>
      {{ word.translation.observation }}
    </div>
    <div class="translations">
        <span v-for="translationWord in word.translation.words" class="label label-success translation-word">
            {{ translationWord.text }}
        </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['word']
  }
</script>

<style scoped>
  .word {
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    margin-top: 10px;
    padding: 15px;
  }

  .main-word{
    font-size: 18px;
  }

  .translation-word{
    font-size: 15px;
    margin-right: 6px;
  }

  .translations{
    padding-top: 15px
  }
</style>
