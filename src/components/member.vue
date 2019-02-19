<template>
    <div>
        <div class="member_content">
            <div class="member-header">
                <div class="member-header-left">
                    <h3>添加人员</h3>
                    <span>按拼音首字母排序，<a href="javascript:void(0)">单选</a></span>
                </div>
                <div class="member-header-right">
                    <input type="text" placeholder="请输入姓名" />
                    <button>搜索</button>
                </div>
            </div>
            <ul class="">
                <li v-for="(item, index) in sortList" 
                    :key="index"
                    @click="AddPeople(index)"
                    :class="{active:index==n}">
                    <img :src="item.imgUrl" :alt="item.name">
                    <img width="104" height="104" src="/static/member-choose.png" alt="">
                </li>
            </ul>
            <div class="member-footer">
                <button class="btn_cancel">取消</button>
                <button class="btn_ensure">确定</button>
                <button class="btn_added">新增</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                memberList: [
                    {
                        imgUrl: '../../static/member-list-img1.png',
                        name: '王静',
                        Findex: 'W'
                    }, {
                        imgUrl: '../../static/member-list-img2.png',
                        name: '宝蓝',
                        Findex: 'B'
                    }, {
                        imgUrl: '../../static/member-list-img3.png',
                        name: '曹月',
                        Findex: 'C'
                    }, {
                        imgUrl: '../../static/member-list-img4.png',
                        name: '董珍珠',
                        Findex: 'D'
                    }, {
                        imgUrl: '../../static/member-list-img5.png',
                        name: '鄂尔多',
                        Findex: 'E'
                    }
                ],
                n: 0
            }
        },
        methods:{
            AddPeople(index){
                this.n = index
            }
        },
        computed: {
            sortList(){
                return this.memberList.sort((a, b) => {
                    return a['Findex'].localeCompare(b['Findex'])
                })
            }
        }
    }
</script>
<style lang="scss">
    @import '../style/mini';
    
    .member_content {
        background-color: #fff;
        position: fixed;
        top: 0;bottom: 0;left: 0;right: 0;
        margin: auto;
        width: 70%;
        height: 80%;
        .member-header {
            height: 80px;
            border-bottom: 1px solid $border;
            display: flex;
            justify-content: space-between;
            .member-header-left {
                display: flex;
                h3 {
                    background-color: $blue;
                    padding: 0 40px;
                    color: #fff;
                    font-weight: 500;
                    margin: 0;
                    height: 40px;
                    line-height: 40px;
                    margin-top: 20px;
                }
                span {
                    font-size: 14px;
                    color: #8a8a8a;
                    display: inline-block;
                    margin-top: 43px;
                    margin-left: 15px;
                    a {
                        color: $blue
                    }
                }
            }
            .member-header-right {
                display: flex;
                padding-top: 20px;
                padding-right: 40px;
                input {
                    width: 190px;
                    height: 36px;
                    border: 1px solid $border;
                    border-radius: 5px;
                    font-size: 14px;
                    color: #bbb;
                    padding-left: 15px;
                }
                button {
                    width: 68px;
                    line-height: 39px;
                    height: 39px;
                    background-color: $blue;
                    color: #fff;
                    font-size: 14px;
                    border: 0;
                    border-radius: 5px;
                    margin-left: 10px;
                }
            }
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            padding: 30px;
            li {
                margin-right: 15px;
                position: relative;
                img:last-child {
                    display: none;
                    position: absolute;
                    top: -2px;left: -2px
                }
                &.active img {
                    display: block
                }
            }
        }
        .member-footer {
            display: flex;
            justify-content: center;
            position: absolute;
            bottom: 0;
            width: 100%;
            border-top: 1px solid $border;
            height: 60px;
            padding-top: 20px;
            button {
                width: 140px;
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                border: 0;
                border-radius: 5px;
                margin-right: 30px;
                &.btn_cancel {
                    background-color: #e4e8eb;
                    color: #80828d;
                }
                &.btn_ensure{
                    background-color: $blue;
                    color: #fff;
                }
                &.btn_added{
                    background-color: #fff;
                    color: $blue;
                    border: 1px solid $blue;
                    margin-right: 0;
                }
            }
        }
    }
</style>