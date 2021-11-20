<template>
  <div class="aside">
    <!--  标签云  -->
    <div class="aside_item hot" style="display:block">
      <div class="aside_item_title">
        <div class="aside_item_title_left">
          <!-- icon -->
          <span class="iconfont icon-biaoqian_huaban1"></span>
          <span class="aside_item_title_left_title">标签云</span>
        </div>
        <div class="aside_item_title_right">
          <ol class="window">
            <li class="window_item window_item_red"></li>
            <li class="window_item window_item_yellow"></li>
            <li class="window_item window_item_green"></li>
          </ol>
        </div>

      </div>
      <div class="whitebg cloud">
        <ul>
          <router-link  v-for=" (item,index) in tags" :key="index" :to='"/tag_list/"+item.id' target="_blank" >{{item.tagName}}</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {TagAll} from "../../api/tag";
export default {
  name: "FTag",
  data(){
    return{
      tags: [],
      page: '',
      pageNo: 1,
      pages: '',
      total: 0,
    }
  },
  mounted(){
    TagAll().then(data=>{
      this.tags=data.date
    }).catch(error=>{
      this.$message.error({
        type: "error",
        message: error || '操作失败',
      });
    })
  },
  methods:{

  }

}
</script>

<style scoped>
@import '../../assets/css/common.css';
@import '../../assets/css/font-icon.css';

</style>
