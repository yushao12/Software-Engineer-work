<template>
    <div>
      <HeadMenu></HeadMenu>
      <router-view/>
    </div>
  </template>
  
  <script>
    import HeadMenu from './common/headmenu.vue'
    export default {
      name: 'Home',
      components: {HeadMenu}
    }
  </script>
  
  <style scoped>

  </style>
  
  