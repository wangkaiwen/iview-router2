<style>
    .ivu-menu-vertical div.ivu-menu-item-group-title {
        border-bottom: 1px solid #ddd;
        color: #3c3c3c;
        font-weight: 700;
        font-size: 14px;
    }
</style>
<template>
    <Menu :active-name="activeFirstId"
          style="width: 180px;height: 100%;flex: none"
         @on-select="selectedFirst"
    >
        <Menu-group title="备件管理">
            <Menu-item v-for="(item,index) in firstData"
                       :name="item.PkId"
                       :key="index"
            >
                {{item.name}}
            </Menu-item>
        </Menu-group>
    </Menu>
</template>
<script>
    export default {
        name: 'first-menu',
        props: [
            'firstData','contentTitle'
        ],
        data (){
            return {
                activeFirstId:''
            }
        },
        created: function(){
            var preLink=this.firstData.map((item)=>item.link.split('/')[1]);
            var index=preLink.indexOf(window.location.pathname.split('/')[1]);
            if(index<0)index=0;
            this.$emit('select-first', this.firstData[index].name,this.firstData[index].PkId);
            this.activeFirstId=this.firstData[index].PkId
        },
        methods: {
            selectedFirst: function (id) {
                var current = this.firstData.find((v) => v.PkId == id);
                this.$router.push({path: current.link});
                this.$emit('select-first', current.name,id);
            }
        }

    }
</script>