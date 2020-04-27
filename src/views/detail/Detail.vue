<template>
    <div>
        <h1>{{$route.params.id}}</h1>
    </div>
</template>


<script>
import {getItemDetail} from 'network/detail'

export default {
    name: "Detail",
    data(){
        return{
            
        }
    },
    methods: {
        getItemDetail(){
            getItemDetail(this.$route.params.id).then(res => {
                console.log(res)
            }, err => {
                console.log(err)
            })
        }
    },
    created(){
        // console.log(this.$route.params.id)
        // this.getItemDetail()
    }
}
</script>


<style lang="less" scoped>

</style>