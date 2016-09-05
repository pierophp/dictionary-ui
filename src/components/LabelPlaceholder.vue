<template>
    <label :class="{ 'label-placeholder-fixed': hasContent }" class="label-placeholder">
        <slot></slot>
    </label>
</template>

<script>
  export default {
    props: ['hasContent']
  }
</script>

<style>
  .label-placeholder{
    position: absolute;
    top: 7px;
    left:10px;
    font-weight: normal;
    color: #999;
    transition: all .15s;
  }
  .label-placeholder-fixed{
    color:inherit;
    top: -23px;
  }
</style>
