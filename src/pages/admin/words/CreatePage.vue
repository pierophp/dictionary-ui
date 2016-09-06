<template>
  <h2>Criação de Palavras</h2>
  <form>

    <div class="form-group">
      <label-placeholder :has-content="!!form.word" name="word">Palavra</label-placeholder>
      <input-text :value.sync="form.word" autofocus name="word"></input-text>
    </div>

    <div class="form-group">
      <label-placeholder :has-content="!!form.observation" name="observation">Observação</label-placeholder>
      <input-textarea :value.sync="form.observation" name="observation" ></input-textarea>
    </div>

    <div class="form-group">
      <label-placeholder :has-content="!!form.translation" name="translation">Nova Tradução</label-placeholder>
      <input-text :value.sync="form.translation" name="translation"></input-text>
      <a href="javascript:void(0)" class="btn btn-primary add-translation" @click="addAction">
        <i class="glyphicon glyphicon-plus"></i>
        Adicionar
      </a>
    </div>

    <div id="translations">
      <translation v-for="translation in translations" track-by="$index" :index="$index">{{ translation }}</translation>
    </div>

    <a href="javascript:void(0)" class="btn btn-success" @click="saveAction">
      <i class="glyphicon glyphicon-ok"></i>
      Salvar
    </a>
    <a href class="btn btn-danger">
      <i class="glyphicon glyphicon-remove"></i>
      Cancelar
    </a>
  </form>
</template>

<script>
  import LabelPlaceholder from '../../../components/common/LabelPlaceholder'
  import InputText from '../../../components/common/InputText'
  import InputTextarea from '../../../components/common/InputTextarea'
  import Translation from '../../../components/app/Translation'
  import translationStore from '../../../stores/TranslationStore'
  import {
    addTranslation,
    update,
    save
  } from '../../../actions/TranslationActions'

  export default {
    store: translationStore,
    components: {
      LabelPlaceholder,
      InputText,
      InputTextarea,
      Translation
    },
    data() {
      return {
        'form': {
          'word': '',
          'observation': '',
          'translation': ''
        }
      }
    },
    methods: {
      addAction() {
        this.addTranslation(this.form.translation)
        this.form.translation = ''
      },
      saveAction() {
        this.update({
          word:this.form.word,
          observation:this.form.observation
        })
        this.save(this.$store.state)
      }
    },
    vuex: {
      getters: {
        translations: state => state.translations
      },
      actions: {
        addTranslation,
        update,
        save
      }
    }
  }
</script>

<style>
  #translations {
    padding: 10px 0 25px;
  }

  form {
    min-width: 500px;
  }

  .add-translation{
    margin-top: 15px;
  }
</style>
