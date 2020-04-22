<template>
    <div class="recommend">
        <div v-for="(item, index) in recommendList" :key="index" class="recommend-item"> 
            <a :href="item.link">
                <div><img :src="item.image" @load="imageLoad"></div>
                <!-- <div><img :src="item.image"></div> -->
                <p>{{item.title}}</p>
            </a>
        </div>
    </div>
</template>


<script>
export default {
    name: "HomeRecommends",
    props: {
        recommendList: {
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            isLoad: false
        }
    },
    methods: {
        imageLoad(){
            if(!this.isLoad){
                this.$emit('recomendImageLoad')
                this.isLoad = true
            }
        }
    }
}
</script>


<style lang="less" scoped>
    .recommend{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 10px 0;
        border-bottom: 10px solid #eee;
    }
    .recommend-item{
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        width: 23%;
        text-align: center;
        a{
            color: #666;
            text-decoration: none;
        }
        img{
            display: block;
            width: 100%;
        }
        p{
            padding-top: 10px;
            font-size: 12px;
        }
    }
</style>
