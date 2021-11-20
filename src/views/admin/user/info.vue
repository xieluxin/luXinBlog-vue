<template >
  <el-form ref="defForm" :model="defForm" :rules="rules" style="margin-left: 180px;" label-width="80px">

    <el-form-item label="用户头像" style="margin-left: 18px;">
      <el-upload
        class="avatar-uploader"
        action="string"
        :show-file-list="false"
        style="border: 1px solid"
        :http-request="uploadImg"
        :before-upload="beforeAvatarUpload">
        <img v-if="defForm.avatar" :src="defForm.avatar" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>

    <el-form-item label="用户名" prop="userName">
      <el-input v-model="defForm.userName" :disabled="true"></el-input>
    </el-form-item>

    <el-form-item label="昵称" prop="nickName">
      <el-input v-model="defForm.nickName"></el-input>
    </el-form-item>

    <el-form-item label="个性签名" prop="introduce">
      <el-input v-model="defForm.introduce"></el-input>
    </el-form-item>

    <el-form-item label="邮箱" prop="email">
      <el-input v-model="defForm.email"></el-input>
    </el-form-item>

    <el-form-item size="large">
      <el-button type="primary" :loading="loading" @click="submitForm">保存</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
import token from "@/token";
import {update,upload,create} from "../../../api/user";


export default {
name: "info",
  data(){
    return{
      loading:false,
      defForm:{
        id:'',
        userName:'',
        nickName:'',
        avatar:'',
        introduce:'',
        email:'',
      },
      // 校验
      rules:{
        userName: [{required: true, message: '请输入账号', trigger: 'blur'}],
        nickName: [{required: true, message: '请输入昵称', trigger: 'blur'}],
        introduce: [{required: true, message: '请输入个性签名', trigger: 'blur'}],
        email: [ { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }],

      }
    }
  },
  created() {
    this.defForm = token.getUser()
  },
  methods:{
    submitForm(){
      this.$refs['defForm'].validate(valid=>{
        if(valid){
          // 打开按钮动画
          this.loading = true;
          update(this.defForm).then(data=>{
            this.loading = false;
            this.$message.success(data.msg);
            // 将 用户的信息 存储到 localStorage
            token.getUser(data.date);
            this.defForm = data.date
            this.defForm.introduce = data.date;
          }).catch(error=>{
            this.loading = false;
            this.$message.error({
              type: "error",
              message: error || '操作失败',
            });
          })
        }
        // 点击上传 自动刷新页面
        // window.location.reload();
      })
    },
    // 头像上传
    uploadImg(param){
      const formData = new FormData();
      formData.append("file",param.file);
      upload(formData).then(data=>{
        // console.log(data);
        // this.imageUrl = data.date;
        // 将头像提交到数据库
        this.defForm.avatar = data.date
       }).catch(error=>{
        this.$message.error({
          type: "error",
          message: error || '操作失败',
        });
      })
    },
    // 图片 大小检验
    beforeAvatarUpload(file){
      // 设置 图片格式
      const isIMAGE = (file.type === 'image/jpeg') || (file.type === 'image/jpg') || (file.type === 'image/png')
      // 设置 图片大小
      const isLt2M = file.size/ 1024 / 1024 <2;
      if (!isIMAGE){
        this.$message.error('上传文件只能是图片格式')
      }
      if (!isLt2M){
        this.$message.error('上传文件大小不能超过 2MB !')
      }
      return isIMAGE && isLt2M
    },
  }
}
</script>

<style scoped>
  .el-input {
    width: 70%;
  }
.avatar-uploader{
  width: 177px;
  height: 175px;
  border-radius: 95px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

</style>
