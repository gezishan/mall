<template>
    <div class="back-top">
        <img src="~assets/images/common/top.png" alt="">
    </div>
</template>


<script>
export default {
    name: "BackTop"
}
</script>


<style lang="less" scoped>
    .back-top{
        position: fixed;
        bottom: 60px;
        right: 10px;
        width: 30px;
        img{
            display: block;
            width: 100%;
        }
    }
</style>