<template>
    <div>
        <head-top></head-top>
        <div class="main-container">
            <left></left>
            <div class="content">
                <h3 class="title"><a href="/mail">通讯录列表 ></a> 新成员审核</h3>
                <table class="examine_content">
                    <tr bgcolor="#fafbfc">
                        <th width="5%">姓名</th>
                        <th width="5%">性别</th>
                        <th width="10%">手机号</th>
                        <th width="10%">邮箱</th>
                        <th width="15%">公司名称</th>
                        <th width="7%">职务</th>
                        <th width="30%">地址</th>
                        <th width="18%">操作</th>
                    </tr>
                    <tr v-for="(item, index) in exmineList" v-bind:key="index">
                        <td>{{item.name}}</td>
                        <td>{{item.sex}}</td>
                        <td>{{item.phone}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.company}}</td>
                        <td>{{item.job}}</td>
                        <td>{{item.address}}</td>
                        <td>
                            <img @click="deleteList(index)" src="@/assets/delete_icon.png" alt="">
                            <button class="checkout">查看</button>
                            <button class="agree">同意</button>
                        </td>
                    </tr>
                </table>
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
                exmineList: [
                    {
                        name: '谢江虎',
                        sex: '男',
                        phone: '13716974540',
                        email: 'xhp_1001@163.com',
                        company: '北京至善至美文化传播有限公司',
                        job: '总经理',
                        address: '北京市昌平区珠江摩尔国际中心3号楼1单元708',
                    },
                    {
                        name: '王丽',
                        sex: '女',
                        phone: '13838838438',
                        email: 'xhp_1001@163.com',
                        company: '北京大闪亮文化传播有限公司',
                        job: '客户经理',
                        address: '北京市昌平区珠江摩尔国际中心3号楼1单元708',
                    }
                ]
            }
        },
        components: {
            headTop,
            Left
        },
        methods: {
            deleteList(index){
                var message = confirm('您确定要删除吗?')
                if( message == true) {
                    this.exmineList.splice(index,1)
                } else {
                    return false
                }
            }
        }
    }
</script>
<style lang="scss">
    @import "../../../style/mini";
    .examine_content {
        width: 100%;
        border-spacing: 0px;
        background-color: #fff;
        tr {
            text-align: center;
            height: 48px;
            border-top: 1px solid #000;
            &:hover td img {
                opacity: 1;
            }
            th {
                font-size: 14px;
                color: #101010;
                font-weight: 400;
                &:last-child {
                    border-left: 1px solid #e4e8eb;
                }
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
                &:last-child {
                    border-left: 1px solid #e4e8eb;
                }
                img {
                    opacity: 0;
                    cursor: pointer;
                }
                button {
                    font-size: 14px;
                    width: 84px;
                    height: 30px;
                    line-height: 30px;
                    cursor: pointer;
                    outline: none;
                    margin-left: 10px;
                }
                .checkout {
                    color: #465ad2;
                    border: 1px solid #465ad2;
                    border-radius: 5px;
                    background-color: #fff;
                }
                .agree {
                    color: #fff;
                    border-radius: 5px;
                    background-color: #465ad2;
                    border: 0;
                }
            }
        }
    }
</style>