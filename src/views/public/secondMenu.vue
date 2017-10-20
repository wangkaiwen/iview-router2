<template>
    <div>
        <Menu ref="second" mode="horizontal"
              :active-name="this.$route.path"
        >
            <Menu-item :name="item.link"
                       v-for="(item, index) in secondData"
                       :key="index"
            >
                <router-link :to="item.link" tag="p">{{item.name}}</router-link>
            </Menu-item>
        </Menu>
    </div>
</template>
<script>
    export default {
        props: [
            'secondData',
        ],
        data () {
            return {

            }
        },
        updated() {
            if(this.$refs.second){
                this.$refs.second.updateActiveName()
            };
        },
        methods: {

        }
    };
</script>