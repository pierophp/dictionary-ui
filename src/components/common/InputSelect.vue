<template>
    <select
       :name="name"
       :id="id"
       class="form-control"
       :required="required !== undefined ? '' : false"
       v-model="value"
       >
       <option v-for="(index, option) in options" :value="index">{{option}}</option>
    </select>
</template>

<script>
  export default {
    props: [
      'name',
      'value',
      'autofocus',
      'options',
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
  select {
    margin-top: 30px;
  }

  .form-inline select {
    margin-top: 0;
  }
</style>
