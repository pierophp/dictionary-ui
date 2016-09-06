<template>
  <a href="#words/W/pt/en/{{ letter }}">{{ letter | uppercase}}</a>
</template>

<script>
  export default {
    props: ['letter']
  }
</script>
