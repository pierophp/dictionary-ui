<template>
  <a href="#words/{{ type }}/{{ fromLang }}/{{ toLang }}/{{ letter }}">{{ letter | uppercase}}</a>
</template>

<script>
  export default {
    props: ['letter', 'fromLang', 'toLang', 'type']
  }
</script>
