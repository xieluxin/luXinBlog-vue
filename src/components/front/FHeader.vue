<template>
  <div>
    <header id="header">
      <div class="navbox">
        <h2 id="mnavh"><span class="navicon"></span></h2>
        <div class="logo"><a href="/"> 鲁鑫博客 </a></div>
        <nav>
          <ul id="starlist">
            <li>
              <a href="/">首页</a>
            </li>
            <li v-for="(item,index) in channels" :key="index" :class="{menu:item.children}">
              <router-link v-if="item.single" :to=' "/channel_detail/"+item.id '>{{item.name}}</router-link>
              <router-link v-else :to=' "/list/"+item.id '>{{item.name}}</router-link>

              <ul class="sub" v-if="item.children">
                <li v-for="(sub,sindex) in item.children" :key="sindex">
                  <router-link v-if="sub.single" :to=' "/channel_detail/"+sub.id '>{{sub.name}}</router-link>
                  <router-link v-else :to=' "/list/"+sub.id '>{{sub.name}}</router-link>
                </li>
              </ul>

            </li>

            <li ><router-link to="/login" target="_blank">后台登录</router-link></li>


          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import channels from "../../data/nav"
import {queryByPos} from "../../api/front";

export default {
  name: "FHeader",
  data(){
    return{
      channels:[],
    }
  },
  mounted(){
    queryByPos('a').then(data=>{
      this.channels = data.date

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

</style>
