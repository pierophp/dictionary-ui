<template>
<div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">{{ title }}</h4>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
        <button type="button" class="btn btn-primary" @click="confirm">Confirmar</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    props: ['title', 'id', 'callback'],
    methods: {
      confirm() {
        this.callback()
        $('#' + this.id).modal('hide')
      }
    }
  }
</script>
