<template>
  <div>
    <div>
      <el-form :inline="true" ref="queryForm" :model="queryForm" label-width="80px">
        <el-form-item>
          <el-input v-model="queryForm.title" placeholder="按照标题查询"></el-input>
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
          label="标题">
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

   </div>
</template>

<script>
import {del, query} from "@/api/article";

export default {
  name: "index",
  components:{

  },
  data() {
    return {
      queryForm:{
        title:''
      },
      tableData: [],
      total:0,
      pageNo:1,
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
          // this.message.success(data.msg)
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
      this.$router.push('/article_add')
    },
    // 编辑 用户
    edit(row){
      this.$router.push({
        path:'/article_edit',
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
