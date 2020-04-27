<template>
    <div class="goodList">
        <GoodsListItem v-for="(item, index) in goods" :key="index" :goodsItem="item" />
    </div>
</template>


<script>
import GoodsListItem from './GoodsListItem'

export default {
    name: "GoodsList",
    props: {
        goods: {
            type: Array,
            default(){
                return []
            }
        }
    },
    components: {
        GoodsListItem
    }
}
</script>


<style lang="less" scoped>
    .goodList{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>