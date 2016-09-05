<script>
  import Vue from 'vue'

  Vue.directive('label-placeholder', function() {

    if (!this.el.placeholder) {
      return;
    }

    this.el.classList.add('label-placehoder')

    //console.log(this)


  })
</script>

<style>
.label-placehoder{
    font-weight:bold;
}
</style>
