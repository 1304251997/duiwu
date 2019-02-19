<template>
    <div>
        <head-top></head-top>
        <div class="main-container">
            <left></left>
            <div class="content">
                <h3 class="title">通知<button @click="tagAlertPop()" class="release_news">发布通知</button></h3>
                <ul class="notice_content masonry">
                    <li class="item" v-for="(item, index) in notice" :key="index">
                        <div class="item__content">
                            <h6>{{item.title}}</h6>
                            <dt><a>发布：{{item.month}}月{{item.day}}日</a><a>阅读：{{item.readNumber}}次</a></dt>
                            <dd>
                                <p>{{item.message}}</p>
                            </dd>
                            <div class="notice_mask">
                                <button>查看</button>
                                <button>删除</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="releaseAlert" v-show="isShow">
                <de-liver></de-liver>
            </div>
        </div>
    </div>
</template>
<script>
    import headTop from "@/components/header";
    import Left from "@/components/left";
    import deLiver from "@/components/deliver";
    export default {
        data(){
            return {
                notice: [
                    {title: '2月18日录制拜年视频',month: '1',day: '25',readNumber: '2541',message: '录制视频时间定在2月18日，请各位参与录制的老乡准时参加，穿正装，录制视频时间定在2月18日，请各位参与录制的老乡准时参加，穿正装，录制视频时间定在2月18日开吃'}
                ],
                isShow: false
            }
        },
        components: {
            headTop,
            Left,
            deLiver
        },
        methods: {
            tagAlertPop: function(){
                this.isShow = !this.isShow
            }
        }
    }
</script>
<style lang="scss">
    @import "../../style/mini";

    .release_news {
        float: right;
        width: 140px;
        height: 40px;
        line-height: 40px;
        background-color: $blue;
        color: #fff;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
    }  
    .masonry {
        column-count: 3;
        column-gap: 0;
        counter-reset: item-counter;

        @media screen and (min-width: 800px) {
            column-count: 1;
        }
        @media screen and (min-width: 900px) {
            column-count: 2;
        }
        @media screen and (min-width: 1200px) {
            column-count: 3;
        }
    }

        .item {
        box-sizing: border-box;
        break-inside: avoid;
        padding: 10px;
        counter-increment: item-counter;

        &:hover .hover_mask, &:hover .notice_mask {
            display: block
        }

        &__content {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: auto;
            font-size: 40px;
            background: currentColor;
            box-sizing: border-box;
            background-color: #fff;
            padding: 0 15px 15px 15px;
            border-radius: 5px;
            h6 {
                font-size: 18px;
                color: #222;
                font-weight: 500;
                margin: 20px 0 10px 0
            }
            dt {
                display: flex;
                border-bottom: 1px solid #f6f8f9;
                padding-bottom: 15px;
                a {
                    font-size: 14px;
                    color: #999;
                    margin-right: 20px
                }
            }
            dd {
                font-size: 14px;
                color: #999;
                padding: 15px 0;
                margin: 0;
                p {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                    margin: 0
                }
            }
            .notice_mask {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                border-radius: 5px;
                background-color: rgba($color: #000000, $alpha: 0.1);
                text-align: center;
                display: none;
                justify-content: center;
                button {
                    width: 68px;
                    height: 40px;
                    border-radius: 5px;
                    border: 0;
                    outline: none;
                    cursor: pointer;
                    margin-top: 15%;
                    &:first-child {
                        background-color: $blue;
                        color: #fff;
                        margin-right: 30px
                    }
                    &:last-child {
                        color: $red;
                        border: 1px solid $red;
                        background-color: #fff;
                        margin-right: 30px
                    }
                }
            }
        }
    }
    .releaseAlert {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 80px;left: 0;
        background-color: rgba($color: #000000, $alpha: 0.3);
    }
</style>