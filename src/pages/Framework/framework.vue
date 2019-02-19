<template>
    <div>
        <head-top></head-top>
        <div class="main-container">
            <left></left>
            <div class="content">
                <h3 class="title">组织架构</h3>
                <div class="workbody">
                    <div class="workbody-left">
                        <h3>职务</h3>
                        <ul class="joblist">
                            <a v-for="(item, index) in joblist" 
                            :key="index"
                            v-on:click="job(index)" 
                            v-bind:class="{active:index==jobSpan}">
                                <li>
                                    <img width="10" height="15" src="../../assets/stick_icon.png" alt="" style="margin: 4px 15px 0 0;">
                                    <a>{{item.jobname}}</a>
                                </li>
                                <li>
                                    <img width="20" height="20" src="../../assets/edit_icon.png" alt="">
                                    <img width="17" height="18" src="../../assets/close_icon.png" alt="" style="margin: 2px 0 0 10px">
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div class="workbody-center">
                        <h3>姓名</h3>
                        <ul class="namelist">
                            <a v-for="(array, index) in namelist" 
                            :key="index"
                            v-on:click="name(index)" 
                            v-bind:class="{isactive:index==nameSpan}">
                                <li>
                                    <img width="10" height="15" src="../../assets/stick_icon.png" alt="" style="margin: 4px 15px 0 0;">
                                    <a>{{array.name}}</a>
                                </li>
                                <li>
                                    <img width="17" height="18" src="../../assets/close_icon.png" alt="" style="margin: 2px 0 0 10px">
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div class="workbody-right">3</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import headTop from '@/components/header'
    import Left from '@/components/left'
    export default {
        data(){
            return{
                joblist: [
                    {
                        jobname: '名誉会长'
                    }, {
                        jobname: '会长'
                    },{
                        jobname: '执行会长'
                    },{
                        jobname: '副会长'
                    },{
                        jobname: '理事'
                    },{
                        jobname: '会员'
                    }
                ],
                namelist: [
                    {
                        name: '王大柱'
                    }, {
                        name: '二狗'
                    },{
                        name: '狗剩'
                    },{
                        name: '大锤'
                    },{
                        name: '石头'
                    }
                ],
                jobSpan: '-1',
                nameSpan: '-1'
            }
        },
        components: {
            headTop,
            Left
        },
        methods: {
            job:function( index ){
                this.jobSpan = index
            },
            name:function( index ){
                this.nameSpan = index
            }
        }
    }
</script>
<style lang="scss">
    @import '../../style/mini';
    .workbody {
        background-color: #fff;
        border: 1px solid #ebebeb;
        border-radius: 5px;
        min-height: 650px;
        display: flex;
        &>div {
            padding-top: 30px
        }
        .workbody-left {
            width: 226px;
            border-right: 1px solid #ebebeb;
            background-color: #fbfbfb;
            h3 {
                font-size: 20px;
                font-weight: 500;
                color: #fff;
                background-color: $blue;
                width: 75%;
                padding: 10px 0;
                margin: 0 0 10px 0;
                text-align: center
            }
            .joblist {
                padding: 0 15px;
                >a {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    margin: 30px 0 0 0;
                    cursor: pointer;
                    &.active a {
                        color: $blue;
                    }
                    &.active img {
                        opacity: 1;
                    }
                    &:hover a {
                        color: $blue
                    }
                }
                li {
                    display: flex;
                    justify-content: space-around;
                    img {
                        opacity: 0;
                    }
                    a {
                        display: inline-block;
                        width: 100%;
                        color: #222;
                        font-size: 18px;
                    }
                }
            }
        }
        .workbody-center {
            width: 166px;
            border-right: 1px solid #ebebeb;
            background-color: #fbfbfb;
            h3 {
                font-size: 20px;
                font-weight: 500;
                color: #fff;
                background-color: $blue;
                width: 90%;
                padding: 10px 0;
                margin: 0 0 10px 0;
                text-align: center
            }
            .namelist {
                padding: 0 15px;
                >a {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    margin: 30px 0 0 0;
                    cursor: pointer;
                    &.isactive a {
                        color: $blue;
                    }
                    &.isactive img {
                        opacity: 1;
                    }
                    &:hover a {
                        color: $blue
                    }
                }
                li {
                    display: flex;
                    justify-content: space-around;
                    img {
                        opacity: 0;
                    }
                    a {
                        display: inline-block;
                        width: 100%;
                        color: #222;
                        font-size: 18px;
                    }
                }
            }
        }
    }
</style>