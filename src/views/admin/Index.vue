<template>
  <el-container class="container">
    <el-header class="header">
      <Header/>
    </el-header>
    <el-container>
      <left/>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>系统管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 视图显示区域 -->
        <el-card style="padding: 10px">
          <router-view/>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Header from "../../components/admin/Header";
  import Left from "../../components/admin/Left";

  export default {
    name: "index",
    components: {Left, Header},
  }
</script>

<style scoped>
.container{
  background-color: #f2f2f2;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;

}
.header{
  background-color: #778ca3;
  width: 100%;
}
.el-main{
  position: absolute;
  left: 220px;
  top: 60px;
  bottom: 0;
  right: 10px;
}
.el-breadcrumb{
  height: 45px;
  line-height:40px;
  margin-left: 2px;
  padding: 0;
 }

</style>
