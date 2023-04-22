<template>
    <div class="counter">
      <input type="number" v-model="count" />
      <button @click="count++">+</button>
      <button @click="count--">-</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        count: 0
      };
    }
  };
  </script>
