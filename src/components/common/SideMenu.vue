<template>
  <aside
    id="menu"
    :class="{'visible': isVisible}"
    :style="{'padding-right': width}"
  >
    <div
      class="menu-inner"
      :style="{'width': definedWidth}"
    >
      <button
        type="button"
        class="toggle-menu-button btn"
        @click="toggleVisible"
      >
        <i class="glyphicon glyphicon-menu-hamburger"></i>
      </button>

      <h1>
        {{ title }}
      </h1>
      <div class="menu-content">
        <div class="menu-slot">
        <slot></slot>
        </div>
        <ul class="menu-list">
          <item :model="items"></item>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
  import Item from './SideMenuItem'
  export default {
    props: {
      'items': {
        type: Array,
        default: []
      },
      'title': {
        type: String,
        default: 'Menu'
      },
      'visible': {
        type: Boolean,
        default: true
      },
      'width': {
        type: String,
        default: '300px'
      }
    },
    components: {
      Item
    },
    data() {
      return {
        isVisible: this.visible,
        definedWidth: null
      }
    },
    methods: {
      toggleVisible: function(event) {
        this.isVisible = !this.isVisible
      },
      togglePadding: function(event) {
        this.width = '50px'

        if (this.isVisible) {
          this.width = this.definedWidth
        }
      }
    },
    created() {
      this.definedWidth = this.width
    }
  }
</script>

<style>
  #menu {
    height: 100vh;
    margin-right: 20px;
    position: fixed;
  }

  .menu-inner {
    background-color: #eee;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateX(-83%);
    transition: all .2s;
    width: 100%;
    vertical-align: top;
  }

  #menu.visible .menu-inner {
    transform: translateX(0);
  }

  .btn.toggle-menu-button {
    color: #666;
    font-size: 1.2em;
    line-height: 1;
    position: absolute;
    right: 5px;
    top: 5px;
  }

  #menu h1 {
    font-size: 1.5em;
    font-weight: bold;
    margin-left: 20px;
    margin-top: 0;
    padding-top: 10px;
    text-align: left;
  }

  #menu .menu-list {
    padding: 0;
  }

  #menu .menu-content {
    display: none;
    margin: 40px auto 0;
  }

  #menu .menu-slot{
    padding: 0px 15px;
  }

  #menu.visible .menu-content {
    display: block;
  }

  .menu-item,
  .menu-item.has-submenu>div {
    color: #2c3e50;
    display: block;
    font-size: 1.6rem;
    list-style: none;
    text-align: left;
    width: 100%;
  }

  .menu-item a,
  .menu-item.has-submenu>div {
    display: block;
    width: 100%;
    height: 100%;
    padding: 2% 2% 2% 10%;
    color: inherit;
  }

  .has-submenu ul {
    padding: 0;
  }

  .has-submenu ul li a {
    padding-left: 45px;
  }

  .has-submenu>div {
    cursor: pointer;
  }

  .menu-item{
  }

  .has-submenu .menu-item a{

  }

  #menu.visible .menu-item:not(.has-submenu):hover a,
  #menu.visible .menu-item.has-submenu>div:hover,
  #menu.visible .menu-item a.active {
    background-color: #337ab7;
    color: #fff;
    text-decoration: none;
  }

  #menu + * {
    margin-left: 80px;
  }

  #menu.visible+* {
    margin-left: 330px;
  }

  #menu .show-submenu{
    float: right;
  }
</style>
