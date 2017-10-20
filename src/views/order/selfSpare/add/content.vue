<template>
    <div>
        <h1>dawdwdawdw</h1>
        <p>{{currentId}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
            this.changeTitle('成功');
        },
        created() {
            this.$emit('change-tip', '<span>请根据实际情况配置每个师傅的提成规则，<i class="text-danger">配置完成后</i>，所服务的订单将按照设置的的提成方式计算师傅所得金额。</span>');
        },
        computed: {
            currentId() {
                return this.$route.query.PkId;
            }
        },
        methods:{
            changeTitle(title){
                this.$emit('change-title', title);
            }
        }
    }
</script>