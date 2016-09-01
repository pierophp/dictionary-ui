<template>
  <li class="active">
    <a tabindex="-1" href data-toggle="dropdown">{{title}}</a>
    <ul class="dropdown-menu">
      <li>
        <a v-for="link in links"  tabindex="-1" href="{{link.url}}" >
            {{link.title}}
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    props: ['title', 'links'],
    components: {

    },
  }
</script>
