<style scoped>
    .main {
        display: flex;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        /*text-align: center;*/
    }

    h2 {
        text-align: left;
    }
</style>
<template>
    <div class="main">
        <first-menu :firstData="firstData"
                    @select-first="changeTitle"
        ></first-menu>
        <router-view :menuData="menuData"
                     :contentTitle="contentTitle"
                     :activeFirstId="activeFirstId"
                     @change-title="changeTitle"
        ></router-view>
    </div>
</template>
<script>
    import util from './libs/util';
    import firstMenu from './views/public/firstMenu.vue';
    export default {
        components: {
            'first-menu': firstMenu,
        },
        watch: {

        },
        data () {
            return {
                menuData: [
                    {
                        PkId: '1',
                        name: '备件订单',
                        link: '/order/selfSpare'
                    },
                    {
                        PkId: '2',
                        name: '退货处理',
                        link: '/return/selfSpare'
                    },
                    {
                        PkId: '3',
                        name: '换货处理',
                        link: '/c/1/a'
                    },
                    {
                        PkId: '4',
                        name: '旧件返厂',
                        link: '/d/1'
                    },
                    {
                        PkId: '5',
                        name: '出入库管理',
                        link: '/e/1'
                    },
                    {
                        PkId: '6',
                        name: '库存管理',
                        link: '/f/1'
                    },
                    {
                        PkId: '7',
                        name: '备件商品',
                        link: '/g/1'
                    },
                    {
                        PkId: '8',
                        name: '备件市场',
                        link: '/h'
                    },
                    {
                        PkId: '11',
                        ParentId: '1',
                        name: '自营备件单',
                        link: '/order/selfSpare'
                    },
                    {
                        PkId: '12',
                        ParentId: '1',
                        name: '品牌商备件单',
                        link: '/order/brandsSpare'
                    },
                    {
                        PkId: '13',
                        ParentId: '1',
                        name: '师傅补库单',
                        link: '/order/masterSpare'
                    },
                    {
                        PkId: '14',
                        ParentId: '1',
                        name: '网点补库单',
                        link: '/order/applySpare'
                    },
                    {
                        PkId: '21',
                        ParentId: '2',
                        name: '网点自有备件',
                        link: '/return/selfSpare'
                    },
                    {
                        PkId: '22',
                        ParentId: '2',
                        name: '品牌商备件',
                        link: '/return/brandsSpare'
                    }
                ],
                contentTitle:'',
                activeFirstId:''
            }
        },
        computed: {
            firstData() {
                return this.menuData.filter((v, i) => !v.ParentId);
            },
        },
        beforeDestroy() {

        },
        created: function(){
            this.$Spin.show();
        },
        methods: {
            changeTitle(title,id){
                if(id){this.activeFirstId=id};
                this.contentTitle=title;
            }
        }
    };
</script>