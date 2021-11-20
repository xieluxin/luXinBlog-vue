<template>
  <div v-title data-title="博客正文">
    <FHeader/>
    <article style="margin-bottom: 80px">
      <div class="lbox">
        <div class="content_box whitebg">
          <h2 class="htitle">
            <span class="con_nav">您现在的位置是：<a href="/">网站首页</a>><a href="/">博客正文</a>
            </span>博客正文</h2>
          <div class="con_tilte" style="text-align: center;color:#000" >{{article.title}}</div>
          <div class="bloginfo">
           <div class="bloginfo_left">
              <span>
              <img class="luXin_info luXin_avatar" :src="avatar">
            </span>
             <span class="luXin_info" style="color: #409eff">{{article.author}}</span>
             <span class="luXin_info">{{article.createDate}}</span>
           </div>
            <div style="line-height: 60px">
              <el-button size="small" v-for="(item,index) in tagList.slice(0,1)" :key="index" >{{item.tagName}}</el-button>
            </div>
          </div>
          <p class="con_info">
            <b>摘要</b> {{article.summary}} </p>
          <div class="con_text">
            <v-md-preview :text="article.content"></v-md-preview>
          </div>
        </div>

      </div>
      <div class="rbox">
        <NoticeTest/>
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
  import Foot from "../../components/front/Foot";
  import FLink from "../../components/front/FLink";
  import NoticeTest from "../../components/front/FNotice";
  import {getArticle} from "../../api/front";
  import token from "../../token";
  import {all} from "../../api/tag";


export default {
  name: "Detail",
  components:{
    FLink,
    NoticeTest, FTag, FOrder, FHeader,Foot,
  },
  data(){
    return{
      avatar: token.getUser().avatar,
      article:{},

      tagList:[]
    }
  },

  created() {
    getArticle(this.$route.params.id).then(data=>{
      console.log(data)
      console.log(data)
      console.log("========///")
      this.article = data.date;
    })

    all().then(data=>{
      this.tagList = data.date;
    }).catch(error=>{
      this.$message.error({
        type: "error",
        message: error || '操作失败',
      });
    })


  },
  beforeRouteUpdate(to,from,next){
    console.log(to.params);
    next()
  }
}
</script>

<style scoped>
.bloginfo{
  display: flex;
  justify-content: space-between;
}
.luXin_avatar{
  width: 50px;
  border-radius: 50%;
  display: inline-block
}
.luXin_info{
  vertical-align:middle;
}

</style>
