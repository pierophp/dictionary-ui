<template>
    <input type="text" :name="name" class="form-control" :autofocus="autofocus !== undefined ? '' : false" v-model="value" autocomplete="off"/>
</template>
<script>
  export default {
      props: ['name', 'value', 'autofocus']
  }
</script>


<style scoped>
  input {
    margin-top: 30px;
  }
</style>
