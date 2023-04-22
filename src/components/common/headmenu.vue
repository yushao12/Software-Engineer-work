<template>
  <el-container>
    <body id="header">
      <!--公共部分-->
      <el-header>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-link href="https://www.baidu.com" target="_blank" style="margin: 0;">住宿</el-link>
          </el-col>
          <el-button>选择货币</el-button>
          <el-button >选择语言</el-button>
          <el-button icon="el-icon-question" ></el-button>
          <el-button >关注</el-button>
          <el-button >登录</el-button>
          <el-button >注册</el-button>
        </el-row>
        <el-row :gutter="6">
          <el-col :span="6">
            <div class="show" style="line-height:2">
              <div >
                <a>寻找下一程住宿</a>
              </div>
              <div style="font-size:20px">寻找下一个地点</div>
            </div>
          </el-col>
        </el-row>
        <el-row class="descript" :gutter="6"></el-row>
      </el-header>
      <!--公共部分-->
    </body>
  </el-container>
  </template>
    <style>
  #show {
    margin: 0px;
    font-size: 100px;
  }
  #header {
    margin-top: 0px;
    margin-left: 0px;
    background-color: #0d057a;
    color: #f2f1f6e1;
    width: 100%;
    text-align: right;
    height: 200px;
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 900;
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
  </style>
<script>

</script>
