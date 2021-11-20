import Vue from 'vue'
import VueRouter from 'vue-router'
import token from "./token";

// 后台
import Login from "./views/admin/Login";
import Index from "./views/admin/Index";
import User from "./views/admin/user/index";
import Tag from "./views/admin/tag/index";
import Channel from "./views/admin/channel/index"
import ChannelAdd from "./views/admin/channel/Add";
import ChannelEdit from "./views/admin/channel/Edit";
import Article from "./views/admin/article/index"
import ArticleAdd from "./views/admin/article/Add";
import ArticleEdit from "./views/admin/article/Edit";
import Comment from "./views/admin/comment/index"
import FriendLink from "./views/admin/friend/index"
import FriendLinkAdd from "./views/admin/friend/Add"
import FriendLinkEdit from "./views/admin/friend/Edit"
import info from "./views/admin/user/info";

// 前台
import FIndex from "./views/front/index"
import List from "./views/front/List";
import Detail from "./views/front/Detail";
import ChannelDetail from "./views/front/ChannelDetail";
import TagList from "./views/front/TagList";
import HotArticle from "./components/front/HotArticle";



Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path:'/',
      name:'FIndex',
      component:FIndex,
      meta:{
        requireLogin:false
      }
    },
    { // 热门文章
      path:'/hotArticle',
      name:'hotArticle',
      component:HotArticle,
      meta:{
        requireLogin:false
      }
    },
    { // 列表页
      path:'/list/:id',
      name:'list/:id',
      component:List,
      meta:{
        requireLogin:false
      }
    },
    { // 详情页
      path:'/detail/:id',
      name:'detail/:id',
      component:Detail,
      meta:{
        requireLogin:false
      }
    },
    { // 简介
      path:'/channel_detail/:id',
      name:'channel_detail/:id',
      component:ChannelDetail,
      meta:{
        requireLogin:false
      }
    },
    { //
      path:'/tag_list/:id',
      name:'tag_list/:id',
      component:TagList,
      meta:{
        requireLogin:false
      }
    },
    {
        // 后台登录页面
        path:'/login',
        name:'login',
        component:Login
    },
    {
        // 后台主页
        path: '/index',
        name: 'index',
        component: Index,
        children: [
          {
              // 个人信息
              path:'/info',
              name:'info',
              component: info
          }, {
              // 用户管理
              path: '/user',
              name: 'user',
              component: User
          }, {
              // 标签管理
              path: '/tag',
              name: 'tag',
              component: Tag
          }, {
              // 栏目管理
              path: '/channel',
              name: 'channel',
              component: Channel
                  }, {
                    // 添加 栏目
                    path: '/channel_add',
                    name: 'channel_add',
                    component: ChannelAdd
                  }, {
                    // 编辑 栏目
                    path: '/channel_edit',
                    name: 'channel_edit',
                    component: ChannelEdit
                    },
          {
              // 评论管理
              path: '/article',
              name: 'article',
              component: Article
                  }, {
                    // 添加标签
                    path: '/article_add',
                    name: 'article_add',
                    component: ArticleAdd
                  },  {
                    // 编辑文章
                    path: '/article_edit',
                    name: 'article_edit',
                    component: ArticleEdit
                  },
          {
            // 标签管理
            path: '/comment',
            name: 'comment',
            component: Comment
          },
          {
              // 友情链接
              path: '/friend',
              name: 'friend',
              component: FriendLink
                  }, {
                      // 添加链接
                      path: '/friend_add',
                      name: 'friend_add',
                      component: FriendLinkAdd
                    }, {
                      // 编辑 链接
                      path: '/friend_edit',
                      name: 'friend_edit',
                      component: FriendLinkEdit
                    }
        ]
    }
  ]
});



// // 路由守卫
router.beforeEach((to,from,next) => {
  if (token.get()){
    next()
  }else{
    if (!to.matched.some(r=>r.meta.requireLogin)){
      next()
    }else {
      if (to.path === '/login'){
        next()
      }else {
        next('/login')
      }
    }
  }
});
export default router



