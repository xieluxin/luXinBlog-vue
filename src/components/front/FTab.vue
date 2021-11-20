<template>
  <div class="tab_box whitebg">
    <div class="tab_buttons">
      <ul>
        <li v-for="(item,index) in channels" :key="index" @click="cur=index" :class="{newscurrent:cur==index}">{{item.name}}</li>
      </ul>
    </div>
    <div class="newstab">
      <div v-show="cur==0" class="newsitem ">
        <div class="newspic">
          <ul>
            <li><a href="/"><img src="@/assets/images/collection8.jpg"><span>个人博客，属于我的小世界！</span></a></li>
            <li><a href="/"><img src="@/assets/images/collection9.jpg"><span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的</span></a></li>
          </ul>
        </div>
        <ul class="newslist">
          <li><i></i><a href="/">个人博客，属于我的小世界！</a>
            <p>个人博客，用来做什么？我刚开始就把它当做一个我吐槽心情的地方，也就相当于一个网络记事本，写上一些关于自己生活工作中的小情小事，也会放上一些照片，音乐。每天工作回家后就能访问自己的网站，一边听着音乐，一边写写文章。</p>
          </li>
          <li><i></i><a href="/">安静地做一个爱设计的女子</a>
            <p>自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。</p>
          </li>
          <li><i></i><a href="/">我是怎么评价自己的？</a>
            <p>为了挨打轻一些，问我哪里来的，我瞎说了一个说那个谁家的，结果，打得更凶。最后事情还原了真相，我妈说，你要说说奶奶家的，都不会打你了。从此以后，我知道撒谎是会付出更惨痛的代价的，我不再撒谎，也不喜欢爱撒谎的人。</p>
          </li>
          <li><i></i><a href="/">个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a>
            <p>不管你是学前端的还是后端的，作为一个程序员，做一个自己的博客，那是必然的。咱们的圈子就这么大，想让更多的人了解你，看看你的技术多牛逼，扔一个博客地址就行了</p>
          </li>
          <li><i></i><a href="/">做个人博客如何用帝国cms美化留言增加头像选择</a>
            <p>帝国cms的留言板系统很简单，用户名，邮箱，电话，没有头像显示，如果要增加头像选择，而又不增加表或者字段的情况下，选择改用其中一个字段，比如电话这个，修改一下即可</p>
          </li>
        </ul>
      </div>
      <div v-show="cur==1" class="newsitem">
        <div class="newspic">
          <ul>
            <li><a href="/"><img src="@/assets/images/collection10.jpg"><span>个人博客，属于我的小世界！</span></a></li>
            <li><a href="/"><img src="@/assets/images/collection11.jpg"><span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的</span></a></li>
          </ul>
        </div>
        <ul class="newslist">
          <li><i></i><a href="/">安静地做一个爱设计的女子</a>
            <p>自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。</p>
          </li>
          <li><i></i><a href="/">我是怎么评价自己的？</a>
            <p>为了挨打轻一些，问我哪里来的，我瞎说了一个说那个谁家的，结果，打得更凶。最后事情还原了真相，我妈说，你要说说奶奶家的，都不会打你了。从此以后，我知道撒谎是会付出更惨痛的代价的，我不再撒谎，也不喜欢爱撒谎的人。</p>
          </li>
          <li><i></i><a href="/">个人博客，属于我的小世界！</a>
            <p>个人博客，用来做什么？我刚开始就把它当做一个我吐槽心情的地方，也就相当于一个网络记事本，写上一些关于自己生活工作中的小情小事，也会放上一些照片，音乐。每天工作回家后就能访问自己的网站，一边听着音乐，一边写写文章。</p>
          </li>
          <li><i></i><a href="/">个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a>
            <p>不管你是学前端的还是后端的，作为一个程序员，做一个自己的博客，那是必然的。咱们的圈子就这么大，想让更多的人了解你，看看你的技术多牛逼，扔一个博客地址就行了</p>
          </li>
          <li><i></i><a href="/">做个人博客如何用帝国cms美化留言增加头像选择</a>
            <p>帝国cms的留言板系统很简单，用户名，邮箱，电话，没有头像显示，如果要增加头像选择，而又不增加表或者字段的情况下，选择改用其中一个字段，比如电话这个，修改一下即可</p>
          </li>
        </ul>
      </div>
      <div v-show="cur==2" class="newsitem">
        <div class="newspic">
          <ul>
            <li><a href="/"><img src="@/assets/images/collection12.jpg"><span>个人博客，属于我的小世界！</span></a></li>
            <li><a href="/"><img src="@/assets/images/collection13.jpg"><span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的</span></a></li>
          </ul>
        </div>
        <ul class="newslist">
          <li><i></i><a href="/">我是怎么评价自己的？</a>
            <p>为了挨打轻一些，问我哪里来的，我瞎说了一个说那个谁家的，结果，打得更凶。最后事情还原了真相，我妈说，你要说说奶奶家的，都不会打你了。从此以后，我知道撒谎是会付出更惨痛的代价的，我不再撒谎，也不喜欢爱撒谎的人。</p>
          </li>
          <li><i></i><a href="/">个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a>
            <p>不管你是学前端的还是后端的，作为一个程序员，做一个自己的博客，那是必然的。咱们的圈子就这么大，想让更多的人了解你，看看你的技术多牛逼，扔一个博客地址就行了</p>
          </li>
          <li><i></i><a href="/">做个人博客如何用帝国cms美化留言增加头像选择</a>
            <p>帝国cms的留言板系统很简单，用户名，邮箱，电话，没有头像显示，如果要增加头像选择，而又不增加表或者字段的情况下，选择改用其中一个字段，比如电话这个，修改一下即可</p>
          </li>
          <li><i></i><a href="/">个人博客，属于我的小世界！</a>
            <p>个人博客，用来做什么？我刚开始就把它当做一个我吐槽心情的地方，也就相当于一个网络记事本，写上一些关于自己生活工作中的小情小事，也会放上一些照片，音乐。每天工作回家后就能访问自己的网站，一边听着音乐，一边写写文章。</p>
          </li>
          <li><i></i><a href="/">安静地做一个爱设计的女子</a>
            <p>自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。</p>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import {queryByPos} from "../../api/front"
export default {
  name: "FTab",
  data(){
    return{
      channels:[],
      cur:'0'
    }
  },
  mounted() {
    queryByPos('b').then(data=>{
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
