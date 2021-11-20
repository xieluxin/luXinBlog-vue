<template>
  <div>
    <el-row :gutter="15">
      <el-form ref="defForm" :model="defForm" :rules="rules" size="medium" label-width="100px">
        <el-col :span="12">
          <el-form-item label="标题" prop="title">
            <el-input v-model="defForm.title"  placeholder="请输入名称" clearable :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="栏目" prop="channel">
            <!--            placeholder="Select..."-->
            <treeselect v-model="defForm.channel" :multiple="false" :options="treeData"/>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="摘要" prop="summary">
            <el-input v-model="defForm.summary" placeholder="输入摘要内容" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>


        <el-col :span="12">
          <el-form-item label="外链" prop="url">
            <el-input v-model="defForm.url" placeholder="外链地址" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>


        <el-col :span="12">
          <el-form-item label="栏目图" prop="titleImg">
            <el-upload
              class="avatar-uploader"
              action="string"
              :show-file-list="false"
              :http-request="uploadImg"
              :before-upload="beforeAvatarUpload">
              <img v-if="defForm.titleImg" :src="defForm.titleImg" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="附件" prop="attachmentList">
            <el-upload
              class="upload-demo"
              action="string"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :http-request="uploadImg2"
              :on-exceed="handleExceed"
              :file-list="defForm.attachmentList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
        </el-col>


        <el-col :span="13">
          <el-form-item label="标签" prop="selectTagList">
            <el-checkbox-group v-model="defForm.selectTagList">
              <el-checkbox v-for="(item,index) in tagList" :key="index" :label="item.id">{{item.tagName}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>


        <el-col :span="6">
          <el-form-item label="作者" prop="author">
            <el-input v-model="defForm.author" placeholder="请输入作者名称" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>


        <el-col :span="24">
          <el-form-item label="正文" prop="content">
            <v-md-editor v-model="defForm.content" height="400px"></v-md-editor>
          </el-form-item>
        </el-col>

        <el-col :span="4">
          <el-form-item label="允许评论" prop="commentStatus">
            <el-switch
              v-model="defForm.commentStatus"
              active-color="#13ce66"
              inactive-color="#999999">
            </el-switch>
          </el-form-item>
        </el-col>

        <el-col :span="4">
          <el-form-item label="允许轮播" prop="rotation">
            <el-switch
              v-model="defForm.rotation"
              active-color="#13ce66"
              inactive-color="#999999">
            </el-switch>
          </el-form-item>
        </el-col>

        <el-col :span="4">
          <el-form-item label="是否置顶" prop="top">
            <el-switch
              v-model="defForm.top"
              active-color="#13ce66"
              inactive-color="#999999">
            </el-switch>
          </el-form-item>
        </el-col>


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
  import {Up,upload,detail,getArticleId} from '@/api/article'
  // 树形 插件
  // import the component
  import Treeselect from '@riophae/vue-treeselect'
  // import the styles
  import '@riophae/vue-treeselect/dist/vue-treeselect.css'
  import {tree} from "@/api/channel";
  import {all} from "@/api/tag";

  export default {
    name: "Edit",
    components: { Treeselect },
    data(){
      return{
        tagList:[],
        defForm:{
          id:'',
          title:'',
          channel:'',
          titleImg:'',
          summary:'',
          commentStatus:true,
          rotation:false,
          url:'',
          author:'',
          top:false,
          content:'',
          attachmentList: [],
          selectTagList:[]
        },
        // 树形
        treeData:[],
        loading:false,
        dialogFormVisible: false,
        rules: {
          title: [{required: true, message: '必填项不能为空', trigger: 'blur'}],
          channel: [{required: true, message: '必填项不能为空', trigger: 'blur'}]
        }
      }
    },
    created() {
      let id = this.$route.query.id;
      console.log(id)
      console.log(this.$route.query.id);
      getArticleId(id).then(data=>{
        console.log(data)
        this.defForm = data.date;
        if (!this.defForm.attachmentList){
          this.defForm.attachmentList = []
        }
        if (!this.defForm.selectTagList){
          this.defForm.selectTagList = []
        }
        if (!data.date.content){
          this.defForm.content = ''
        }

        if (this.defForm.commentStatus != 1){
          this.defForm.commentStatus = true
        }
        if (this.defForm.rotation != 0){
          this.defForm.rotation = false
        }
        if (this.defForm.top != 0){
          this.defForm.top = false
        }

      }).catch(error=>{
        this.$message.error({
          type:"error",
          message:error || '操作失败',
        })
      });

      tree().then(data=>{
        this.treeData = data.date;
        /*console.log("打印label")
        console.log(this.treeData)
        console.log("完成")*/
      }).catch(error=>{
        this.$message.error({
          type: "error",
          message: error || '操作失败',
        });
      });

      all().then(data=>{
        this.tagList = data.date;
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
            if (this.defForm.commentStatus){
              this.defForm.commentStatus = 0;   // 0 允许评论  1 不允许评论
            }else {
              this.defForm.commentStatus = 1;
            }

            if (this.defForm.rotation){
              this.defForm.rotation = 1;   // 0 不允许轮播  1 允许轮播
            }else {
              this.defForm.rotation = 0;
            }

            if (this.loading.top){
              this.defForm.top = 1;   // 0 不允许置顶  1 允许置顶
            }else {
              this.defForm.top = 0;
            }
            Up(this.defForm).then(data=>{
              // 关闭动态 图标
              this.loading = false;
              // 将表单 置空
              this.$refs['defForm'].resetFields();
              // emit 触发当前实例上的事件
              this.$emit("after");
              this.$emit("hideDialog");
              this.$message.success("操作成功");
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
      // 栏目图 图片上传
      uploadImg(param){
        const formData = new FormData();
        formData.append("file",param.file);
        upload(formData).then(data=>{
          // 将头像提交到数据库
          this.defForm.titleImg = data.date;
        }).catch(error=>{
          this.$message.error({
            type: "error",
            message: error || '操作失败',
          });
        })
      },
      // 附件图片上传
      uploadImg2(param){
        const formData = new FormData();
        formData.append("file",param.file);
        upload(formData).then(data=>{

          this.defForm.attachmentList.push({ name:param.file.name, url:data.date});
          console.log(data);
          console.log(data);
          console.log(data);
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
      // 文件上传
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        fileList.forEach((item,index)=>{
          if (file.name == item.name){
            this.defForm.attachmentList.splice(index,1);
          }
        })
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
