<template>
  <div>
    <h2>Lista de Palavras</h2>
    <search-word-form :form.sync="form"></search-word-form>
    <pagination :pagination="pagination" :callback="search" :offset="4"></pagination>
    <search-word-table :items="items"></search-word-table>
    <pagination :pagination="pagination" :callback="search" :offset="4"></pagination>
    <modal title="Confirmação" id="modal-delete" :callback="delete">Tem certeza que deseja apagar?</modal>
  </div>
</template>

<script>
  import SearchWordForm from '../../../components/admin/SearchWordForm'
  import SearchWordTable from '../../../components/admin/SearchWordTable'
  import Modal from '../../../components/common/Modal'
  import Pagination from 'vue-bootstrap-pagination'
  import queryString from 'query-string'
  export default {
    data() {
      return {
        form: {
          word: '',
          type: '',
          language_id: '1',
        },
        delete_id: null,
        items: [],
        pagination: {
          total: 0,
          per_page: 2, // required
          current_page: 1, // required
          last_page: 0, // required
          from: 1,
          to: true // required
        }
      }
    },
    components: {
      SearchWordForm,
      SearchWordTable,
      Pagination,
      Modal
    },
    ready() {
      if (this.$route.query.form) {
        this.loadQueryString()
        this.search()
      }
    },
    events: {
      showDeleteModal(id) {
        this.delete_id = id
        $('#modal-delete').modal('show')
      },
      search() {
        this.pagination.current_page = 1
        this.search()
      }
    },
    methods: {

      loadQueryString() {

        let items = queryString.parse(this.$route.query.form)
        for (let key in items) {
          this.form[key] = items[key]
        }

        items = queryString.parse(this.$route.query.pagination)
        for (let key in items) {
          this.pagination[key] = items[key]
        }
      },

      queryStringPagination() {
        return {
          current_page: this.pagination.current_page
        }
      },
      search() {

        this.$route.router.replace({
          name: 'admin_words',
          query: {
            form: queryString.stringify(this.form),
            pagination: queryString.stringify(this.queryStringPagination())
          }
        })

        this.$http
          .post('admin/words/search', {
            form: this.form,
            pagination: this.pagination
          })
          .then((response) => {

            let data = response.body.data

            this.pagination.total = data.total
            this.pagination.last_page = Math.ceil(this.pagination.total / this.pagination.per_page)

            this.items = data.items
          })
          .catch((error) => {
            console.log('Exception ', error)
          });
      },
      delete() {
        console.log('deleted ' + this.delete_id)
      }
    }
  }
</script>

<style>

</style>
