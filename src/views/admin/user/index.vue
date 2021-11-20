<template>
  <div>
    <div>
      <el-form :inline="true" ref="queryForm" :model="queryForm" label-width="80px">
        <el-form-item>
          <el-input v-model="queryForm.userName" placeholder="按用户名查询"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="queryForm.nickName" placeholder="按昵称查询"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-search" @click="search" type="danger">查询</el-button>
          <el-button icon="el-icon-plus" @click="add" type="primary" >新增</el-button>
        </el-form-item>
      </el-form>
    </div>

     <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="id"
          label="ID"
          width="180">
      </el-table-column>

      <el-table-column
          prop="userName"
          label="用户名"
          width="180">
      </el-table-column>

      <el-table-column
          prop="nickName"
          label="昵称">
      </el-table-column>

       <el-table-column
         prop="introduce"
         label="个性签名">
       </el-table-column>

       <el-table-column
         prop="email"
         label="邮箱">
       </el-table-column>

       <el-table-column
          prop="createDate"
          label="创建时间">
      </el-table-column>

       <el-table-column
         prop="status"
         label="状态">
       </el-table-column>

       <el-table-column
           align="center"
           width="150px"
           label="操作">
         <template slot-scope="scope">
           <el-link @click="edit(scope.row)" :underline="false" type="primary" class="el-icon-edit-outline">编辑</el-link>
           <el-link @click="del(scope.row)" :underline="false" type="danger" class="el-icon-delete">删除</el-link>
         </template>
       </el-table-column>
    </el-table>
  <!-- 分页 -->
    <el-pagination
        background
        layout="total,prev, pager, next,jumper"
        @current-change="handleCurrentChange"
        :current-page="pageNo"
        :total="total">
    </el-pagination>

    <!--  :visible.sync 支持同时显示 对话框  -->
    <el-dialog :visible.sync="addVisible" v-if="addVisible" :close-on-click-modal="false">
      <Add @after="search" @hideDialog="hidden"></Add>
    </el-dialog>

    <!-- 要是只是 :visible.sync="editVisible" 这个就是显示隐藏，保存上一次数据 -->
    <!-- 记得加上  v-if="editVisible" 实事共享数据 -->
    <!-- :close-on-click-modal="false" 进入状态框 页面时 只有取消和 x 才能关闭 -->
    <el-dialog :visible.sync="editVisible" v-if="editVisible"  :close-on-click-modal="false">
      <edit @after="search" :data="formData" @hideDialog="hidden"></edit>
    </el-dialog>

   </div>
</template>

<script>
import {del, query} from "../../../api/user";

import Add from "./Add";
import Edit from "./Edit";

export default {
  name: "index",
  components:{
    Add,Edit
  },
  data() {
    return {
      queryForm:{
        userName:'',
        nickName:'',
        introduce:''
      },
      tableData: [],
      formData:{},
      total:0,
      pageNo:1,
      // 不显示 对话框
      addVisible:false,
      editVisible:false
    }
  },
  mounted() {
     this.list({"page":this.pageNo})
    // this.list()
  },
  methods:{

    // 查询
    search(){
      let param = this.queryForm;
      this.pageNo=1;
      param.page = this.pageNo;
      this.list(param)
    },
    // 删除
    del(row){
      this.$confirm('确定要删除么?','提示').then(()=>{
        del(row.id).then(data=>{
          console.log(data);
          let param = this.queryForm;
          param.age = this.pageNo;
          this.list(param)
          this.$message.success("操作成功");
        }).catch(error=>{
          console.log(error);
          this.$message.error({
            type: "error",
            message: error || '操作失败',
          });
        })
      }).catch(error=>{
        this.$message.error({
          type: "error",
          message: error || '操作失败',
        });
      })
    },
    // 添加用户
    add(){
      this.addVisible = true;
    },
    // 编辑 用户
    edit(row){
      this.editVisible = true;
      this.formData = row
    },
    // 提交之后 关闭弹出框
    hidden(){
      this.addVisible = false;
      this.editVisible = false
    },
    handleCurrentChange(val){
      let param = this.queryForm;
      this.pageNo = val;
      param.page = this.pageNo;
      this.list(param)
    },
    // 列表
    list(param){
      query(param).then(data=>{
        this.tableData = data.list;
        this.total = data.total
      }).catch(error=>{
         this.$message.error({
          type: "error",
          message: error || '操作失败',
        });
      })
    }
  }
}
</script>

<style scoped>

</style>
