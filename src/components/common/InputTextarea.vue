<template>
    <textarea
        :name="name"
        class="form-control"
        :id="id"
        :autofocus="autofocus !== undefined ? '' : false"
        :rows="rows || 6"
        v-model="value">
    </textarea>
</template>

<script>
  export default {
    props: ['name', 'value', 'autofocus', 'rows'],
    data() {
      return {
        id: 'form-' + this.name
      }
    }
  }
</script>

<style scoped>
  textarea {
    margin-top: 30px;
  }
</style>
