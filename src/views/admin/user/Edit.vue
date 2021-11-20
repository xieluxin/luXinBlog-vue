<template>
  <div>
    <el-row :gutter="15">
      <el-form ref="defForm" :model="defForm" :rules="rules" size="medium" label-width="100px">
        <el-col :span="12">
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="defForm.userName"  placeholder="用户名" clearable :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="昵称" prop="nickName">
            <el-input v-model="defForm.nickName" placeholder="请输入用户名" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="defForm.email" placeholder="请输入邮箱" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="状态" prop="status">
            <el-select v-model="defForm.status" placeholder="请选择状态" clearable :style="{width: '100%'}">
              <el-option v-for="item in this.utils.status"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value"
              ></el-option>
            </el-select>
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
import {update} from "../../../api/user";


export default {
  name: "Edit",
  props:['data'],
  data(){
    return{
      defForm:{
        id:'',
        userName:'',
        password:'',
        nickName:'',
        email:'',
        status:'T'
      },
      loading:false,
      dialogFormVisible: false,
      rules:{
        userName: [{required: true, message: '请输入账号', trigger: 'blur'}],
        nickName: [{required: true, message: '请输入用户名', trigger: 'blur'}],
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
