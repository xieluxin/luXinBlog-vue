<template>
  <!-- 侧边栏 -->
  <div class="aside">
    <!-- 博主信息 -->
    <div class="aside_item author">
      <div class="author_info">
        <img class="author_info_bg" src="@/assets/images/user-bg2.jpeg" alt="">
        <img class="author_info_tx" :src="avatar" alt="">
      </div>
      <div class="aside_name">{{nickName}}</div>
      <div class="Introduction">{{introduce}}</div>
      <div class="total_number" style="margin-bottom: 20px;">
        <div class="article_total">
          <p class="total">10</p>
          <p class="number">文章数</p>
        </div>
        <div class="comment_total">
          <p class="total">6</p>
          <p class="number">评论数</p>
        </div>
      </div>
      <ul class="recommend">
        <li class="recommend_item">
          <a href="/" class="recommend_item_href recommend_href">毕业设计-个人博客</a>
          <span class="iconfont icon-zhiding"></span>
        </li>
        <li class="recommend_item">
          <a href="/" class="recommend_item_href recommend_href">鼠标点击特效</a>
          <span class="iconfont  icon-zhiding"></span>
        </li>

        <li class="recommend_item_other">
<!--          <a href="/" class="recommend_item_href recommend_href">添加QQ</a>-->
          <a href="http://wpa.qq.com/msgrd?v=3&uin=2120780043&site=qq&menu=yes" title="添加QQ好友" target="_blank">
            <span  class="iconfont icon-QQ"></span>
          </a>

          <a href="https://github.com/xieluxin" title="Github" target="_blank">
            <span  class="iconfont icon-GitHub"></span>
          </a>

          <a href="https://jq.qq.com/?_wv=1027&k=ZzARuDwu" title="进入群聊" target="_blank">
            <span  class="iconfont icon-huabanfuben"></span>
          </a>

          <a class="click-weixin" title="我的微信" target="_blank">
            <span class="iconfont icon-weixin"></span>
            <i><img  src="src/assets/images/WeChat.jpg"></i>
          </a>

        </li>

      </ul>
    </div>
  </div>
</template>

<script>

import token from "../../token";

export default {
  name: "FMe",
  data(){
    return{
      avatar:token.getUser().avatar,
      nickName:token.getUser().nickName,
      introduce:token.getUser().introduce,
      email:token.getUser().email
    }
  },
}
</script>

<style scoped>
@import '../../assets/css/common.css';
@import '../../assets/css/font-icon.css';

</style>
