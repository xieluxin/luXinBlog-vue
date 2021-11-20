<template>
  <div class="banbox">
    <swiper class="swiper">
     <swiper-slide v-for="(item,index) in sliders" :key="index">
       <a :href="item.url" target="_blank">
         <img class="swiper_img" :src="item.img" />
       </a>
     </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'FSWiper',
  title: 'Pagination',
  components: {
    Swiper,
    SwiperSlide
  },
  data(){
    return{
      sliders:[
        {
          "img":"https://z3.ax1x.com/2021/09/11/hxjkcT.png",
          "url":"https://www.baidu.com"
        },
        {
          "img":"https://z3.ax1x.com/2021/09/11/hxjVuF.png",
          "url":"https://www.baidu.com"
        },
        {
          "img":"https://z3.ax1x.com/2021/09/11/hxjF3V.png",
          "url":"https://www.baidu.com"
        },
        {
          "img":"https://z3.ax1x.com/2021/09/11/hxjAjU.png",
          "url":"www.baidu.com"
        },
      ]
    }
  }
}
</script>
<style>
.swiper{
  height: 403px;
  width: auto;
  overflow: hidden;
}
.swiper_img{
  height: 100%;
  width: auto;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

</style>
