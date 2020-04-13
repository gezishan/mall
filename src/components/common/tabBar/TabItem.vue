<template>
  <div class="tab-item" @click="handleClick">
    <div class="tab-img" v-show="!isShow"><slot name="tab-img"></slot></div>
    <div class="tab-img-cur" v-show="isShow"><slot name="tab-img-cur"></slot></div>
    <div class="tab-text" :style="activeStyle"><slot name="tab-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabItem',
  props: {
    link: {
      type: String,
      required: true
    },
    activeColor: {
      type: String,
      default: '#e52c10'
    }
  },
  data () {
    return {
      
    }
  },
  computed: {  
    isShow(){
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle(){
      return this.isShow ? {color: this.activeColor} : {}
    }
  },
  methods: {
    handleClick(){
      this.$router.push(this.link)
    }
  }
}
</script>

<style scoped>
  .tab-item{
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
  }
  .tab-img,.tab-img-cur{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 29px;
  }
  .tab-img img,.tab-img-cur img{
    width: 50%;
  }
  .tab-text{
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: #929292;
    text-align: center;
  }
</style>
