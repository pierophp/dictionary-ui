<template>
  <form class="form-inline" @submit.prevent="search">
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
          <input-select :value.sync="form.type" :options="types" name="type"></input-select>
        </div>
        <div class="form-group">
          <label-placeholder :has-content="!!form.language_id" name="language_id">Idioma</label-placeholder>
          <input-select :value.sync="form.language_id" :options="languages" name="language_id"></input-select>
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
  import ObjectToList from '../common/ObjectToList'
  export default {
    data() {
      return {
        languages: [],
        types: {
          '': '',
          'W': 'Palavra',
          'P': 'Frase'
        }
      }
    },
    ready() {
      this.$http
        .get('languages/all')
        .then(function(response) {
          this.languages = ObjectToList(response.body.data, 'id', 'name')
        }).catch(function(ex) {
          console.log('Exception', ex)
        });
    },
    props: ['form'],
    methods: {
      search() {
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
