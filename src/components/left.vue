<template>
    <div class="left-container">
        <ul>
            <li>
                <router-link to="/" tag="dt"><img src="@/assets/home_big_icon.png" alt="">首页</router-link>
            </li>
            <li>
                <router-link to="/Brief" tag="dt"><img src="@/assets/function_big_icon.png" alt="">功能</router-link>
                <div>
                    <dd v-for="(item, index) in leftList" 
                    :key="left"
                    @click="setPriceFilter(index)" v-bind:class="{'cur':priceChecked==index}">
                        <router-link :to="item.url" tag="a">{{item.name}}</router-link>
                    </dd>
                </div>
            </li>
            <li>
                <router-link to="/Privilege" tag="dt"><img src="@/assets/management_big_icon.png" alt="">权限管理</router-link>
            </li>
            <li>
                <router-link to="/Data" tag="dt"><img src="@/assets/data_big_icon.png" alt="">数据</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'App',
    data(){
        return {
            leftList: [
                {name: '简介', url: '/Brief'},
                {name: '组织架构', url: '/Framework'},
                {name: '新闻', url: '/News'},
                {name: '活动', url: '/Activity'},
                {name: '通讯录', url: '/Mail'},
                {name: '通知', url: '/Notice'},
                {name: '申请加入设置', url: '/Accession'},
                {name: '会费标准', url: '/Membership'}
            ],
            priceChecked:'all'
        }
    },
    mounted(){
        this.setPriceFilter()
    },
    methods: {
        setPriceFilter(index){
            this.priceChecked = index;
        },
    }
}
</script>
<style lang="scss">

    li {
        list-style: none
    }
    a {
        text-decoration: none
    }
    .left-container {
        width: 250px;
        ul {
            margin: 0;
            li {
                dt {
                    font-size: 20px;
                    color: #101010;
                    margin-bottom: 20px;
                    cursor: pointer;
                    padding-left: 68px;
                    position: relative;
                    img {
                        position: absolute;
                        left: 34px;
                        top: 0;bottom: 0;
                        margin: auto
                    }
                }
                div dd {
                    margin: 0;
                    padding-left: 76px;
                    height: 36px;
                    line-height: 36px;
                    cursor: pointer;
                    &:hover {
                        background-color: #eaedef;
                        a {
                            color: #465ad2;
                        }
                    }
                    a {
                        cursor: pointer;
                        font-size: 16px;
                        color: #101010;
                        display: inline-block;
                        width: 100%;
                    }

                    &.active {
                        background-color: #eaedef;
                        a {
                            color: #465ad2
                        }
                    }
                }
            }
        }
    }
</style>