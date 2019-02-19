<template>
    <div class="row">
        <ul class="nav-footer">
            <li>
                <dd v-for="item in hrefUrl" :key="hrefUrl">
                    <router-link :to="item.url" tag="a">{{item.title}}</router-link>
                </dd>
            </li>
            <li>Copyright © 2012-2019 Tencent. All Rights Reserved.</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                hrefUrl: [
                    {title: '关于队伍', url: ''},
                    {title: '服务协议', url: ''},
                    {title: '运营中心', url: ''},
                    {title: '队伍客服', url: ''},
                    {title: '联系邮箱', url: ''},
                    {title: '侵权投诉', url: ''}
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../style/mini';
    .row {
        height: 40px;
        width: 100%;
        line-height: 40px;
        position: absolute;
        bottom: 5px;left: 0;
        width: 100%;
        .nav-footer {
            padding: 0 40px;
            border-top: 1px solid #eaedef;
            display: flex;
            justify-content: space-between;
            li {
                display: flex;
                font-size: 14px;
                color: #999;
                font-family: '宋体';
                dd {
                    margin: 0;
                    a {
                        font-size: 14px;
                        color: #999;
                        border-right: 1px solid #999;
                        padding: 0 15px;
                        &:hover {
                            color: $blue
                        }
                    }
                    &:last-child a {
                        border: 0;
                    }
                }
            }
        }
    }
</style>
