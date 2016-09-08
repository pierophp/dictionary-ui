<template>
  <span class="label label-default">
    <slot></slot>
    <a href="javascript:void(0)" @click="remove">X</a>
  </span>
</template>

<script>
  import {
    removeTranslation
  } from '../../actions/TranslationActions';
  export default {
    props: ['index'],
    methods: {
      remove() {
        this.removeTranslation(this.index)
      }
    },
    vuex: {
      actions: {
        removeTranslation,
      },
    },
  }
</script>

<style scoped>
  span {
    margin-right: 5px;
    font-size: 25px;
  }

  span a {
    font-size: 15px;
    color: #fff !important;
  }
</style>
