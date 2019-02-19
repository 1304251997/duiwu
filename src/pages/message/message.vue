<template>
    <div>
        <head-top></head-top>
        <div class="main-container">
            <left></left>
            <div class="content">
                <h3 class="title">消息</h3>
                <div class="message-content">
                    <ul class="message-content-left">
                        <vue-scroll :ops="ops" style="width:100%;height:650px">
                            <li>
                                <dt>消息列表</dt>
                                <dd v-for="(item, index) in messageList" 
                                    :key="index"
                                    @click="selectitem(item.typeId, index)" 
                                    :class="[index==nowIndex?'active':'']">
                                    <span>{{item.title}}</span>
                                    <a href="javascript:void(0)">{{item.time}}</a>
                                </dd>
                            </li>
                        </vue-scroll>
                    </ul>
                    <div class="message-content-right">
                        <div v-for="(arr, index) in contentList" :key="index">
                            <h3>{{arr.title}}</h3>
                            <span>{{arr.time}}</span>
                            <p>{{arr.content}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import headTop from "@/components/header"
    import Left from "@/components/left"
    export default {
        name: "car",
        mounted(){
    		this.selectitem(this.typeId, this.nowIndex)
        },
        data(){
            return {
                messageList: [
                    {title: '1月28日，系统更新通知', time: '1月22日', typeId:'1'},
                    {title: '1月28日，系统更新通知', time: '1月22日', typeId:'2'},
                    {title: '1月28日，系统更新通知', time: '1月22日', typeId:'3'},
                    {title: '1月28日，系统更新通知', time: '1月22日', typeId:'4'},
                    {title: '1月28日，系统更新通知', time: '1月22日', typeId:'5'},
                    {title: '1月28日，系统更新通知', time: '1月22日', typeId:'6'},
                    {title: '1月28日，系统更新通知', time: '1月22日', typeId:'7'},
                    {title: '1月28日，系统更新通知', time: '1月22日', typeId:'8'},
                    {title: '1月28日，系统更新通知', time: '1月22日', typeId:'9'},
                    {title: '1月28日，系统更新通知', time: '1月22日', typeId:'10'},
                    {title: '1月28日，系统更新通知', time: '1月22日', typeId:'11'},
                    {title: '1月28日，系统更新通知', time: '1月22日', typeId:'12'},
                    {title: '1月28日，系统更新通知', time: '1月22日', typeId:'13'},
                    {title: '1月28日，系统更新通知', time: '1月22日', typeId:'14'}
                ],
                contentList: [
                    {title: '1月28日，系统更新通知', time: '1月22日', content: '把阿布卡萨不抵抗的我哈师大科几啊数据库的很快就爱上卡上卡上大剑喀什的空间暗杀空间的好看见哈卡'}
                ],
                ops: {
                    vuescroll: {},
                    scrollPanel: {},
                    rail: {
                        keepShow:true
                    },
                    bar: {
                        hoverStyle: true,
                        onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
                        background: '#e4e8eb',
                    }
                },
                nowIndex: 0
            }
        },
        components: {
            headTop,
            Left
        },
        methods: {
            selectitem(typeId, index){
                this.nowIndex = index
            }
        }
    }
</script>
<style lang="scss">
    @import "../../style/mini";
    
    .message-content {
        background-color: #fff;
        border: 1px solid $border;
        border-radius: 5px;
        height: 650px;
        display: flex;
        .message-content-left {
            width: 30%;
            border-right: 1px solid $border;
            li dt {
                padding: 20px 0 20px 40px;
                border-bottom: 1px solid $border;
                font-size: 18px;
                color: #222
            }
            li dd {
                border-bottom: 1px solid $border;
                font-size: 14px;
                color: #353535;
                margin: 0;
                padding: 15px 20px 15px 40px;
                display: flex;
                justify-content: space-between;
                span {
                    cursor: pointer;
                }
                a {
                    color: #999;
                    cursor: default
                }
                &:last-child {
                    border: 0
                }
                &:hover {
                    background-color: #f6f8f9;
                }
                
            }
        }
        .message-content-right {
            width: 100%;
            padding: 40px 54px;
            h3 {
                margin: 0 0 15px 0;
                font-size: 24px;
                color: #353535;
                font-weight: 500
            }
            span {
                font-size: 14px;
                color: #999
            }
            p {
                font-size: 14px;
                color: #353535;
                margin: 20px 0 0 0;
                line-height: 1.5
            }
        }
    }
</style>