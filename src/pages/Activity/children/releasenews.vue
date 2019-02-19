<template>
    <div>
        <head-top></head-top>
        <div class="main-container">
            <left></left>
            <div class="content">
                <h3 class="title"><a href="/mail">活动 ></a> 发布活动</h3>
                <div class="news_content">
                    <div class="main-left">
                        <div class="choose-poster">
                            <img class="choose-img" src="/static/update_file.png" alt="">
                            <p>选择海报</p>
                        </div>
                        <ul>
                            <li>
                                <span>主题：</span>
                                <input type="text" placeholder="请输入主题" />
                            </li>
                            <li>
                                <span>时间：</span>
                                <el-time-select
                                    v-model="value1"
                                    :picker-options="{
                                        start: '08:30',
                                        step: '00:15',
                                        end: '18:30'
                                    }"
                                    placeholder="选择时间">
                                </el-time-select>
                                至
                                <el-time-select
                                    v-model="value2"
                                    :picker-options="{
                                        start: '08:30',
                                        step: '00:15',
                                        end: '18:30'
                                    }"
                                    placeholder="选择时间">
                                </el-time-select>
                            </li>
                            <li>
                                <span>地址：</span>
                                <input type="text" placeholder="请输入地址" />
                            </li>
                            <li>
                                <span></span>
                                <input type="text" placeholder="请输入详细地址信息" />
                            </li>
                            <li>
                                <span>费用：</span>
                                <input type="text" placeholder="如果免费，请输入0" />
                            </li>
                            <li>
                                <span>报名：</span>
                                <ol>
                                    <div v-for="(item, index) in toexamine" :key="index">
                                        <a :class="{active:index==n}" @click="chooseExamine(index)" href="javascript:void(0)"></a>
                                        <span>{{item.name}}</span>
                                    </div>
                                </ol>
                            </li>
                        </ul>
                    </div>
                    <div class="main-right">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import headTop from "@/components/header";
    import Left from "@/components/left";
    export default {
        data(){
            return {
                value1: '',
                value2: '',
                toexamine: [
                    {name: '需要审核'},
                    {name: '不需要审核'}
                ],
                n: 0
            }
        },
        components: {
            headTop,
            Left
        },
        methods:{
            chooseExamine(index){
                this.n = index
            }
        },
        mounted(){
            
        }
    }
</script>
<style lang="scss">
    @import "../../../style/mini";
    .news_content {
        background-color: #fff;
        padding: 38px;
        border-radius: 5px;
        display: flex;
        .main-left {
            width: 33%;
            border-right: 1px solid $border;
            .choose-poster {
                border: 1px dashed $border;
                border-radius: 5px;
                background-color: #fbfbfb;
                width: 88%;
                height: 220px;
                text-align: center;
                .choose-img {
                    margin-top: 80px;
                }
                p {
                    margin: 0;padding: 0;
                    font-size: 14px;
                    color: $blue
                }
            }
            ul {
                margin-top: 25px;
                li {
                    overflow: hidden;
                    margin-bottom: 10px;
                    & > span {
                        width: 56px;
                        display: inline-block;
                        font-size: 16px;
                        color: #333;
                        float: left;
                        height: 40px;
                        line-height: 40px;
                    }
                    & > input[type='text'] {
                        height: 40px;
                        border: 1px solid $border;
                        width: 72%;
                        padding-left: 20px;
                        border-radius: 5px
                    }
                    & > div {
                        width: 35.5%;
                        input {
                            padding: 0 20px 0 30px;
                        border: 1px solid $border;
                        }
                    }
                    ol {
                        float: left;
                        display: flex;
                        line-height: 40px;
                        div {
                            margin-right: 28px;
                            line-height: 40px;
                            display: flex;
                            a {
                                width: 20px;
                                height: 20px;
                                border: 1px solid $border;
                                border-radius: 5px;
                                display: inline-block;
                                margin-top: 8px;
                                margin-right: 5px;
                                &.active {
                                    background: url(/static/check_checked.png) 0 0 no-repeat
                                }
                            }
                            span {
                                font-size: 14px;
                                color: #666
                            }
                        }
                    }
                }
            }
        }
    }
</style>