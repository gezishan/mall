<template>
    <div id="home">
        <Navbar class="home-nav">
            <template #center><span>首页</span></template>
        </Navbar>
        <Scroll class="scroll-content" ref="scroll">
            <HomeSwiper :bannerList="banners"></HomeSwiper>
            <HomeRecommends :recommendList="recommends"></HomeRecommends>
            <div class="feature">
                <a href="https://act.mogujie.com/zzlx67">
                    <img src="~assets/images/home/recommend_bg.jpg" alt="">
                </a>
            </div>
            <TabControl class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick" />
            <GoodsList :goods="showGoods" />
            <div class="goodList">
                <ul>
                    <li v-for="(item, index) in goodsLocalList" :key="index">
                        <a :href="item.link">
                            <div><img :src="item.img" alt=""></div>
                            <p>{{item.title}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </Scroll>
        <BackTop @click.native="backtop" />
    </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommends from './childComps/HomeRecommends'

import {getHomeData, getHomeGoods, getLocalHomeGoods} from 'network/home'

export default {
    name: 'Home',
    components: {
        Navbar,
        Scroll,
        TabControl,
        GoodsList,
        BackTop,
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
            curType: 'pop',
            goodsLocalList: []  //本地数据
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

        backtop(){
            this.$refs.scroll.scrollTo(0, 0, 500)
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
        },
        getLocalHomeGoods(){
            getLocalHomeGoods().then(res => {
                // console.log(res)
                this.goodsLocalList = res.result
            }, err => {
                console.log(err)
            })
        }
    },
    created(){
        this.getHomeData() 

        // 商品数据
        // this.getHomeGoods('pop')
        // this.getHomeGoods('new')
        // this.getHomeGoods('sell')

        // 本地数据
        this.getLocalHomeGoods()
    }
}
</script>

<style lang="less" scoped>
    #home{
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
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
    .scroll-content{
        /* position: absolute;
        top: 45px;
        bottom: 49px;
        left: 0;
        right: 0;
        overflow: hidden; */

        height: calc(100% - 94px);
        margin-top: 45px;
        overflow: hidden;
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
    .goodList{
        width: 100%;
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            li{
                width: 45%;
                a{
                    font-size: 14px;
                    color: #333;
                    text-decoration: none;
                }
                p{
                    padding: 5px 0 10px;
                }
            }
        }
    }
</style>

