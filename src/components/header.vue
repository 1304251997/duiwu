<template>
    <div class="row">
        <div class="container">
            <div class="left">
                <img width="50" height="50" src="@/assets/logo.png" alt="">
                <a href="/">北京娄底企业商会</a>
            </div>
            <ul class="right">
                <li>
                    <a href="/Message"><img width="35" height="35" src="@/assets/email_icon.png" alt=""></a>
                    <a class="email_number">3</a>
                </li>
                <li><router-link to="/Login"><img width="60" height="60" src="@/assets/avatar_logo.png" alt=""></router-link></li>
                <li>
                    <div>
                        <dt>
                            <a href="/Personal">
                                王大宝<img src="@/assets/user_up_icon.png" alt="">
                            </a>
                        </dt>
                        <dd>超级管理员</dd>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
    @import '../style/mini';
    a {
        text-decoration: none
    }    
    li {
        list-style: none;
    }
    .row {
        height: 80px;
        width: 100%;
        line-height: 80px;
        background-color: #fff;
        .container {
            // width: 1200px;
            padding: 0 40px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
        }
        .left {
            display: flex;
            justify-content: space-between;
            img {
                margin-top: 15px;
            }
            a {
                font-size: 24px;
                color: #4d4d4d;
                margin-left: 15px;
            }
        }
        .right {
            display: flex;
            margin: 0;
            height: 80px;
            li {
                margin-left: 20px;
                position: relative;
                a.email_number {
                    position: absolute;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background-color: $red;
                    text-align: center;
                    color: #fff;
                    right: -5px;
                    top: 20px;
                    font-size: 14px;
                    line-height: 1.2
                }
                img {
                    margin-top: 20px;
                    cursor: pointer;
                }
                div {
                    height: 80px;
                    padding-right: 30px;
                    dt {
                        position: relative;
                        text-align: right;
                        padding-right: 20px;
                        height: 25px;
                        margin-top: -12px;
                        a {
                            font-size: 18px;
                            color: #666;
                        }
                        img {
                            position: absolute;
                            top: 38px;
                            right: 0;
                            margin: auto
                        }
                    }
                    dd {
                        font-size: 14px;
                        color: #f2830c;
                        margin: 0;
                    }
                }
            }
            li:nth-child(2) img {
                margin-top: 10px
            }
            li:nth-child(3) {
                width: auto;
            }
        }
    }
</style>