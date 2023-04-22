<template>
  <el-container style="display:inline-block">
    <!--公共部分-->
    <header></header>
    <!--面包屑-->
    <el-breadcrumb class=bread separator="> ">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">地点1</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>地点2</el-breadcrumb-item>
      <el-breadcrumb-item>地点3</el-breadcrumb-item>
    </el-breadcrumb>
    <!--面包屑-->
      <el-aside id="side">
        <el-header id="head1" height="50px">
          <div
            style="font-size: 23px;font-weight:500;position:absolute; bottom:0; left:0;"
          >境内外特价搜不停</div>
        </el-header>
        <el-container id="container2">
          <div id="text1">目的地/住宿名称：</div>
          <el-input id="input1" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
          <div id="text2">入住日期：</div>
          <el-date-picker id="date1" placeholder="选择日期"></el-date-picker>
          <div id="text3">退房日期：</div>
          <el-date-picker id="date2" placeholder="选择日期"></el-date-picker>
          <div id="text4">入住一晚：</div>
          <Dropdown id="dropdown"></Dropdown>
          <el-radio label="我正在寻找度假短租"></el-radio>
          <el-radio label="我要出差"></el-radio>
          <el-button id="botton1">搜特价</el-button>

        </el-container>
      </el-aside>
      <el-main></el-main>
  </el-container>
</template>
<style>

#botton1{
  background-color: #0071c2;
  margin:auto;
  width:240px;
}
#header {
  margin-top: 0px;
  margin-left: 0px;
  background-color: #003580;
  color: #f2f1f6e1;
  width: 100%;
  text-align: right;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
}
#head1 {
  margin: 10px;
  background-color: #febb02;
  position: relative;
}
#side {
  margin-block: 10px;
  background-color: #ffc489;
  margin-left: 30px;
  height: 400px;
}
#container2 {
  display:flex;
  flex-direction: column;
  align-items: start;
  position: relative;
}
#text1 {
  position: relative;
  font-size: small;
  text-align: left;
  padding-left: 15px;
}
#text2 {
  position: relative;
  font-size: small;
  text-align: left;
  padding-left: 15px;
  padding-top: 10px;
  padding-bottom: 0px;
}
#text3 {
  font-size: small;
  text-align: left;
  padding-left: 15px;
  padding-top: 10px;
  padding-bottom: 0;
}
#text4 {
  font-size: small;
  text-align: left;
  padding-left: 15px;
  padding-top: 10px;
  padding-bottom: 0;
}
#input1 {
  width: 280px;
  align-self: center;
}
#date1 {
  width: 280px;
  margin-left: 10px;
  align-self: center;
}
#date2 {
  width: 280px;
  margin-left: 10px;
  align-self: center;
}
#dropdown{
  width: 280px;
  align-self: center;
}
.el-button {
  position: relative;
  top: 10px;
  bottom: 10px;
  color: #f9f3f3;
  background: rgba(255, 255, 255, 0);
  border: none;
}
.el-button:hover {
  background-color: #126c9e !important;
  color: white !important;
  font-weight: bold;
  border-color: #01a8f9 !important;
}
.el-button:focus {
  background-color: #126c9e !important;
  color: white !important;
  font-weight: bold;
  border-color: #01a8f9 !important;
}
.el-row {
  width: 100%;
}
body {
  margin: 0;
}
.el-aside{
  width:400px;
  position:fixed;
  margin-right:0px;
}
.bread{
  width:300px;
  margin-left: auto;
}
</style>
<script>
import Dropdown from "./menucount.vue"; // 引用这一行

export default {
  components: {
    Dropdown // 注册这一行
  },
  // 其他代码
};
</script>