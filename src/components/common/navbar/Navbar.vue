<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="less" scoped>
    .nav-bar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 45px;
        text-align: center;
    }
    .left{
        width: 60px;
    }
    .center{
        flex: 1;
    }
    .right{
        width: 60px;
    }
</style>
