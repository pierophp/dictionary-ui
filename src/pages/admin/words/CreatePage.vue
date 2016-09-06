<template>
  <h2>Criação de Palavras</h2>
  <form>
    <div class="form-group">
      <label-placeholder :has-content="!!form.word">Palavra</label-placeholder>
      <input-text :value.sync="form.word" autofocus></input-text>
    </div>

    <div class="form-group">
      <label-placeholder :has-content="!!form.translation">Nova Tradução</label-placeholder>
      <input-text :value.sync="form.translation"></input-text>
      <a href="javascript:void(0)" class="btn btn-primary" @click="add">Adicionar Tradução</a>
    </div>

    <div id="translations">
      <translation v-for="translation in translations" track-by="$index" :index="$index" >{{ translation }}</translation>
    </div>

    <a href="javascript:void(0)" class="btn btn-success" @click="save(form)">Salvar</a>
    <a href class="btn btn-danger">Cancelar</a>
  </form>
</template>

<script>
  import LabelPlaceholder from '../../../components/common/LabelPlaceholder'
  import InputText from '../../../components/common/InputText'
  import Translation from '../../../components/app/Translation'
  import translationStore from '../../../stores/TranslationStore'
  import {
    addTranslation, save
  } from '../../../actions/TranslationActions'

  export default {
    store: translationStore,
    components: {
      LabelPlaceholder,
      InputText,
      Translation
    },
    data() {
      return {
        'form': {
          'word': '',
          'translation': ''
        }
      }
    },
    methods: {
      add() {
        this.addTranslation(this.form.translation)
        this.form.translation = ''
      }
    },
    vuex: {
      getters: {
        translations: state => state.translations
      },
      actions: {
        addTranslation,
        save
      },
    }
  }
</script>

<style>
  form {
    min-width: 500px;
  }
</style>
