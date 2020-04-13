<template>
    <div id="home">
        <Navbar class="home-nav">
            <template #center><span>首页</span></template>
        </Navbar>
        <HomeSwiper :bannerList="banners"></HomeSwiper>
        <HomeRecommends :recommendList="recommends"></HomeRecommends>
        <div class="feature">
            <a href="https://act.mogujie.com/zzlx67">
                <img src="~assets/images/home/recommend_bg.jpg" alt="">
            </a>
        </div>
        <TabControl class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick" />
        <GoodsList :goods="showGoods" />
        <ul>
            <li>li1</li>
            <li>li2</li>
            <li>li3</li>
            <li>li4</li>
            <li>li5</li>
            <li>li6</li>
            <li>li7</li>
            <li>li8</li>
            <li>li9</li>
            <li>li10</li>
            <li>li11</li>
            <li>li12</li>
            <li>li13</li>
            <li>li14</li>
            <li>li15</li>
            <li>li16</li>
            <li>li17</li>
            <li>li18</li>
            <li>li19</li>
            <li>li20</li><li>li1</li>
            <li>li2</li>
            <li>li3</li>
            <li>li4</li>
            <li>li5</li>
            <li>li6</li>
            <li>li7</li>
            <li>li8</li>
            <li>li9</li>
            <li>li10</li>
            <li>li11</li>
            <li>li12</li>
            <li>li13</li>
            <li>li14</li>
            <li>li15</li>
            <li>li16</li>
            <li>li17</li>
            <li>li18</li>
            <li>li19</li>
            <li>li20</li><li>li1</li>
            <li>li2</li>
            <li>li3</li>
            <li>li4</li>
            <li>li5</li>
            <li>li6</li>
            <li>li7</li>
            <li>li8</li>
            <li>li9</li>
            <li>li10</li>
            <li>li11</li>
            <li>li12</li>
            <li>li13</li>
            <li>li14</li>
            <li>li15</li>
            <li>li16</li>
            <li>li17</li>
            <li>li18</li>
            <li>li19</li>
            <li>li20</li>
        </ul>
    </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommends from './childComps/HomeRecommends'

import {getHomeData, getHomeGoods} from 'network/home'

export default {
    name: 'Home',
    components: {
        Navbar,
        TabControl,
        GoodsList,
        HomeSwiper,
        HomeRecommends
    },
    data(){
        return{
            banners: [],
            recommends: [],
            goods: {
                "pop": {page: 0, list: []},
                "new": {page: 0, list: []},
                "sell": {page: 0, list: []},
            },
            curType: 'pop'
        }
    },
    computed:{
        showGoods(){
            return this.goods[this.curType].list
        }
    },
    methods: {
        /*
        * 事件监听相关
        */
        tabClick(index){
            // console.log(index)
            this.curType = Object.keys(this.goods)[index]
            console.log(this.curType)
        },

        /*
        * 请求数据相关
        */
        getHomeData(){
            getHomeData().then(res => {
                // console.log(res)
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
            },err => {
                console.log(err)
            })
        },
        getHomeGoods(type){
            let page = this.goods[type].page + 1
            getHomeGoods(type, page).then(res => {
                console.log(res)
                // 暂无接口
                /* let listArr = res.data.list
                this.goods[type].list.push(...listArr)
                this.goods[type].page += 1 */
            }, err => {
                console.log(err);
            })
        }
    },
    created(){
        this.getHomeData() 
        // 商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    }
}
</script>

<style lang="less" scoped>
    #home{
        padding: 45px 0 49px;
    }
    .home-nav{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        color: #fff;
        background: #ff8e96;
        z-index: 10;
    }
    .feature{
        width: 100%;
        img{
            display: block;
            width: 100%;
        }
    }
    .tab-control{
        position: sticky;
        top: 45px;
        background: #fff;
        z-index: 9;
    }
</style>

