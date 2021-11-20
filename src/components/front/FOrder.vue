<template>
  <div class="aside">
    <!--  最新通知  -->
    <div class="aside_item reply" style="display:block">
      <div class="aside_item_title">
        <div class="aside_item_title_left">
          <!-- icon -->
          <span class="iconfont icon-paihang"></span>
          <span class="aside_item_title_left_title" >
            点击排行
          </span>
        </div>
        <div class="aside_item_title_right">
          <ol class="window">
            <li class="window_item window_item_red"></li>
            <li class="window_item window_item_yellow"></li>
            <li class="window_item window_item_green"></li>
          </ol>
        </div>
      </div>

      <div class="whitebg paihang">

        <ul style="padding: 18px 10px 0 10px;">
          <li v-for="(item,index) in articles.slice(0,7)" :key="index">
            <i></i>
            <router-link :to=' "/detail/"+item.id ' target="_blank" >{{item.title}}</router-link></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import articles from "../../data/article";
  import {getTop, queryByPos} from "../../api/front";
  export default {
    name: "FOrder",
    data(){
      return{
        articles:[],
        channels:{},
      }
    },
    mounted() {
      queryByPos('e').then(data=>{
        let arr = data.date;
        this.channels = arr[0];
        getTop(this.channels.id,7).then(data=>{
          this.articles = data.list;
        });
      }).catch(error=>{
        this.$message.error({
          type: "error",
          message: error || '操作失败',
        });
      })
    }
  }

</script>

<style scoped>
@import '../../assets/css/common.css';
@import '../../assets/css/font-icon.css';

</style>
