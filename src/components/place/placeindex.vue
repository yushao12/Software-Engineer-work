<template>
    <el-container>
      <el-aside style="margin-top:20px">
        <!-- <switch></switch> -->
        <sidemenu style="overflow:auto"></sidemenu>
      </el-aside>
      <el-main>
        <hotels class="hotels-area"></hotels>
      </el-main>
    </el-container>
  </template>
  
  <script>
    import sidemenu from './sidemenu'
    import hotels from './hotels.vue'
    export default {
      name: 'indexplace',
      components: {sidemenu,hotels}
    }
  </script>
  
  <style scoped>
    .sidemenu{
      width:500px;
      margin-left: auto;
      margin-right: auto;
    }
  .hotels-area {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }
  .el-aside{
    margin-left:auto;
    overflow: auto;
    width:400px;
  }
</style>
  