<template>
  <table class="table table-bordered table-striped">
    <tr>
      <th>Texto</th>
      <th>Tipo</th>
      <th>Traduções</th>
      <th></th>
    </tr>
    <tr v-for="item in items">
      <td>{{item.text}}</td>
      <td>{{item.type | wordType}}</td>
      <td>{{item.translation}}</td>
      <td>
        <div class="btn-group">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Ação <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a href="#admin/words/edit/{{item.id}}">
                <i class="glyphicon glyphicon-pencil"></i>&nbsp;
                Editar
              </a>
            </li>
            <li>
              <a href="#">
                <i class="glyphicon glyphicon-trash"></i>&nbsp;
                Apagar
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
  import WordTypeFilter from '../../filters/WordTypeFilter'
  export default {
    filters: {
      wordType: WordTypeFilter
    },
    props: ['items']
  }
</script>

<style scoped>

</style>
