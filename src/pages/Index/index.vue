<template>
    <div>
        <head-top></head-top>
        <div class="main-container">
            <left></left>
            <div class="content">
                <div class="home-top">
                    <a>数据汇总</a>
                    <ul>
                        <li>
                            <dt>25</dt>
                            <dd>今日新增会员</dd>
                        </li>
                        <li>
                            <dt>548</dt>
                            <dd>会员总数</dd>
                        </li>
                        <li>
                            <dt>25461</dt>
                            <dd>总浏览次数</dd>
                        </li>
                        <li>
                            <dt>15</dt>
                            <dd>新闻总条数</dd>
                        </li>
                        <li>
                            <dt>1542</dt>
                            <dd>活动次数</dd>
                        </li>
                    </ul>
                </div>
                <!-- <div class="flex">
                    <a v-for="(item, index) in array" :key="array" v-on:click="kouwei(index)" v-bind:class="{active:index==kouweiSpan}">
                        {{ item.author }}
                    </a>
                </div> -->
                <!-- 新申请成员 -->
                <div class="home-newsapply">
                    <h3>新申请会员</h3>
                    <table>
                        <tr bgcolor="#fafbfc">
                            <th width="10%">时间</th>
                            <th width="5%">姓名</th>
                            <th width="5%">性别</th>
                            <th width="10%">电话</th>
                            <th width="15%">公司名称</th>
                            <th width="10%">职务</th>
                            <th width="25%">地址</th>
                            <th width="20%">操作</th>
                        </tr>
                        <tr v-for="(item, index) in tableList" :key="index">
                            <td>{{item.data}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.sex}}</td>
                            <td>{{item.phone}}</td>
                            <td>{{item.company}}</td>
                            <td>{{item.job}}</td>
                            <td>{{item.address}}</td>
                            <td>
                                <button class="viewdetails">查看详情</button>
                                <button class="pass">通过</button>
                            </td>
                        </tr>
                    </table>
                </div>
                <!-- 底部三个分类 -->
                <div class="tablist">
                    <div class="notice">
                        <h3><span>通知</span>2月18日录制新年拜年视频</h3>
                        <a><span>发布：1月25日</span><span>阅读：2541次</span></a>
                        <p>录制视频时间定在2月18日，请各位参与录制的老乡准时参加，穿正装，录制视频时间定在2月18日，请各位参与录制的老乡准时参加，穿正装，录制视频时间定在2月18日</p>
                    </div>
                    <div class="meetinglist">
                        <ul>
                            <li><img width="100%" src="@/assets/home-list.png" alt=""></li>
                            <li>
                                <dt>北京娄底企业商会成立大会暨会员大会</dt>
                                <dd>
                                    <a>北京娄底企业商会</a>
                                    <a>12-31<span>六</span></a>
                                </dd>
                            </li>
                        </ul>
                        <p>
                            <a>阅读：<b style="color: #465ad2;">2541</b>次</a>
                            <a>报名：<b style="color: #e71340;">245</b>人</a>
                        </p>
                    </div>
                    <div class="newslist">
                        <ul>
                            <li v-for="(array, index) in newslist" :key="index">
                                <router-link to="" tag="a">{{array.message}}</router-link>
                                <span><img src="@/assets/see_icon.png" alt="">2688</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import headTop from '@/components/header'
    import Left from '@/components/left'
    import axios from 'axios'
    export default {
        data(){
            return {
                array: [
                    {author: 'Jack'},
                    {author: 'Tom'},
                    {author: 'Money'},
                    {author: 'Vue'},
                    {author: 'React'}
                ],
                tableList: [
                    {
                        data: '2018-02-12',
                        name: '谢江虎',
                        sex: '男',
                        phone: '13716974540',
                        company: '北京至善至美文化传播有限公司',
                        job: '总经理',
                        address: '北京市昌平区珠江摩尔国际中心3号楼1单元708',
                    },
                    {
                        data: '2018-02-12',
                        name: '王丽',
                        sex: '女',
                        phone: '13838838438',
                        company: '北京大闪亮文化传播有限公司',
                        job: '客户经理',
                        address: '北京市昌平区珠江摩尔国际中心3号楼1单元708',
                    }
                ],
                newslist: [
                    {message: '2月18日录制新年拜年视频'},
                    {message: '外贸 | 海关统计数据可以在线查了！附详细方法'},
                    {message: '利好 | 对小微企业推出新的普惠性减税措施'},
                    {message: '首届中国（广西）老品牌博览会即将举行'}
                ],
                checkArr: [],
                kouweiSpan: '-1'
            }
        },
        created: function () {
            this.homeIndex()
        },
        components: {
            headTop,
            Left,
        },
        methods: {
            kouwei:function( index ){
                this.kouweiSpan = index
            },
            homeIndex: function () {
                axios({
                    url: 'https://quanzi.bjzhishanzhimei.com/hm/store/index',
                    method:'post',
                    // changeOrigin: true,     //跨域
                    data:{
                        group_id: '21',
                        limit: '1',
                        token: '5a36dfbdbb03d128f60b69f1728cab31'
                    },
                })
                .then(function(response) {
                    console.log(response)
                    alert(1122)
                })
                .catch(function(error) {
                    console.log(error)
                })
            }
            
        }
    }
</script>
<style lang="scss">
    @import '../../style/mini';

    .flex {
        display: flex;
        margin-top: 15px;
        a {
            margin-right: 15px;
            cursor: pointer;
        }
        .active {
            color: #d00
        }
    }
    .main-container {
        display: flex;
        // width: 1200px;
        margin: 40px auto 0;
        // padding: 0 40px;
        .content {
            width: 100%;
            .home-top {
                background-color: #fff;
                padding: 20px 0;
                display: flex;
                border: 1px solid #ebebeb;
                border-radius: 5px;
                a {
                    line-height: 6;
                    width: 20%;
                    display: inline-block;
                    border-right: 1px solid #ccc;
                    font-size: 24px;
                    color: #101010;
                    text-align: center
                }
                ul {
                    margin: 0;padding: 30px 0;
                    display: flex;
                    width: 100%;
                    justify-content: space-around;
                    li {
                        text-align: center;
                        dt {
                            font-size: 48px;
                            color: $blue;
                            font-weight: bold
                        }
                        dd {
                            margin: 10px 0 0 0;
                            font-size: 16px;
                            color: #101010
                        }
                    }
                }
            }
            .home-newsapply {
                background-color: #fff;
                border: 1px solid #ebebeb;
                border-radius: 5px;
                margin-top: 22px;
                > h3 {
                    padding: 20px 0 20px 30px;
                    margin: 0;
                    font-size: 22px;
                    color: #101010;
                    font-weight: 400
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
                            font-weight: 400
                        }
                        td {
                            font-size: 14px;
                            color: #101010;
                            font-weight: 400;
                            button {
                                font-size: 14px;
                                width: 84px;
                                height: 30px;
                                line-height: 30px;
                                cursor: pointer;
                            }
                            .viewdetails {
                                color:$blue;
                                border: 1px solid $blue;
                                border-radius: 5px;
                                background-color: #fff;
                                margin-right: 15px;
                            }
                            .pass {
                                color:#fff;
                                border: 0;
                                border-radius: 5px;
                                background-color: $blue;
                            }
                        }
                    }
                }
            }
            .tablist {
                display: flex;
                margin-top: 22px;
                > div {
                    width: 32%;
                    background-color: #fff;
                    margin: 0 2% 0 0;
                    padding: 20px;
                    border: 1px solid #ebebeb;
                    border-radius: 5px;
                }
                > div:last-child {
                    margin-right: 0
                }
                .notice {
                    h3 {
                        font-size: 18px;
                        color: #222;
                        margin: 0;
                        font-weight: 500;
                        span {
                            background-color: $red;
                            border-radius: 5px;
                            padding: 3px 5px;
                            color: #fff;
                            font-size: 14px;
                            margin-right: 15px;
                            display: inline-block
                        }
                    }
                    a {
                        font-size: 14px;
                        color: #999;
                        display: flex;
                        justify-content: space-between;
                        padding: 0 40px;
                        margin-top: 10px;
                    }
                    p {
                        font-size: 14px;
                        color: #999;
                        padding-top: 15px;
                        border-top: 1px solid #eaedef;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                    }
                }
                .meetinglist {
                    ul {
                        display: flex;
                        padding: 0;margin: 0;
                        li {
                            position: relative;
                            dt {
                                font-size: 17px;
                                color: #333;
                                font-weight: 500;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                                overflow: hidden;
                            }
                            dd {
                                margin: 0;
                                display: flex;
                                justify-content: space-between;
                                position: absolute;
                                width: 100%;
                                bottom: 0;
                                font-size: 15px;
                                color: #999;
                                a span {
                                    border: 1px solid $red;
                                    border-radius: 50%;
                                    padding: 2px;
                                    font-size: 14px;
                                    font-weight: 600;
                                    margin-left: 5px;
                                }
                            }
                        }
                        li:last-child {
                            margin-left: 15px;
                        }
                    }
                    p {
                        display: flex;
                        justify-content: space-around;
                        border-top: 1px solid #eaedef;
                        margin: 20px 0 0 0;
                        padding: 15px 0 0 0;
                        a {
                            font-size: 14px;
                            color: #999;
                            b {
                                font-size: 24px;
                            }
                        }
                    }
                }
                .newslist {
                    ul {
                        padding: 0;
                        margin: 0;
                        li {
                            display: flex;
                            justify-content: space-between;
                            border-bottom: 1px solid #eaedef;
                            padding: 11px 0;
                            a {
                                font-size: 14px;
                                color: #222;
                            }
                            span {
                                font-size: 14px;
                                color: #999;
                                img {
                                    margin-right: 5px;
                                }
                            }
                        }
                        li:last-child {
                            border: 0
                        }
                    }
                }
            }
        }
    }
</style>