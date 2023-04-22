<template>
  <el-container>
    <div class="places">
      <el-row class="myrow" style="display:flex">
        <el-input class="myinput" v-model="input" placeholder="请输入内容">
        </el-input>
      <el-date-picker class="mydate"
        v-model="value1"
        type="daterange"
        range-separator="——"
        start-placeholder="入住日期"
        end-placeholder="退房日期">
      </el-date-picker>
      <el-input class="myinputs" v-model="input" placeholder="请输入内容">
        </el-input>
      <el-button class="mybutton" @click="getinf">
        搜特价
      </el-button>
    </el-row>
      </div>
    </el-container>
  </template>
  <style scoped>

    .mybutton{
      margin-right: 150px;
      border: 1px solid;
      box-shadow: 0 0 25px #fffefe;
      border-color: rgb(241, 180, 38);
      border-width: 3px;
      width:100px;
      height: 45px;
      background-color:dodgerblue;
    }
    .myinput{
      margin-left: 150px;
      margin-top: 10px;
      text-align: center;
      background-color:rgb(255, 255, 255);
      width: 350px;
      border: 1px solid;
      box-shadow: 0 0 25px #fffefe;
      overflow: hidden;
      border-color: rgb(241, 180, 38);
      border-width: 3px;
    }
    .myinputs{
      margin-top: 10px;
      text-align: center;
      background-color:rgb(255, 255, 255);
      width: 350px;
      border: 1px solid;
      box-shadow: 0 0 25px #fffefe;
      overflow: hidden;
      border-color: rgb(241, 180, 38);
      border-width: 3px;
    }
    .mydate{
      width:350px;
      margin-top: 10px;
      border: 1px solid white;
      border-radius: 0px;
      box-shadow: 0 0 25px #fffefe;
      height: 45px;
      text-align: center;
      border-color: rgb(241, 180, 38);
      border-width: 3px;
    }
</style>
  <script>
    export default {
      data() {
        return {   
          value1: '',
          input:'',
        };
      },
     methods:
     {
      getinf(){
        this.$router.push({
        name: "placeindex",           
         params: {   
            
        },  
      });
      }
     }
    }

  </script>
