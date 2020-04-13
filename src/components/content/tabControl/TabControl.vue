<template>
    <div class="tab-control">
        <div v-for="(item, index) in titles" 
            :key="index" 
            :class="{active: curIndex === index}"
            @click="handleClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>


<script>
export default {
    name: "TabControl",
    props: {
        titles: {
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            curIndex: 0
        }
    },
    methods: {
        handleClick(index){
            this.curIndex = index
            this.$emit('tabClick', index)
        }
    }
}
</script>


<style lang="less" scoped>
    .tab-control{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px 0;
        font-size: 14px;
        color: #333;
        div{
            padding: 5px;
            border-bottom: 2px solid #fff;
            &.active{
                color: #ff8e96;
                border-bottom: 2px solid #ff8e96;
            }
        }
    }
    
</style>
