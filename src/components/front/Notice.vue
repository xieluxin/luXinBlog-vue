<template>
  <div class="aside">
    <!--  最新通知  -->
    <div class="aside_item reply" style="display:block">
      <div class="aside_item_title">
        <div class="aside_item_title_left">
          <span class="iconfont icon-tongzhi"></span>
          <span class="aside_item_title_left_title">最新通知</span>
        </div>
        <div class="aside_item_title_right">
          <ol class="window">
            <li class="window_item window_item_red"></li>
            <li class="window_item window_item_yellow"></li>
            <li class="window_item window_item_green"></li>
          </ol>
        </div>
      </div>
      <div class="whitebg notice">
        <ul>
          <li v-for="(item,index) in articles.slice(0,5)" :key="index">
            <a href="/">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import articles from "../../data/article";
export default {
  name: "NoticeTest",
  data(){
    return{
      articles:articles
    }
  }
}

</script>

<style scoped>
@import '../../assets/css/common.css';
@import '../../assets/css/font-icon.css';

</style>
