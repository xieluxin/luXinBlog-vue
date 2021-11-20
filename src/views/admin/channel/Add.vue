<template>
  <div>
     <el-row :gutter="15">
      <el-form ref="defForm" :model="defForm" :rules="rules" size="medium" label-width="100px">
        <el-col :span="12">
          <el-form-item label="栏目" prop="name">
            <el-input v-model="defForm.name"  placeholder="请输入名称" clearable :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="父栏目" prop="parentId">
<!--            placeholder="Select..."-->
            <treeselect v-model="defForm.parentId"  :multiple="false" :options="treeData"/>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="栏目图" prop="channelImg">
            <el-upload
              class="avatar-uploader"
              action="string"
              :show-file-list="false"
              :http-request="uploadImg"
              :before-upload="beforeAvatarUpload">
              <img v-if="defForm.channelImg" :src="defForm.channelImg" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="摘要" prop="summary">
            <el-input v-model="defForm.summary" placeholder="输入摘要内容" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="位置" prop="pos">
            <el-select v-model="defForm.pos" placeholder="请选择位置" clearable :style="{width: '100%'}">
              <el-option v-for="item in this.posList"
                         :key="item"
                         :label="item"
                         :value="item"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="是否单页" prop="single">
            <el-switch
              v-model="defForm.single"
              active-color="#13ce66"
              inactive-color="#999999">
            </el-switch>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="外链" prop="url">
            <el-input v-model="defForm.url" placeholder="请输入链接" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="SEO标题" prop="seoTitle">
            <el-input v-model="defForm.seoTitle" placeholder="请输入SEO标题" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="SEO关键字" prop="seoKeyword">
            <el-input v-model="defForm.seoKeyword" placeholder="请输入SEO关键字" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="SEO描述" prop="seoDescription">
            <el-input v-model="defForm.seoDescription" placeholder="请输入SEO描述" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item prop="content">
            <v-md-editor v-model="defForm.content" height="400px"></v-md-editor>
          </el-form-item>
        </el-col>

        <el-col :span="12">
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
import {create,tree} from '../../../api/channel'
// 树形 插件
// import the component
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import {upload} from "../../../api/channel";

export default {
  name: "Add",
  components: { Treeselect },
  data(){
    return{
      defForm:{
        name:'',
        parentId:null,
        channelImg:'',
        summary:'',
        single:false,
        url:'',
        pos:'A',
        seoTitle:'',
        seoKeyword:'',
        seoDescription:'',
        content:'',
      },
      posList:['A','B','C','D','E','F','G'],
      // posList:['导航栏','Tab导航','最新通知'],
      // 树形
      treeData:[],
      loading:false,
      dialogFormVisible: false,
      rules: {
        name: [{required: true, message: '请输入账号', trigger: 'blur'}]
      }
    }
  },
  created() {
    tree().then(data=>{
      this.treeData = data.date;
      // console.log(this.treeData);
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
          if (this.defForm.single){
            this.defForm.single = 'Y';
          }else {
            this.defForm.single = 'N';
          }
          create(this.defForm).then(data=>{
            // 关闭动态 图标
            this.loading = false;
            // 将表单 置空
            this.$refs['defForm'].resetFields();
            this.$message.success("操作成功");
            this.$router.push('/channel')
            // console.log(data)
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
        this.defForm.channelImg = data.date
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
