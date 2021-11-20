<template>
  <div class="aside">
    <!--  热门文章  -->
    <div class="aside_item hot" style="display:block">
      <div class="aside_item_title">
        <div class="aside_item_title_left">
          <!-- icon -->
          <span class="iconfont icon-huore"></span>
          <span class="aside_item_title_left_title">热门文章</span>
        </div>
        <div class="aside_item_title_right">
          <ol class="window">
            <li class="window_item window_item_red"></li>
            <li class="window_item window_item_yellow"></li>
            <li class="window_item window_item_green"></li>
          </ol>
        </div>
      </div>
      <div class="hot_article_wrap">
        <div class="hot_article_item " v-for="(item,index) in articles.slice(0,3) " :key="index" >
          <router-link :to=' "/detail/"+item.id '>
            <div class="hot_article_item_bg">
              <img :src="item.titleImg" alt="栏目图">
            </div>

            <div class="hot_article_item_content">
              <div class="hot_article_item_content_title">
                {{item.title}}
              </div>
              <div class="hot_article_item_info">
                <span>{{item.createDate}}&nbsp;</span>
                <span style="margin-left: 20px">120浏览</span>
              </div>
            </div>

          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {getTop, queryByPos} from "../../api/front";
export default {
  name: "HotArticle",
  props: ['articles'],
  data: {
    list: [1, 2, 3]
  },
}
</script>

<style scoped>
@import '../../assets/css/common.css';
@import '../../assets/css/font-icon.css';

</style>
