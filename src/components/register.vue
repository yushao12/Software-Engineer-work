<template>
    <div class="register">
      <el-card class="register-card">
        <div slot="header" class="clearfix">
            <el-button type="text" prefix-icon="el-icon-s-home">注册</el-button>
            </div>
        <el-form label-position="left" :model="user">
          <el-form-item label="邮箱">
            <el-input
              v-model="user.username"
              placeholder="请输入邮箱"
              prefix-icon="el-icon-user"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              placeholder="请输入密码"
              v-model="user.password"
              prefix-icon="el-icon-lock"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input
              placeholder="请输入确认密码"
              v-model="user.repassword"
              prefix-icon="el-icon-lock"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item style="width: 100%">
            <el-button type="primary" style="width:100%;background: #505458;border: none" v-on:click="register">注册</el-button>
          </el-form-item>
        </el-form>
        <!-- {{ user }} -->
      </el-card>
      </div>
    </template>
     
    <script>
    export default {
     
      data() {
        return {
          user: {
            username: '',
            password: '',
            repassword:'',
            },
      }
      },
      methods: {
        register () {
          if(this.user.password==this.user.repassword){
          this.$axios
            .post('/register', {
              username: this.user.username,
              password: this.user.password
            })
            .then(successResponse => {
              if (successResponse.data.code === 400) {
                this.$router.replace({path: '/login'})
                this.$message("注册成功,开始登录吧！")
              }
              else{
                alert("此邮箱已存在！")
              }
            })
            .catch(failResponse => {
              alert("连接失败！");
            })
        }
        else
        {
          alert("两次密码输入不一致！");
        }
      }
    }
    }
    </script>
     
    <style>
    .register{
        background:url("../assets/3.png") no-repeat;
        background-position: center;
        height: 100%;
        width: 100%;
        background-size: cover;
        position: fixed;
        
      /* flex样式呈现*/
      display: flex;
      /*垂直排列*/
      flex-direction: column;
      align-items: center; /*由于flex-direction: column,因此align-items代表的是水平方向*/
      justify-content: center; /*由于flex-direction: column,因此justify-content代表的是垂直方向*/
    }
    body{
      margin: 0px;
    }
    .register-card {
      outline: none;
      position: relative;
      border-radius: 15px;
      background-clip: padding-box;
      width: 350px;
      padding: 35px 35px 15px 35px;
      background: #fff;
      border: 1px solid #eaeaea;
      box-shadow: 0 0 25px #cac6c6;
      overflow: hidden;
      animation:turn 1s linear;
    }
    .clearfix{
            margin: 0px auto 10px auto;
      text-align: center;
      color: #505458;
    }
    </style>