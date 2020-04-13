<template>
    <div>
        <swiper>
            <Swiper-item v-for="(item,index) in bannerList" :key="index">
                <a :href="item.link"><img :src="item.image"></a>
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
    components: {
        Swiper, 
        SwiperItem
    }
}
</script>