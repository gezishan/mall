<template>
    <div>
        <swiper>
            <Swiper-item v-for="(item,index) in bannerList" :key="index">
                <a :href="item.link"><img :src="item.image" @load="imageLoad"></a>
            </Swiper-item>
        </swiper>
    </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
    name: 'HomeSwiper',
    props: {
        bannerList: {
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
    components: {
        Swiper, 
        SwiperItem
    },
    methods: {
        imageLoad(){
            if(!this.isLoad){
                this.$emit('swiperImageLoad')
                this.isLoad = true
            }
        }
    }
}
</script>