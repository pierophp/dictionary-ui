<template>
    <input
       type="text"
       :name="name"
       :id="id"
       class="form-control"
       :required="required !== undefined ? '' : false"
       v-model="value"
       autocomplete="off"/>
</template>

<script>
  export default {
    props: [
      'name',
      'value',
      'autofocus',
      'required'
    ],
    data() {
      return {
        id: 'form-' + this.name
      }
    },
    ready() {
      if (this.autofocus !== undefined) {
        this.$el.focus()
      }
    }

  }
</script>

<style scoped>
  input {
    margin-top: 30px;
  }

  .form-inline input {
    margin-top: 0;
  }
</style>
