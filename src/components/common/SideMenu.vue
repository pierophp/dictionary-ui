<template>
  <aside
    id="menu"
    :class="{'visible': isVisible}"
    :style="{'padding-right': width}"
    v-on:click="togglePadding"
  >
    <div
      class="menu-inner"
      :style="{'width': definedWidth}"
    >
      <button
        type="button"
        class="toggle-menu-button btn"
        v-on:click="toggleVisible"
      >
        <i class="glyphicon glyphicon-menu-hamburger"></i>
      </button>

      <h1>
        {{ title }}
      </h1>

      <ul>
        <li class="menu-item" v-for="item in items">
          <a v-link="{ path: item.url }" v-menu-active="{ path: item.url, regex: item.regex }">
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  import MenuActive from '../../directives/MenuActive'
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
    directives: {
      menuActive: MenuActive
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

<style scoped>
  #menu {
    float: left;
    height: 100%;
    margin-right: 20px;
    position: relative;
  }

  #menu.visible {
    margin-left: 0;
  }

  .menu-inner {
    background-color: #ddd;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateX(-83%);
    transition: all .2s;
    width: 100%;
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

  #menu ul {
    margin: 40px auto 0;
    padding: 0;
    width: 90%;
  }

  .menu-item {
    list-style: none;
  }

  #menu.visible .menu-item a {
    border-bottom: 1px solid #2c3e50;
  }

  .menu-item a {
    color: #2c3e50 !important;
    display: block;
    font-size: 1.2em;
    list-style: none;
    padding: 2% 2% 2% 10%;
    text-align: left;
    width: 100%;
  }

  #menu.visible .menu-item a:hover,
  #menu.visible .menu-item a.active {
    background-color: #2c3e50;
    color: #fff !important;
  }
</style>
