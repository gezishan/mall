<template>
  <div id="app">
    <keep-alive><router-view/></keep-alive>
    <TabBar>
      <TabItem link="/home">
        <template #tab-img><img src="~assets/images/tabbar/icon_home.png"></template>
        <template #tab-img-cur><img src="~assets/images/tabbar/icon_home_active.png"></template>
        <template #tab-text>首页</template>
      </TabItem>
      <TabItem link="/recruit">
        <template #tab-img><img src="~assets/images/tabbar/icon_recruit.png"></template>
        <template #tab-img-cur><img src="~assets/images/tabbar/icon_recruit_active.png"></template>
        <template #tab-text>分类</template>
      </TabItem>
      <TabItem link="/done" activeColor="#e52c10">
        <template #tab-img><img src="~assets/images/tabbar/icon_done.png"></template>
        <template #tab-img-cur><img src="~assets/images/tabbar/icon_done_active.png"></template>
        <template #tab-text>购物车</template>
      </TabItem>
      <TabItem link="/me">
        <template #tab-img><img src="~assets/images/tabbar/icon_mine.png"></template>
        <template #tab-img-cur><img src="~assets/images/tabbar/icon_mine_active.png"></template>
        <template #tab-text>我的</template>
      </TabItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabBar/TabBar'
import TabItem from 'components/common/tabBar/TabItem'
export default {
  name: 'App',
  components: {
    TabBar,
    TabItem
  }
}
</script>

<style>
@import "assets/css/reset.css";


</style>
