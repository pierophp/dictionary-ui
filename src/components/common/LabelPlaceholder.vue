<template>
    <label :class="{ 'label-placeholder-fixed': hasContent }" class="label-placeholder" :for="for">
        <slot></slot>
    </label>
</template>

<script>
  export default {
    data(){
      return {for:  'form-' + this.name}
    },
    props: ['hasContent', 'name']
  }
</script>

<style>
  .label-placeholder {
    position: absolute;
    top: 7px;
    left: 10px;
    font-weight: normal;
    color: #999;
    transition: all .15s;
    cursor: text;
  }

  .label-placeholder-fixed {
    color: inherit;
    top: -23px;
  }
</style>
