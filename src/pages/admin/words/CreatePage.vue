<template>
  <h2>Create Page</h2>
  <form>
    <div class="form-group">
      <label-placeholder :has-content="!!form.title">Título</label-placeholder>
      <input-text :value.sync="form.title" autofocus></input-text>
    </div>
    <div class="form-group">
      <label-placeholder :has-content="!!form.text">Texto</label-placeholder>
      <input-text :value.sync="form.text"></input-text>
    </div>
  </form>
</template>

<script>
  import LabelPlaceholder from '../../../components/LabelPlaceholder'
  import InputText from '../../../components/InputText'
  export default {
    data() {
        return {
          form: {
            title: '',
            text: '',
          }
        }
      },
      components: {
        LabelPlaceholder,
        InputText
      }
  }
</script>

<style>
  form {
    width: 500px;
  }

</style>
