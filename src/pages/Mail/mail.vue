<template>
    <div>
        <head-top></head-top>
        <div class="main-container">
            <left></left>
            <div class="content">
                <h3 class="title">通讯录列表（{{listnumber}}人）<button class="release_news mailexamine"><a href="/examine">新成员审核</a></button></h3>
                <div class="mail_content">
                    <ul class="mailtop">
                        <li>
                            <input type="text" placeholder="请输入内容" />
                            <button>搜索</button>
                        </li>
                        <li>
                            <button class="btn_delete">删除</button>
                            <button>导出Excel表格</button>
                        </li>
                    </ul> 
                    <table>
                        <tr bgcolor="#fafbfc">
                            <th width="5%" style=""><input type="checkbox" v-model="checkedAll" @change="changeState" /></th>
                            <th width="5%">姓名</th>
                            <th width="5%">性别</th>
                            <th width="10%">手机号</th>
                            <th width="10%">邮箱</th>
                            <th width="15%">公司名称</th>
                            <th width="10%">职务</th>
                            <th width="30%">地址</th>
                            <th width="10%">操作</th>
                        </tr>
                        <tr v-for="item in tableList" :key="table">
                            <td><input type="checkbox" v-model="checkModel" :value="item.name" /></td>
                            <td>{{item.name}}</td>
                            <td>{{item.sex}}</td>
                            <td>{{item.phone}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.company}}</td>
                            <td>{{item.job}}</td>
                            <td>{{item.address}}</td>
                            <td>
                                <button class="checkout">查看</button>
                            </td>
                        </tr>
                    </table>
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
                listnumber: '450',
                tableList: [
                    {
                        data: '2018',
                        name: '谢江虎',
                        sex: '男',
                        phone: '13716974540',
                        email: 'xhp_1001@163.com',
                        company: '北京至善至美文化传播有限公司',
                        job: '总经理',
                        address: '北京市昌平区珠江摩尔国际中心3号楼1单元708',
                    },
                    {
                        data: '2018',
                        name: '王丽',
                        sex: '女',
                        phone: '13838838438',
                        email: 'xhp_1001@163.com',
                        company: '北京大闪亮文化传播有限公司',
                        job: '客户经理',
                        address: '北京市昌平区珠江摩尔国际中心3号楼1单元708',
                    }
                ],
                checkedAll: false,
                checkModel: []
            }
        },
        watch: {
            checkModel: {
                handler (){
                    if( this.checkModel.length == this.tableList.length ) {
                        this.checkedAll = true
                    } else {
                        this.checkedAll = false
                    }
                },
                deep: true
            }
        },
        methods: {
            getUserData(){},
            changeState(item) {
                this.checkModel = []
                if( this.checkedAll == true ) {
                    this.tableList.forEach((value, index) => {
                        this.checkModel.push(value.name)
                    })
                }
            }
        },
        mounted: function () {
            this.getUserData()
        },
        components: {
            headTop,
            Left
        },
    }
</script>
<style lang="scss">
    @import "../../style/mini";
    .mailexamine a {
        color: #fff
    }
    .mail_content {
        background-color: #fff;
        .mailtop {
            display: flex;
            justify-content: space-between;
            padding: 24px 40px;
            & > li {
                display: flex;
                input {
                    border: 1px solid #e4e8eb;
                    border-radius: 5px;
                    color: #333;
                    font-size: 14px;
                    height: 37px;
                    width: 312px;
                    padding-left: 20px;
                    &::-webkit-input-placeholder {
                        color: #bbb;
                    }
                }
                button {
                    height: 40px;
                    line-height: 40px;
                    width: 66px;
                    background-color: $blue;
                    color: #fff;
                    font-size: 14px;
                    border: 0;
                    border-radius: 5px;
                    margin-left: 10px;
                    cursor: pointer;
                }
                .btn_delete {
                    width: 66px;
                    height: 40px;
                    line-height: 40px;
                    background-color: #fff;
                    border: 1px solid #e4e8eb;
                    color: #bbb;
                    &+button {
                        width: 140px;
                    }
                }
            }
        }
        table {
            width: 100%;
            border-spacing: 0px;
            tr {
                text-align: center;
                height: 48px;
                border-top: 1px solid #000;
                th {
                    font-size: 14px;
                    color: #101010;
                    font-weight: 400;
                    a {
                        margin-top: 0;
                        display: inline-block;
                        position: absolute;
                    }
                    input {
                        width: 20px;
                        height: 20px;
                        background-color: #fff;
                        -webkit-appearance:none;
                        border: 1px solid #ebebeb;
                        border-radius: 5px;
                        outline: none;
                        cursor: pointer;
                        &:checked {
                            background: url("/static/check_checked.png")no-repeat center;
                            background-size: 100;
                            border-radius: 5px;
                        }
                    }
                }
                td {
                    font-size: 14px;
                    color: #101010;
                    font-weight: 400;
                    input {
                        width: 20px;
                        height: 20px;
                        background-color: #fff;
                        -webkit-appearance:none;
                        border: 1px solid #ebebeb;
                        border-radius: 5px;
                        outline: none;
                        cursor: pointer;
                        &:checked {
                            background: url("/static/check_checked.png")no-repeat center;
                            background-size: 100;
                            border-radius: 5px;
                        }
                    }
                    button {
                        font-size: 14px;
                        width: 84px;
                        height: 30px;
                        line-height: 30px;
                        cursor: pointer;
                        outline: none;
                    }
                    .checkout {
                        color: #465ad2;
                        border: 1px solid #465ad2;
                        border-radius: 5px;
                        background-color: #fff;
                    }
                }
            }
        }
    }
</style>