<template>
  <div>
    <FHeader/>
    <article>
      <div class="lbox">

        <div class="content_box whitebg">
          <h2  v-if="channel.name" class="htitle">{{channel.name}}</h2>
          <p class="con_info" v-if="channel.summary"><b>简介</b>
            {{channel.summary}}
          </p>
          <div class="con_text" style="min-height: 1000px" v-if="channel.content">
            <v-md-preview :text="channel.content"></v-md-preview>
          </div>
        </div>

      </div>
      <div class="rbox">
        <FOrder/>
        <FTag/>
        <FLink/>
      </div>
    </article>
    <footer>
      <div class="box">
        <div class="wxbox">
          <ul>
            <li><img src="@/assets/images/QQ_Group.jpg"><span>QQ群</span></li>
            <li><img src="@/assets/images/WeChat.jpg"><span>我的微信</span></li>
          </ul>
        </div>
        <div class="endnav">
          <p><b>站点声明：</b></p>
          <p>1、采用 SpringBoot+Vue 编写</p>
          <p>2、本站站主鲁鑫，小菜鸡一枚欢迎各位大佬指点和讨论<a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=HHh9cn95b3F1cHVye1xtbTJ-c3E" target="_blank">dacesmiling@qq.com</a></p>
        </div>
      </div>
      <a href="#">
        <div class="top iconfont icon-huojian">
        </div>
      </a>
    </footer>
  </div>
</template>

<script>
import '@/assets/css/base.css'
import '@/assets/css/m.css'
import FHeader from "../../components/front/FHeader";
import FOrder from "../../components/front/FOrder";
import FTag from "../../components/front/FTag";
import FLink from "../../components/front/FLink";
import Foot from "../../components/front/Foot";
import {get} from "../../api/front";


export default {
  name: "ChannelDetail",
  components:{
    FLink, FOrder,FTag, FHeader, Foot
  },
  data(){
    return{
      channel:{}
    }
  },
  mounted() {
    this.getChannel(this.$route.params.id);
  },
  beforeRouteUpdate(to,from,next){
    this.getChannel(to.params.id);
    next()
  },
  methods:{
    getChannel(id){
      get(id).then(data=>{
        this.channel = data.date;
        console.log(this.channel)
      })
    }
  }
}
</script>

<style scoped>

</style>
