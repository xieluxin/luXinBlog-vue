<template>
  <div v-title data-title="鲁鑫博客">
    <FHeader/>
    <article style="margin-bottom: 70px">
      <div class="lbox">
        <FSWiper/>
<!--        <FTab/>-->
        <FNew :articles="articles"/>
      </div>
      <div class="rbox">
        <FMe/>
        <HotArticle :articles="articles"/>
        <Notice/>
        <FOrder/>
        <FLink/>
      </div>
    </article>
    <!-- 底部 -->
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
import FSWiper from "../../components/front/FSWiper";
import FTab from "../../components/front/FTab";
import FMe from "../../components/front/FMe";
import FNew from "../../components/front/FNew";
import FOrder from "../../components/front/FOrder";
import FLink from "../../components/front/FLink";
import Foot from "../../components/front/Foot";
import HotArticle from "../../components/front/HotArticle";
import Notice from "../../components/front/FNotice";
import {getNew} from "../../api/front";

export default {
name: "index",
  components:{
    Notice,
    Foot, FLink, FOrder, FNew, FMe, FTab, FHeader,FSWiper,HotArticle
  },
  data(){
    return{
      articles:[],
      titleImg:'',
    }
  },
  created(){
    console.log("准备")
    getNew().then(data=>{
      console.log(data)
      console.log(this.articles);
      console.log("结束---")
      this.articles = data.list;

    });
  },
}
</script>

<style scoped>

</style>
