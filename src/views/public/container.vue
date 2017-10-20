<style scoped>

</style>
<template>
    <div style="width: 100%;padding: 15px">
        <!-- 上部标题 -->
        <div style="border-bottom: 1px solid #ddd">
            <h2 class="container-title">{{contentTitle}}</h2>
        </div>
        <!-- 提示框 -->
        <div class="container-tip"
             v-if="showTip"
             v-html="showTip">
        </div>
        <!-- 二级菜单 -->
        <second-menu :secondData="secondData" v-if="showSecond"></second-menu>
        <!-- 内容 -->
        <component :is="contentComponent"
                   @change-title="changeContentTitle"
                   @change-tip="changeContentTip"
        ></component>
    </div>
</template>
<script>
    import util from '../../libs/util';
    import secondMenu from './secondMenu.vue';
    export default {
        components: {
            'second-menu': secondMenu,
        },
        props:['menuData','contentTitle','activeFirstId'],
        data () {
            return {
                showTip: ''
            }
        },
        computed: {
            showSecond(){//是否显示二级菜单
                return !this.$route.params.third;
            },
            secondData() {
                return this.menuData.filter((v, i) => v.ParentId == this.activeFirstId);
            },
            contentComponent() {//动态加载组件
                let a= this.$route.path;
                return require.context('../', true, /\.vue$/)(`.${a}/content.vue`);
            }
        },
        mounted() {

        },
        watch: {
            '$route'() {
                this.showTip = '';
            }
        },
        beforeDestroy() {

        },
        methods: {
            changeContentTitle(title){
                this.$emit('change-title', title);
            },
            changeContentTip(tips){
                this.showTip = tips;
            }
        }
    };
</script>