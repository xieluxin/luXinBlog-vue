<template>
  <div class="whitebg lanmu" v-if="channel">
    <img v-if="channel.channelImg ==null || channel.channelImg == ''" style="width: 163px;height: 100px" src="@/assets/images/collection13.jpg">
    <img v-else :src="channel.channelImg">
    <h1>{{channel.name}}</h1>
    <p>{{channel.summary}}</p>
  </div>
</template>

<script>

    export default {
      name: "FChannelInfo",
      props:['channel'],
      data(){
        return{
        }
      },

    }
</script>

<style scoped>

</style>
