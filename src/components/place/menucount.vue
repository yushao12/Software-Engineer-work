<template>
    <div class="dropdown">
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="white-box">
          <el-dropdown-item v-for="(item, index) in items" :key="index">
            <span>{{ item.name }}</span>
            <counter :value="item.count" @input="updateCount(item.id, $event)" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </template>
  
  <script>
  import Counter from "./count.vue";
  
  export default {
    components: {
      Counter
    },
    data() {
      return {
        items: [
          { id: 1, name: "成人", count: 0 },
          { id: 2, name: "小孩", count: 0 },
          { id: 3, name: "客房", count: 0 }
        ]
      };
    },
    methods: {
      updateCount(id, value) {
        this.items = this.items.map(item => {
          if (item.id === id) {
            return { ...item, count: value };
          }
          return item;
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .counter {
    display: flex;
    align-items: center;
  }
  .counter input {
    width: 60px;
    height: 36px;
    border: solid 1px #dcdfe6;
  }
  .counter button {
    width: 36px;
    height: 36px;
    border-radius: none;
    background-color: #f2f6fc;
  }
  .white-box {
    background-color: white;
    border: solid 1px #dcdfe6;
    box-shadow: 0px 2px 12px rgba(0,0,0,0.1);
  }
  </style>
