<template>
  <div>
    <h2>Gerenciamento de Palavras</h2>
    <form>

      <div class="form-group">
        <label-placeholder :has-content="!!form.word" name="word">Palavra</label-placeholder>
        <input-text :value.sync="form.word" autofocus name="word"></input-text>
      </div>

      <div class="form-group">
        <label-placeholder :has-content="!!form.type" name="type">Tipo</label-placeholder>
        <input-select :value.sync="form.type" :options="types" name="type" required></input-select>
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
      <a href="#admin/words" class="btn btn-danger">
        <i class="glyphicon glyphicon-remove"></i>
        Cancelar
      </a>
    </form>
  </div>
</template>

<script>
  import LabelPlaceholder from '../../../components/common/LabelPlaceholder'
  import InputText from '../../../components/common/InputText'
  import InputSelect from '../../../components/common/InputSelect'
  import InputTextarea from '../../../components/common/InputTextarea'
  import Translation from '../../../components/admin/Translation'
  import translationStore from '../../../stores/TranslationStore'
  import {
    addTranslation,
    setTranslations,
    update,
    save
  } from '../../../actions/TranslationActions'

  export default {
    store: translationStore,
    components: {
      LabelPlaceholder,
      InputText,
      InputSelect,
      InputTextarea,
      Translation
    },
    data() {
      return {
        'form': {
          'word': '',
          'type': '',
          'observation': '',
          'translation': ''
        },
        types: {
          '': '',
          'W': 'Palavra',
          'P': 'Frase'
        }
      }
    },
    ready() {
      if (this.$route.params.id) {
        this.$http
          .post('admin/words/find', {
            id: this.$route.params.id
          })
          .then((response) => {
            let data = response.body.data
            this.form.word = data.word.text
            this.form.observation = data.translation.observation

            let translations = [];
            for (let translationWord of data.translationsWords) {
              translations.push(translationWord.text)
            }

            this.setTranslations(translations)

          })
          .catch((error) => {
            console.log('Exception ', error)
          });
      }
    },
    methods: {
      addAction() {
        this.addTranslation(this.form.translation)
        this.form.translation = ''
      },
      saveAction() {
        this.update({
          type: this.form.type,
          word: this.form.word,
          observation: this.form.observation
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
        setTranslations,
        update,
        save
      }
    }
  }
</script>

<style scoped>
  #translations {
    padding: 10px 0 25px;
  }

  form {
    max-width: 500px;
  }

  .add-translation {
    margin-top: 15px;
  }
</style>
