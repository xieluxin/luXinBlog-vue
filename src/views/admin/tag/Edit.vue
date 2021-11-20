<template>
  <div>
    <el-row :gutter="15">
      <el-form ref="defForm" :model="defForm" :rules="rules" size="medium" label-width="100px">
        <el-col :span="12">
          <el-form-item label="标签名称" prop="tagName">
            <el-input v-model="defForm.tagName"  placeholder="请输入标签名称" clearable :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="15">
          <el-form-item>
            <el-button @click="close">取消</el-button>
            <el-button type="primary" :loading="loading" @click="submitForm">保存</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import {update} from "../../../api/tag";


export default {
  name: "Edit",
  props:['data'],
  data(){
    return{
      defForm:{
        tag:'',
        tagName:''
      },
      loading:false,
      dialogFormVisible: false,
      rules:{
        tagName: [{required: true, message: '请输入账号', trigger: 'blur'}]
      }
    }
  },
  created() {
    // 指向两个 内存地址， 修复了 输入内容 自动保存
    this.defForm = JSON.parse(JSON.stringify(this.data))
  },
  methods:{
    submitForm(){
      this.$refs['defForm'].validate(valid=>{
        if (valid){
          this.loading = true;
          update(this.defForm).then(date=>{
            // 关闭动态 图标
            this.loading = false;
            // 将表单 置空
            this.$refs['defForm'].resetFields();
            // emit 触发当前实例上的事件
            this.$emit("after");
            this.$emit("hideDialog")
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

    }
  }
}
</script>

<style scoped>

</style>
