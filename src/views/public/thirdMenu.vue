<style scoped>
    .ivu-btn-group .ivu-btn {
        border-radius: 0;
        color: #8e8e8e;
    }
    .ivu-btn-group .ivu-btn.active {
        color: #fff;
        background-color: #00a2ca;
        border: 1px solid #00a2ca;
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
    }
</style>
<template>
    <div style="position:relative">
        <!-- 三级菜单插入内容 -->
        <div style="position:absolute;right:20px;top:10px">
            <slot></slot>
        </div>
        <!-- 三级菜单内容 -->
        <Button-group style="margin:10px 0">
            <Button v-for="(item,index) in thirdData"
                    @click="selectThird(item, index)"
                    :class="{active: currentBtn === item.name}"
                    :key="index"
            >{{item.name}}</Button>
        </Button-group>
    </div>
</template>
<script>
    export default {
        name:'third-menu',
        data(){
            return {
                currentBtn: '全部'
            }
        },
        created() {
            this.currentBtn = this.$route.query.thirdStatus || this.thirdData[0].name;
        },
        props:['thirdData'],
        methods:{
            selectThird(item, index){
                this.currentBtn = item.name;
                this.$router.push({
                    path: this.$route.path,
                    query: {
                        thirdStatus: item.name
                    }
                });
                this.$emit('selectThird',item);
            }
        }
    }
</script>
