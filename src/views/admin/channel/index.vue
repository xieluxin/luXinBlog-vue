<template>
  <div>
    <div>
      <el-form :inline="true" ref="queryForm" :model="queryForm" label-width="80px">
        <el-form-item>
          <el-input v-model="queryForm.name" placeholder="按照名称查询"></el-input>
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
          prop="name"
          label="栏目名称"
          width="180">
      </el-table-column>

      <el-table-column
          prop="single"
          label="是否单页">
      </el-table-column>

       <el-table-column
         prop="pos"
         label="位置">
       </el-table-column>

       <el-table-column
         prop="summary"
         class="hidden_tab"
         label="摘要">
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
import {del, query} from "@/api/channel";

export default {
  name: "index",
  components:{

  },
  data() {
    return {
      queryForm:{
       name:''
      },
      pos:[],
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
      this.$router.push('/channel_add')
    },
    // 编辑 用户
    edit(row){
      this.$router.push({
        path:'/channel_edit',
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

/* 限制文本行数  仅限一行 */
.cell{overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;
}

</style>
