<template>
  <h2>Lista de Palavras</h2>
  <search-word-form :form.sync="form"></search-word-form>
  <pagination :pagination="pagination" :callback="search" :offset="4"></pagination>
  <search-word-table :items="items"></search-word-table>
  <pagination :pagination="pagination" :callback="search" :offset="4"></pagination>
</template>

<script>
  import SearchWordForm from '../../../components/admin/SearchWordForm'
  import SearchWordTable from '../../../components/admin/SearchWordTable'
  import Pagination from 'vue-bootstrap-pagination'
  export default {
    data() {
        return {
          form: {
            word: '',
            type: '',
            language_id: '1',
          },
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
        Pagination
      },
      events: {
        search() {
          this.pagination.current_page = 1
          this.search()
        }
      },
      methods: {
        search(form) {

          this.$http
            .post('admin/words/search', {
              form: this.form,
              pagination: this.pagination
            })
            .then(function(response) {

              console.log(this.pagination.to)

              let data = response.body.data

              this.pagination.total = data.total
              this.pagination.last_page = Math.ceil(this.pagination.total / this.pagination.per_page)

              this.items = data.items
            }).catch(function(ex) {
              console.log('Exception', ex)
            });
        }
      }
  }
</script>

<style>

</style>
