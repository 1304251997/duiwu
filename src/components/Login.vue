<template>
    <div>
        <div class="body_image">
            <div class="center_content">
                <h3>队伍后台登录</h3>
                <a><img :src="scanImg" alt=""></a>
                <p>使用手机微信扫码登录</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                scanImg: '../../static/login_scan.png'
            }
        },
        mounted() {
            
        }
    }
</script>
<style lang="scss">
    body, html {
        margin: 0;
        padding: 0
    }
    .body_image {
        background: url(../assets/login_img.png) 0 0 no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 100%;
        position: absolute;
        .center_content {
            width: 386px;
            height: 520px;
            background-color: #fff;
            position: fixed;
            margin: auto;
            left: 0;right: 0;top: 0;bottom: 0;
            text-align: center;
            border-radius: 10px;
            h3 {
                font-size: 36px;
                color: #465ad2;
                margin-top: 40px;
            }
            img {
                width: 65%;
            }
            p {
                font-size: 20px;
                color: #000;
                margin: 0
            }
        }
    }
</style>