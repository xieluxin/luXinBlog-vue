layui.use('flow', function(){
  var flow = layui.flow;
  //当你执行这样一个方法时，即对页面中的全部带有 lay-src 的 img 元素开启了懒加载（当然你也可以指定相关 img）
  flow.lazyimg();
});

window.addEventListener('load',function (){
  // 颜色数组值
  const color_arr = [
    '#F8D800',
    '#0396FF',
    '#EA5455',
    '#7367F0',
    '#32CCBC',
    '#F6416C',
    '#28C76F',
    '#9F44D3',
    '#F55555',
    '#736EFE',
    '#E96D71',
    '#DE4313',
    '#D939CD',
    '#4C83FF',
    '#F072B6',
    '#C346C2',
    '#5961F9',
    '#FD6585',
    '#465EFB',
    '#FFC600',
    '#FA742B',
    '#5151E5',
    '#BB4E75',
    '#FF52E5',
    '#49C628',
    '#00EAFF',
    '#F067B4',
    '#F067B4',
    '#ff9a9e',
    '#00f2fe',
    '#4facfe',
    '#f093fb',
    '#6fa3ef',
    '#bc99c4',
    '#46c47c',
    '#f9bb3c',
    '#e8583d',
    '#f68e5f',
  ]
// 标签云列表
  var label_list = document.querySelectorAll('.label_item')
  var article_class_list = document.querySelectorAll('.article_class_item')
// 循环添加背景颜色
  label_list.forEach((item, i) => {
    item.style.background = color_arr[Math.floor(Math.random() * color_arr.length)]
  });
  article_class_list.forEach((item, i) => {
    item.style.background = color_arr[Math.floor(Math.random() * color_arr.length)]
  });

  var up = document.querySelector('.up')
// 监控页面滑动
  document.addEventListener('scroll', function () {
    if (window.pageYOffset > 600) {
      up.style.transform = 'scale(1)'
    } else {
      up.style.transform = 'scale(0)'
    }
  })
// 返回顶部
  up.addEventListener('click', function () {
    animate(window, 0)
  })
// 动画
  function animate(obj, target, callback) {

    clearInterval(obj.timer);
    obj.timer = setInterval(function () {

      var step = (target - window.pageYOffset) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      if (window.pageYOffset == target) {

        clearInterval(obj.timer);

        callback && callback();
      }
      window.scroll(0, window.pageYOffset + step)
    }, 10);
  }
  var theme = document.querySelector('.theme')
  var theme_icon = theme.querySelector('.iconfont')
  var theme_type = localStorage.getItem("theme_type") || 'default';
// 调用主题切换函数，传递一个当前处于那种主题
  SubjectSwitch(theme_type)
  theme.addEventListener('click', function () {
    // 主题切换
    if (theme_type == 'default') {
      theme_type = 'darkly';
      SubjectSwitch("darkly")
    } else {
      SubjectSwitch("default")
      theme_type = 'default';
    }
  })
// 主题切换函数
  function SubjectSwitch(val) {
    if (val == "darkly") {
      theme_icon.classList = 'iconfont icon-taiyang'
      localStorage.setItem("theme_type", "darkly")
      document.documentElement.style.setProperty('--bg-color', "#121212")
      document.documentElement.style.setProperty('--Primary-bg', "#232323")
      document.documentElement.style.setProperty('--Primary-Text', "#F2F6FC")
      document.documentElement.style.setProperty('--input-bg', "#414243")
      document.documentElement.style.setProperty('--border-color', "rgba(255,255,255,0.1)")
    }
    else {
      theme_icon.classList = 'iconfont icon-yueliang'
      localStorage.setItem("theme_type", "default")
      document.documentElement.style.setProperty('--bg-color', "#F5F5F5")
      document.documentElement.style.setProperty('--Primary-bg', "#FFF")
      document.documentElement.style.setProperty('--Primary-Text', "#000")
      document.documentElement.style.setProperty('--input-bg', "#EBEEF5")
      document.documentElement.style.setProperty('--border-color', "rgba(0,0,0,0.1)")
    }

  }

  var menu = document.querySelector('.menu')
  var nav = document.querySelector('.nav')
  var mask = document.querySelector('.mask')
  menu.addEventListener('click', function () {
    mask.style.display = 'block';
    nav.style.left = '0%';
  })
  mask.addEventListener('click', function () {
    mask.style.display = 'none';
    nav.style.left = '-70%';
  })

  var search_icon_btn = document.querySelector('.search_icon')
  var search_mobile = document.querySelector('.search_mobile')
  var search_mobile_mask = document.querySelector('.search_mobile_mask')

  search_icon_btn.addEventListener('click', function () {
    search_mobile_mask.style.display = 'block'
    search_mobile.style.top = '50px';
    // search_mobile.style.zIndex = '1';

  })
  search_mobile_mask.addEventListener('click', function () {
    search_mobile_mask.style.display = 'none'
    search_mobile.style.top = '-100%';
  })

  var class_nav = document.querySelectorAll('.class_nav')
  for (var i = 0; i < class_nav.length; i++) {
    class_nav[i].setAttribute('index', i);
    class_nav[i].setAttribute('flag', false);
    class_nav[i].addEventListener('click', function () {
      let index = this.getAttribute('index')
      let flag = this.getAttribute('flag')
      let nav_item_subtitle_item = class_nav[index].querySelector('.nav_item_subtitle_item')
      let icon_xiala1 = class_nav[index].querySelector('.icon-xiala1')
      if (flag != 'false') {
        nav_item_subtitle_item.style.display = 'flex !important'

        nav_item_subtitle_item.style.height = '0'
        class_nav[index].setAttribute('flag', false);
        icon_xiala1.style.transform = 'rotate(0deg)'
      } else {
        nav_item_subtitle_item.style.height = '100%'
        class_nav[index].setAttribute('flag', true);
        icon_xiala1.style.transform = 'rotate(180deg)'
      }
      // nav_item_subtitle_item.style.height = '100%'
      // console.log(nav_item_subtitle_item);
    })
  }

})


var search_btn  = document.querySelectorAll('.search_btn')
for (let btn_i =0; btn_i < search_btn.length; btn_i++) {
  search_btn[btn_i].addEventListener('click',function (){
    if(search_btn[btn_i].previousElementSibling.value == '' ) {
      layer.open({
        title: '提示信息',
        content: '请输入搜索内容！',
      });
      return
    }
    window.location.href="/search/" + search_btn[btn_i].previousElementSibling.value

  })
}
