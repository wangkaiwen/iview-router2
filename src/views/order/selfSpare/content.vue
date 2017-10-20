<template>
    <div>
        <!-- 三级菜单 -->
        <third-menu :thirdData="thirdData"
                    @selectThird="selectThird"
        >
            <!-- 右侧功能按钮 -->
            <Button type="primary" @click="add" style="width:100px">添加备件</Button>
        </third-menu>
        <!-- 查询框 -->
        <query></query>
        <!-- 表格 -->
        <Table border :columns="columns7" :data="data6"></Table>
    </div>
</template>
<script>
    import query from './query.vue';
    import thirdMenu from '../../public/thirdMenu.vue';
    export default {
        name:'content',
        data () {
            return {
                thirdData: [
                    {
                        name: '全部',
                        status: '全部'
                    },
                    {
                        name: '待审核',
                        status: '自营'
                    },
                    {
                        name: '待发放',
                        status: '自营'
                    },
                    {
                        name: '已发放',
                        status: '自营'
                    },
                    {
                        name: '已完成'
                    },
                    {
                        name: '已拒绝'
                    }
                ],

                columns7: [
                    {
                        title: '姓名',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('a', {
                                    props: {

                                    },
                                    class: 'text-primary',
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('a', {
                                    props: {

                                    },
                                    class: 'text-danger',
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        },
        components:{
            query,thirdMenu
        },
        watch:{

        },
        methods: {
            show (index) {
                this.$Modal.confirm({
                    width:800,
                    height:600,
                    title: '用户信息',
                    content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            selectThird(item){
                console.log(item)
            },
            add() {
                console.log('添加');
                this.$router.push({
                    path: this.$route.path + '/add' + '?PkId=a132'
                });
            }

        }
    }
</script>
