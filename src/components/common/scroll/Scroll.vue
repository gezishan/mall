<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>


<script>
import BScroll from 'better-scroll'

export default {
    name: "Scroll",
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            scroll: null
        }
    },
    computed:{
        scrollY(){
            return this.scroll.y
        }
    },
    methods:{
        scrollTo(x, y, time=300){
            this.scroll && this.scroll.scrollTo(x, y, time)
        },
        finishPullUp(){
            console.log('finishPullUp')
            this.scroll && this.scroll.finishPullUp()
        },
        refresh(){
            // console.log('refresh11')
            this.scroll && this.scroll.refresh()
        }
    },
    mounted(){
        // 创建BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        })

        // 监听滚动位置
        if(this.probeType === 2 || this.probeType === 3){
            this.scroll.on('scroll', pos => {
                // console.log(pos)
                this.$emit('scroll', pos)
            })
        }
        

        // 监听上拉事件
        if(this.pullUpLoad){
            this.scroll.on('pullingUp', () => {
                // console.log('上拉加载更多')
                this.$emit('pullingUp')
            })
        }
        
    }
}
</script>


<style lang="less" scoped>

</style>