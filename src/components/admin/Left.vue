<template>
  <el-aside width="220px">
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo"
             :unique-opened="true"
             router
             :default-openeds="openeds"
             @open="handleOpen"
             @close="handleClose"
    >
      <template v-for="(menu,index) in menus" >
        <el-submenu  :index="menu.children[0].router" :key="index">
          <template slot="title">
            <i :class="menu.icon"></i>
            <span slot="title">{{menu.name}}</span>
          </template>

          <template v-for="(child,i) in menu.children">
            <el-menu-item
              :index="child.router" :key="index+'-'+i">
              <i :class="child.icon"></i>
              {{child.name}}
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import menus from  '../../api/menu'
export default {
  name: "Left",
  data() {
    return {
      menus:menus,
      openeds: ['1'],
      uniqueOpened: false
    };
  },
  methods:{
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    }
  }
}

</script>

<style scoped>



.el-aside{
  background-color: #ffffff;
  position: absolute;
  left: 0px;
  bottom: 0px;
  top: 60px;
  border-right: 1px solid #e6e6e6;
  box-shadow: 5px 0px 10px -2px #e0e0e0;
}


</style>
