<template>
  <div>
    <el-row :gutter="15">
      <el-form ref="defForm" :model="defForm" :rules="rules" size="medium" label-width="100px">
        <el-col :span="24">
          <el-form-item label="标题" prop="title">
            <el-input v-model="defForm.title"  placeholder="请输入标题" clearable :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item label="链接" prop="url">
            <el-input v-model="defForm.url" placeholder="输入链接" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>

        <!--        <el-col :span="24">-->
        <!--          <el-form-item label="图片" prop="path">-->
        <!--            <el-upload-->
        <!--              class="avatar-uploader"-->
        <!--              action="string"-->
        <!--              :show-file-list="false"-->
        <!--              :http-request="uploadImg"-->
        <!--              :before-upload="beforeAvatarUpload">-->
        <!--              <img v-if="defForm.path" :src="defForm.path" class="avatar">-->
        <!--              <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
        <!--            </el-upload>-->
        <!--          </el-form-item>-->
        <!--        </el-col>-->

        <el-col :span="24">
          <el-form-item>
            <el-button @click="$router.back()">返回</el-button>
            <el-button type="primary" :loading="loading" @click="submitForm">保存</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>
  import {update,upload,detail} from '@/api/friendlink'

  export default {
    name: "Add",
    data(){
      return{
        defForm:{
          title:'',
          parentId:null,
          // path:''
        },
        loading:false,
        dialogFormVisible: false,
        rules: {
          title: [{required: true, message: '必填项不能为空', trigger: 'blur'}],
          url: [{required: true, message: '必填项不能为空', trigger: 'blur'}],
        }
      }
    },
    created() {
      let id = this.$route.query.id;
      detail(id).then(data=>{
        this.defForm = data.date;
      }).catch(error=>{
        this.$message.error({
          type: "error",
          message: error || '操作失败',
        });
      })
    },
    methods:{
      submitForm(form){
        this.$refs['defForm'].validate(valid=>{
          if (valid){
            this.loading = true;
            update(this.defForm).then(data=>{
              // 关闭动态 图标
              this.loading = false;
              // 将表单 置空
              this.$refs['defForm'].resetFields();
              this.$message.success("操作成功");
              this.$router.push("friend");
              console.log(data)
            }).catch(error=>{
              // 关闭动态 图标
              this.loading = false;
              this.$message.error({
                type: "error",
                message: error || '操作失败',
              });
            })
          }
        })
      },
      // 关闭 页面
      close(){
        this.$emit("hideDialog")
      },
      // 头像上传
      uploadImg(param){
        const formData = new FormData();
        formData.append("file",param.file);
        upload(formData).then(data=>{
          // console.log(data);
          // this.imageUrl = data.date;
          // 将头像提交到数据库
          // this.defForm.path = data.date
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
        const isIMAGE = (file.type === 'image/jpeg') || (file.type === 'image/jpg') || (file.type === 'image/png');
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
  .avatar-uploader{
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    width: 80px;
    height: 80px;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader:hover{
    border-color: #409EFF;
  }
  .avatar-uploader-icon{
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  .avatar{
    width: 80px;
    height: 80px;
    border-radius: 6px;
    display: block;
  }

</style>
