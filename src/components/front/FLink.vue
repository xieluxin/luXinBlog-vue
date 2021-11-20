<template>
  <div class="aside">
    <!--  友情链接  -->
    <div class="aside_item hot" style="display:block">
      <div class="aside_item_title">
        <div class="aside_item_title_left">
          <!-- icon -->
          <span class="iconfont icon-youqinglianjie"></span>
          <span class="aside_item_title_left_title">
            友情链接
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
      <div class="links whitebg">
        <ul>
          <li v-for="(item,index) in friendLink" :key="index">
            <a :href="item.url" target="_blank">{{item.title}}</a></li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {getListLink} from "../../api/friendlink";
export default {
  name: "FriendLink",
  data(){
    return{
      friendLink: []
    }
  },
  created() {
    getListLink().then(data=>{
      this.friendLink=data.date
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
