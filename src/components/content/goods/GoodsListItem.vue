<template>
    <div class="goods_item" @click="detailClick(goodsItem.iid)">
        <div class="img_box"><img :src="goodsItem.show.img" @load="imageLoad"></div>
        <div>
            <div class="item_title">
                <p>{{goodsItem.title}}</p>
            </div>
            <div class="item_info">
                <span class="price">{{goodsItem.price}}</span>
                <span class="cfav">{{goodsItem.cfav}}</span>
            </div>
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
    },
    methods: {
        imageLoad(){
            this.$bus.$emit('itemImageLoad')
        },
        detailClick(id){
            console.log(id)
            this.$router.push('/detail/' + id)
        }
    }
}
</script>


<style lang="less" scoped>
    .goods_item{
        width: 45%;
        font-size: 14px;
        color: #333;
    }
    .img_box{
        height: 250px;    
        overflow: hidden;
    }
    .item_title{
        height: 36px;
        margin: 5px 0 10px;
        font-size: 12px;
        overflow: hidden;
        p{
            height: 36px;
            line-height: 18px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
    }
    .item_info{
        margin: 0 5px 10px;
        overflow: hidden;
        .price{
            float: left;
            font-weight: bold;
        }
        .cfav{
            float: right;
            padding-right: 20px;
            background: url(~assets/images/common/star.png) center right no-repeat;
            background-size: auto 14px;
        }
    }
</style>