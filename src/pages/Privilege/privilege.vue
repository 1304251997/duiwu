<template>
    <div>
        <head-top></head-top>
        <div class="main-container">
            <left></left>
            <div class="content">
                <h3 class="title">权限管理</h3>
                <div class="privilege_content">
                    <h3>管理员设置<span>{{useradmin}}个管理员</span></h3>
                    <ol>
                        <li>
                            <a href="javascript:void(0)"><img width="80" height="80" src="/static/img/avatar_logo.3eca711.png" alt=""></a>
                            <div>
                                <h3>薛子龙</h3>
                                <dt>超级管理员</dt>
                                <dd>13716974540</dd>
                            </div>
                            <button>转让</button>
                        </li>
                    </ol>
                    <ul>
                        <li v-for="(item, index) in items" :key="index">
                            <a href="javascript:void(0)"><img width="80" height="80" :src="item.imgUrl" alt=""></a>
                            <div>
                                <h3>{{item.userName}}</h3>
                                <dt>{{item.status}}</dt>
                                <dd>{{item.phone}}</dd>
                            </div>
                            <button>转让</button>
                        </li>
                        <li class="addAdmin" @click="getManager">
                            <a href="javascript:void(0)"><img src="/static/update_file.png" alt=""></a>
                            <br>
                            <p>添加管理员</p>
                        </li>
                    </ul>
                </div>
                <div class="management_authority">
                    <h3>非成员访问权限</h3>
                    <p>注释：选择并确定后，非通讯录成员无法访问相关功能。</p>
                    <ul>
                        <li :data-index="index" v-bind:class="{active:arr.check}" @click="tabActive(index)" v-for="(arr, index) in authList" :key="index">{{arr.title}}</li>
                    </ul>
                </div>
                <p class="submit_btn"><button>确定</button></p>

                <div class="addMember" @click="addMember()" v-show="isShow">
                    <del-member></del-member>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import headTop from "@/components/header";
    import Left from "@/components/left";
    import delMember from "@/components/member";
    export default {
        data(){
            return {
                useradmin: '5',
                items: [
                    {
                        imgUrl: '../../static/img/avatar_logo.3eca711.png',
                        userName: '大白',
                        status: '普通管理员',
                        phone: '13838838438'
                    },{
                        imgUrl: '../../static/img/avatar_logo.3eca711.png',
                        userName: '狗剩',
                        status: '普通管理员',
                        phone: '13838838438'
                    },{
                        imgUrl: '../../static/img/avatar_logo.3eca711.png',
                        userName: '狗剩',
                        status: '普通管理员',
                        phone: '13838838438'
                    }
                ],
                authList: [
                    {title: '简介', check: false},
                    {title: '组织架构', check: false},
                    {title: '活动', check: false},
                    {title: '新闻', check: false},
                    {title: '通讯录', check: false},
                    {title: '通知', check: false},
                    {title: '分享码', check: false},
                    {title: '申请加入', check: false}
                ],
                arr: [],
                isShow: false
            }
        },
        components: {
            headTop,
            Left,
            delMember
        },
        methods: {
            getManager(){
                this.isShow = !this.isShow
            },
            tabActive: function (i) {
                this.authList[i].check = !this.authList[i].check
            },
            addMember(){
                // let isAlert = document.querySelector('.member_content')
                // if(isAlert) {
                //     if(!isAlert.contains(event.target)) {
                //         this.isShow = false
                //     }
                // }
                // this.isShow = false
            }
        }
    }
</script>
<style lang="scss">
	@import "../../style/mini";

    .privilege_content {
        background-color: #fff;
        border-radius: 5px 5px 0 0;
        padding: 40px 40px 20px 40px;
        border-bottom: 1px solid $border;
        & > h3 {
            font-weight: 500;
            margin-top: 0;
            span {
                font-size: 14px;
                color: #f2830c;
                margin-left: 20px;
            }
        }
        ol, ul {
            display: flex;
            flex-wrap: wrap;
            li {
                width: 21%;
                display: flex;
                justify-content: space-between;
                border: 1px solid $border;
                border-radius: 5px;
                padding: 17px;
                margin-right: 1%;
                margin-bottom: 20px;
                &:nth-child(4n) {
                    margin-right: 0;
                }
                &.addAdmin {
                    text-align: center;
                    display: inline-block;
                    padding-top: 30px;
                    cursor: pointer;
                    p {
                        margin: 0;
                        font-size: 14px;
                        color: $blue
                    }
                }
                h3 {
                    font-weight: 500;
                    font-size: 18px;
                    color: #666;
                    margin: 5px 0;
                }
                dt {
                    color: #f2830c;
                    font-size: 14px;
                }
                dd {
                    color: #666;
                    font-size: 14px;
                    margin: 10px 0 0 0
                }
                button {
                    border: 1px solid $border;
                    background-color: #fff;
                    border-radius: 5px;
                    color: #666;
                    font-size: 14px;
                    height: 35px;
                    width: 50px;
                    cursor: pointer;
                    margin-top: 25px;
                }
            }
        }
    }
    .management_authority {
        background-color: #fff;
        border-radius: 0 0 5px 5px;
        padding: 50px 40px;
        & > h3 {
            font-weight: 500;
            margin: 0;
            span {
                font-size: 14px;
                color: #f2830c;
                margin-left: 20px;
            }
        }
        & > p {
            margin: 15px 0 0 0;
            font-size: 14px;
            color: #666;
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            margin-top: 25px;
            padding-bottom: 80px;
            li {
                border: 1px solid $border;
                border-radius: 5px;
                width: 110px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                font-size: 14px;
                color: #666;
                margin-right: 15px;
                cursor: pointer;
                &.active{
                    color: $blue;
                    border: 1px solid $blue;
                }
            }
        }
    }
    .submit_btn {
        text-align: center;
        margin: 0 0 80px 0;
        padding: 15px 0;
        background-color: #fff;
        border-top: 1px solid #ebebeb;
        button {
            width: 138px;
            height: 40px;
            line-height: 40px;
            background-color: #465ad2;
            color: #fff;
            border: 0;
            border-radius: 5px;
            cursor: pointer;
            outline: none;
        }
    }
    .addMember {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 80px;left: 0;
        background-color: rgba($color: #000000, $alpha: 0.3);
    }
</style>