<template>
    <div>
        <div><img :src="goodsItem.show.img" alt=""></div>
        <div>
            <p>{{goodsItem.title}}</p>
            <span>{{goodsItem.prize}}</span>
            <span>{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>


<script>
export default {
    name: "GoodsListItem",
    props: {
        goodsItem: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>


<style lang="less" scoped>

</style>