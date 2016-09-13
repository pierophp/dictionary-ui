<template>
  <li
    v-for="item in model"
    class="menu-item"
    :class="{'has-submenu': isSubmenu(item)}">

    <a
      v-link="{ path: item.url }"
      v-menu-active="{ path: item.url, regex: item.regex }"
      v-if="!isSubmenu(item)">

      {{ item.title }}
    </a>

    <div
      v-else
      @click="toggle(item)">

      {{ item.title }}

      <span class="show-submenu">
        <i class="glyphicon" :class="{'glyphicon-menu-up' : isOpened(item), 'glyphicon-menu-down' : !isOpened(item)}"></i>
      </span>
    </div>

    <ul
      v-show="isOpened(item)"
      v-if="isSubmenu(item)"
      transition="expand"
      >
      <item :model="item.children"></item>
    </ul>
  </li>
</template>

<script>
  import MenuActive from '../../directives/MenuActive'
  export default {
    name: 'Item',
    props: {
      model: Array
    },
    data() {
      return {
        openedItems: []
      }
    },
    directives: {
      menuActive: MenuActive
    },
    methods: {
      isOpened: function(item) {
        return this.openedItems.indexOf(item) !== -1
      },
      _openOrClose: function(item) {
        if (this.isOpened(item)) {
          this.openedItems.splice(this.openedItems.indexOf(item), 1)

          return true
        }

        this.openedItems = []
        this.openedItems.push(item)
      },
      isSubmenu: function(item) {

        return item.children && item.children.length
      },
      toggle: function(item) {
        if (!this.isSubmenu(item)) {
          return false
        }

        this._openOrClose(item)
      }
    }
  }
</script>

<style>
  /* always present */

  .expand-transition {
    transition: all .3s ease;
    height: 68px;
    padding: 10px;
    background-color: #eee;
    overflow: hidden;
  }
  /* .expand-enter defines the starting state for entering */
  /* .expand-leave defines the ending state for leaving */

  .expand-enter,
  .expand-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
  }
</style>
