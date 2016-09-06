<template>
    <input
       type="text"
       :name="name"
       :id="id"
       class="form-control"
       :autofocus="autofocus !== undefined ? '' : false"
       v-model="value"
       autocomplete="off"/>
</template>

<script>
  export default {
    props: ['name', 'value', 'autofocus'],
    data() {
      return {
        id: 'form-' + this.name
      }
    }

  }
</script>

<style scoped>
  input {
    margin-top: 30px;
  }
</style>
