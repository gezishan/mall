<template>
    <div class="goodList">
        <ul>
            <li v-for="(item, index) in showList" :key="index">
                <a :href="item.link">
                    <div><img :src="item.img" alt=""></div>
                    <p>{{item.title}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {getLocalHomeGoods} from 'network/home'

export default {
    name: 'Done',
    data(){
        return{
            goodsList: [],
            showList: [],
            curPage: 0,
            scroll: null
        }
    },
    methods: {
        getLocalHomeGoods(){
            getLocalHomeGoods().then(res => {
                // console.log(res)
                this.goodsList = res.result
                this.showList.push(...this.goodsList.slice(0, 10))
            }, err => {
                console.log(err)
            })
        },
        loadingMore(){
            let page = this.curPage + 1
            if(page*10 >= this.goodsList.length) return
            this.showList.push(...this.goodsList.slice(page*10, page*10+10))
            this.curPage += 1
        }
    },
    created(){
        this.getLocalHomeGoods()
    },
    mounted(){
        this.scroll = new BScroll('.goodList', {
            // 默认值：0，可选值：1、2、3
            probeType: 2,
            // pullUpLoad: true    //上拉加载
            pullUpLoad: {
                threshold: 50,
                moreTxt: '加载更多',
                noMoreTxt: '没有更多数据了'
            }
        })
        
        this.scroll.on('scroll', pos => {
            // console.log(pos)
        })

        this.scroll.on('pullingUp', () => {
            console.log('上拉加载更多')
            // 发送网络请求，请求更多数据
            this.loadingMore()

            // 等待请求完成并展示后
            setTimeout(() => {
                this.scroll.finishPullUp()
            }, 2000);
        })
    }
}


// scroll.on('scroll', pos => {
//             console.log(pos)
//         })

</script>

<style lang="less" scoped>
    .goodList{
        width: 100%;
        height: 600px;
        overflow: hidden;
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