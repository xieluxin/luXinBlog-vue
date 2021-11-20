<template>
  <div>
    <FHeader/>
    <article>
      <div class="lbox">
        <FNew/>
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
import FNew from "../../components/front/FNew";
import FOrder from "../../components/front/FOrder";
import Foot from "../../components/front/Foot";
import FChannelInfo from "../../components/front/FChannelInfo";
import FTag from "../../components/front/FTag";
import FLink from "../../components/front/FLink";


export default {
  name: "TagList",
  components:{
    FLink, FChannelInfo, FTag, Foot, FOrder, FNew, FHeader
  },
  beforeRouteUpdate(to,from,next){
    console.log(to.params);
    next()
  }
}
</script>

<style scoped>

</style>
