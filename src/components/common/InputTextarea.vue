<template>
    <textarea
        :name="name"
        class="form-control"
        :id="id"
        :required="required !== undefined ? '' : false"
        :rows="rows || 6"
        v-model="value">
    </textarea>
</template>

<script>
  export default {
    props: [
      'name',
      'value',
      'autofocus',
      'rows',
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
  textarea {
    margin-top: 30px;
  }

  .form-inline textarea {
    margin-top: 0;
  }
</style>
