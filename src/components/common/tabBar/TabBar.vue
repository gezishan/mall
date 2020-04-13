<template>
    <div class="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
  import TabItem from './TabItem'

  export default {
    name: 'TabBar',
    data () {
      return {
        
      }
    },
    components:{
      TabItem
    }
  }
</script>

<style scoped>
  .tab-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 49px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #f7f7f8;
  }
</style>
