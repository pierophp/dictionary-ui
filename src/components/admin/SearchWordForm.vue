<template>
  <form class="form-inline" @submit="search">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Busca</h3>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label-placeholder :has-content="!!form.word" name="word">Palavra</label-placeholder>
          <input-text :value.sync="form.word" autofocus name="word"></input-text>
        </div>
        <div class="form-group">
          <label-placeholder :has-content="!!form.type" name="type">Tipo</label-placeholder>
          <input-select :value.sync="form.type" :options="typeOptions" name="type"></input-select>
        </div>
        <div class="form-group">
          <input type="submit" class="btn btn-primary" value="Buscar"/>
          <a href="#admin/words/create" class="btn btn-success">
            <i class="glyphicon glyphicon-plus"></i>
            Adicionar
          </a>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
  import LabelPlaceholder from '../common/LabelPlaceholder'
  import InputText from '../common/InputText'
  import InputSelect from '../common/InputSelect'
  export default {
    data() {
        return {
          typeOptions: {
            '': '',
            'W': 'Palavra',
            'P': 'Frase'
          }
        }
      },
      props: ['form'],
      methods: {
        search(e) {
          e.preventDefault()
          this.$dispatch('search', this.form)
        }
      },
      components: {
        LabelPlaceholder,
        InputText,
        InputSelect
      }
  }
</script>

<style scoped>
  .form-group {
    margin-top: 15px;
  }
</style>
