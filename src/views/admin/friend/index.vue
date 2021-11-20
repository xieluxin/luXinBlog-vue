<template>
  <div>
    <div>
      <el-form :inline="true" ref="queryForm" :model="queryForm" label-width="80px">
        <el-form-item>
          <el-input v-model="queryForm.title" placeholder="按标题查询"></el-input>
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
          prop="title"
          label="标题"
          width="180">
      </el-table-column>

      <el-table-column
          prop="url"
          label="链接">
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

    <el-dialog :visible.sync="addVisible" v-if="addVisible" :close-on-click-modal="false">
      <Add @after="search" @hideDialog="hidden"></Add>
    </el-dialog>

    <el-dialog :visible.sync="editVisible" v-if="editVisible"  :close-on-click-modal="false">
      <edit @after="search" :data="formData" @hideDialog="hidden"></edit>
    </el-dialog>
   </div>
</template>

<script>
import {del,query} from "@/api/friendlink";

export default {
  name: "index",
  data() {
    return {
      queryForm:{
      title:'',
      },
      tableData: [],
      formDate:{},
      total:0,
      pageNo:1,
      addVisible:false,
      editVisible:false,
    }
  },
  mounted() {
     this.list({"page":this.pageNo})
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
      this.$router.push('/friend_add')
    },
    // 编辑 用户
    edit(row){
      this.$router.push({
        path:'/friend_edit',
        query:{
          id:row.id
        }
      })
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
