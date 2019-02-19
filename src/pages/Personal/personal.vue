<template>
    <div>
        <head-top></head-top>
        <div class="main-container">
            <left></left>
            <div class="content">
                <h3 class="title">账号详情</h3>
                <div class="usermain">
                    <div class="user_left">
                        <a href="javascript:void(0)"><img src="/static/certification.png" alt=""></a>
                        <button><a href="/authen">开通官方认证</a></button>
                        <div></div> 
                        <p>开通官方认证，请上传社会团队法人登记证书</p>
                    </div>
                    <ul class="user_right">
                        <h3>注册信息</h3>
                        <li>
                            <span>名称</span>
                            <input type="text" placeholder="北京娄底企业商会" />
                            <a class="edit_number">
                                一年最多修改3次
                                <img src="/static/modify_edit_icon.png" alt="">
                            </a>
                        </li>
                        <li>
                            <span>类似</span>
                            <input type="text" placeholder="商会" />
                        </li>
                        <li>
                            <span>注册区域</span>
                            <input type="text" placeholder="北京" />
                        </li>
                        <li>
                            <span>姓名</span>
                            <input type="text" placeholder="王大宝" />
                        </li>
                        <li>
                            <span>联系方式</span>
                            <input type="text" placeholder="13838838438" />
                        </li>
                        <li>
                            <span>申请时间</span>
                            <input type="text" placeholder="2019-1-14" />
                        </li>
                        <li>
                            <span>小程序码</span>
                            <input type="text" placeholder="" readonly />
                            <img class="sp_code" src="/static/sp_code.png" alt="">
                        </li>
                        <li>
                            <span>关键词</span>
                            <div class="key_word">
                                <a>商会</a>
                                <a>娄底市</a>
                                <a>湖南省</a>
                                <a>老乡</a>
                                <a @click="addList()">+</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    import headTop from "@/components/header";
    import Left from "@/components/left";
    import navFooter from "@/components/footer";
    export default {
        components: {
            headTop,
            Left,
            navFooter
        },
        methods: {
            addList() {
                alert(1)
            }
        }
    }
</script>
<style lang="scss">
    @import "../../style/mini";
    .usermain {
        background-color: #fff;
        min-height: 520px;
        padding: 50px;
        display: flex;
        .user_left {
            width: 300px; 
            text-align: center;
            padding-top: 20px;
            button {
                width: 140px;
                height: 40px;
                line-height: 40px;
                background-color: $blue;
                border: 0;
                border-radius: 5px;
                cursor: pointer;
                outline: none;
                margin-top: 15px;
                a {
                    color: #fff;
                }
            }
            &>div {
                height: 150px;
                width: 100%;
                border: 1px dashed #ebebeb;
                background-color: #fbfbfb;
                margin-top: 40px;
            }
            p {
                font-size: 14px;
                color: #9a9a9a;
                text-align: left
            }
        }
        .user_right {
            width: 100%; 
            padding: 0px 0 0 40px;
            margin: 0;
            h3 {
                font-size: 18px;
                color: #222;
                font-weight: 500
            }
            li {
                display: flex;
                position: relative;
                span {
                    font-size: 14px;
                    font-family: '宋体';
                    color: #9a9a9a;
                    display: inline-block;
                    width: 100px;
                    line-height: 3
                }
                input {
                    border: 0;
                    border-bottom: 1px solid #e4e8eb;
                    outline: none;
                    font-size: 14px;
                    color: #353535;
                    width: 100%;
                    padding: 18px 0
                }
                .sp_code {
                    position: absolute;
                    left: 100px;
                    margin: auto;
                    top: 0;bottom: 0;
                }
                .edit_number {
                    position: absolute;
                    right: 0;
                    top: 0;bottom: 0;
                    margin: auto;
                    line-height: 3;
                    font-size: 14px;
                    color: #9a9a9a;
                    img {
                        margin-left: 20px;
                    }
                }
                .key_word {
                    border-bottom: 1px solid #e4e8eb;
                    width: 100%;
                    padding: 18px 0;
                    display: flex;
                    a {
                        border: 1px solid #ebebeb;
                        font-size: 14px;
                        color: #666;
                        display: inline-block;
                        width: 80px;
                        text-align: center;
                        height: 40px;
                        line-height: 40px;
                        border-radius: 5px;
                        margin-right: 10px;
                        &:last-child {
                            font-size: 36px;
                            color: #465ad2;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>