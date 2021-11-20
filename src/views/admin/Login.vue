<template>
  <div class="login-page">
    <div class="login-page-bg">
      <el-form ref="form" :model="form" :rules="rules" class="loginContainer">
        <h3 class="loginTitle">欢迎登录</h3>

        <el-form-item prop="userName">
          <el-input type="text" v-model="form.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input type="password" auto-complete="false" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>

<!--        <p @click="Register"  class="register_luXin">还未注册?点击注册</p>-->

        <el-button type="primary" style="width: 100%" :loading="loading" @click="submitLogin">登录</el-button>

      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data(){
      return{
        captchaUrl:'',
        form:{
          userName: 'luxin',
          password: '985211',
        },
        loading:false,
        checked:true,
        rules:{
          userName:[{ required: true, message:'请输入用户名', trigger:'blur'}],
          password:[{ required: true, message: '请输入密码', trigger: 'blur' }],
        }
      }
    },
    methods:{
      submitLogin(){
        this.$refs['form'].validate(valid=>{
          if (valid){
            // 打开 图标
            this.loading = true;
            // 执行 登录操作
            this.$store.dispatch('login',this.form).then(()=>{
              console.log("登陆成功");
              // 延迟 跳转
              setTimeout(()=>{
                this.$router.push("/user")
              },300);
              this.$message.success("登录成功")
            }).catch(error=>{
              // 关闭图标
              this.loading = false;
              this.$message.error(error.message);
              console.log(error)
            })
          }
        })
      },
      // 注册
      // Register(){
      //   this.$router.push({path:'/register'})
      // }
    }
  }
</script>

<style>
  .login-page{
    height: 100%;
    background-image: url("../../assets/images/login_bg.png");
    background-size: 100% 100%;
    position: fixed;
    width: 100%
  }
  .loginContainer{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 244px auto;
    width: 350px;
    padding: 20px 35px 20px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .loginTitle{
    text-align: center;
  }


</style>
