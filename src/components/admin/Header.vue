<template>
    <el-row>
      <el-col :span="20">
        <table class="logo">
          <tr>
            <td>
              <img src="../../assets/images/logo.png" alt="">
            </td>
            <td> </td>
          </tr>
        </table>
      </el-col>
      <el-col :span="4" align="right">
        <el-dropdown trigger="click" @command="handleCommand" style="margin-top: 20px;">
          <el-link class="user" :underline="false">
           <table>
             <tr>
               <td><img :src="avatar" class="person_image" ></td>
               <td valign="top">{{userName}}</td>
               <td valign="top"><el-icon class="el-icon-caret-bottom"></el-icon></td>
             </tr>
           </table>
          </el-link>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="index">网站首页</el-dropdown-item>
            <el-dropdown-item command="info">个人信息</el-dropdown-item>
            <el-dropdown-item command="password">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
</template>
<script>
import token from "../../token";

export default {
  name: "Header",
  data(){
    return{
      userName:token.getUser().userName,
      nickName:token.getUser().nickName,
      avatar:token.getUser().avatar,
    }
  },
  methods:{
    handleCommand(command){
      if (command == 'info'){
        this.$router.push("/info");
      }
      if (command == 'index'){
        this.$router.push("/index");
      }
      if (command == "password"){
        this.$router.push("/password");
      }
      if (command == "logout"){
        // 清除 token --> 返回登录页面
        this.$store.commit('logout');
        this.$router.push("/")
      }
    }
  }
}
</script>

<style scoped>
.logo{
  height: 60px;
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
}
.logo img{
  width: 70px;
  height: 40px;
}
.user{
  color: #ffffff !important;
  font-size: 14px;
}
.person_image{
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

</style>
