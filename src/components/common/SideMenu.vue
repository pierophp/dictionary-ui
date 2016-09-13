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
      <div class="content">
        <slot></slot>
        <ul>
          <li class="menu-item" v-for="item in items">
            <a v-link="{ path: item.url }" v-menu-active="{ path: item.url, regex: item.regex }">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
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

 #menu ul {
   padding: 0;
 }

 #menu .content {
   margin: 20px auto 0;
   width: 90%;
   display: none;
 }

 #menu.visible .content {
   display: block;
 }

 .menu-item {
   list-style: none;
 }

 .menu-item a {
   border-bottom: 1px solid #2c3e50 ;
   color: #2c3e50 ;
   display: block;
   font-size: 1.2em;
   list-style: none;
   padding: 2% 2% 2% 10%;
   text-align: left;
   width: 100%;
 }

 #menu.visible .menu-item a:hover,
 #menu.visible .menu-item a.active {
   background-color: #337ab7;
   color: #fff;
   text-decoration: none;
 }

 #menu + * {
   margin-left: 80px;
 }

 #menu.visible + * {
   margin-left: 330px;
 }
</style>
