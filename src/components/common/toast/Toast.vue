<template>
  <div class="toast" v-if="isShow">
    <div class="text_box">
      <div>{{message}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data(){
    return{
      message: '',
      isShow: false
    }
  },
  methods: {
    show(text, time=3000){
      this.message = text
      this.isShow = true
      setTimeout(() => {
        this.message = ''
        this.isShow = false
      }, time)
    }
  }
}
</script>

<style lang="less" scoped>
  .toast{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    .text_box{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      div{
        max-width: 90%;
        padding: 10px;
        color: #fff;
        line-height: 1.5;
        background: rgba(0, 0, 0, .8);
        border-radius: 6px;
      }
    }
  }
</style>