<template>
    <div>
        <head-top></head-top>
        <div class="main-container">
            <left></left>
            <div class="content">
                <h3 class="title">申请加入设置</h3>
                <ul class="accession_content">
                    <li>
                        <dt>个人信息</dt>
                        <div>
                            <dd @click="addPersonal(item.name)" v-for="item in personal" :key="personal">{{item.name}}</dd>
                            <dd>+</dd>
                        </div>
                    </li>
                    <li>
                        <dt>单位信息</dt>
                        <div>
                            <dd @click="addCompany" v-for="item in unit" :key="unit">{{item.name}}</dd>
                            <dd>+</dd>
                        </div>
                    </li>
                </ul>
                <p class="submit_btn"><button>提交</button></p>
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
                personal: [
                    {name: '姓名'},
                    {name: '性别'},
                    {name: '手机号'},
                    {name: '邮箱'},
                    {name: '微信号'},
                    {name: '籍贯'},
                    {name: '乡道'},
                    {name: '单身'}
                ],
                unit: [
                    {name: '单位'},
                    {name: '职务'},
                    {name: '地址'},
                    {name: '业务'},
                    {name: '学校'},
                    {name: '学院'},
                    {name: '专业'}
                ]
            }
        },
        components: {
            headTop,
            Left
        },
        methods: {
            addPersonal(e) {
                alert(e)
            }
        }
    }
</script>
<style lang="scss">
    @import "../../style/mini";
    .accession_content {
        background-color: #fff;
        min-height: 520px;
        display: flex;
        justify-content: center;
        padding-top: 100px;
        li {
            border: 1px solid $border;
            height: 284px;
            width: 386px;
            text-align: center;
            &:first-child {
                margin-right: 40px;
            }
            dt {
                background-color: #fbfbfb;
                border-bottom: 1px solid $border;
                height: 42px;
                line-height: 42px;
                font-size: 16px;
            }
            div {
                display: flex;
                flex-wrap: wrap;
                padding: 30px 30px 0;
                dd {
                    width: 72px;
                    height: 38px;
                    line-height: 38px;
                    border: 1px solid $border;
                    margin: 0 10px 10px 0;
                    border-radius: 5px;
                    font-size: 15px;
                    &:nth-child(4n) {
                        margin-right: 0
                    }
                    &:last-child {
                        font-size: 36px;
                        color: $blue;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .submit_btn {
        text-align: center;
        margin: 0;
        padding: 15px 0;
        background-color: #fff;
        border-top: 1px solid $border;
        button {
            width: 138px;
            height: 40px;
            line-height: 40px;
            background-color: $blue;
            color: #fff;
            border: 0;
            border-radius: 5px;
            cursor: pointer;
            outline: none
        }
    }
</style>