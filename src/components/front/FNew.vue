<template>

  <div class="whitebg bloglist" style="padding: 20px">
    <h2 class="htitle">最新博文</h2>
    <ul>
      <!--单图-->
      <li v-for="(item,index) in articles" :key="index">

        <h3 style="margin-bottom: 10px" class="blogtitle">
          <router-link :to=' "/detail/"+item.id ' target="_blank">{{item.title}}</router-link>
        </h3>
        <span class="blogpic imgscale" style="margin-right: 10px">
          <i>
            <router-link :to=' "/detail/"+item.id ' target="_blank" >{{item.channel}}</router-link>
          </i>
          <router-link :to=' "/detail/"+item.id ' target="_blank" title="">
            <img style="width: 200px;height: 129px" :src="item.titleImg" alt=""></router-link>
        </span>
        <p class="blogtext">{{item.summary}}</p>
        <p class="bloginfo" style="margin-top: 20px" >
          <i class="avatar_new">
            <img class="luXin_info" :src="avatar">
          </i>
          <span class="luXin_info" style="color: #409eff">{{item.author}}</span>
          <span class="luXin_info" >{{item.createDate}}</span>
          <span class="iconfont icon-liulan1">浏览量</span>
        </p>
        <router-link :to=' "/detail/"+item.id ' target="_blank" class="viewmore">阅读更多</router-link>
      </li>
    </ul>

<!--    &lt;!&ndash; 分页 &ndash;&gt;-->
<!--    <el-pagination-->
<!--      background-->
<!--      layout="total,prev, pager, next,jumper"-->
<!--      @current-change="handleCurrentChange"-->
<!--      :current-page="pageNo"-->
<!--      :total="total">-->
<!--    </el-pagination>-->

  </div>
</template>
<script>
import token from "../../token";

export default {
  name: "FNew",
  props:['articles'],
  data(){
    return{
      avatar: token.getUser().avatar,
      total:0,
      pageNo:1,
    }
  },
  create(){

  },
  methods:{
    handleCurrentChange(val){
      let param = this.articles;
      this.pageNo = val;
      param.page = this.pageNo;
      this.list(param)
    },
  }
}
</script>

<style scoped>
@import '../../assets/css/common.css';
@import '../../assets/css/font-icon.css';
.luXin_info{
  vertical-align:middle;
}

</style>
