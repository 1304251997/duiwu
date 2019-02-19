<template>
    <div>
        <head-top></head-top>
        <div class="main-container">
            <left></left>
            <div class="content">
                <h3 class="title"><a>账号详情 ></a> 开通官方认证</h3>
                <div class="authen_content">
                    <h3>社会团体法人登记证书</h3>
                    <div class="flex_list">
                        <ul class="left">
                            <li>
                                <span>名称</span>
                                <input type="text"  placeholder="北京娄底企业商会" readonly />
                            </li>
                            <li>
                                <span>法定代表人</span>
                                <input type="text"  placeholder="请输入姓名"  />
                            </li>
                            <li>
                                <span>注册资金</span>
                                <input type="text"  placeholder="请输入金额"  />
                            </li>
                            <li>
                                <span>住所</span>
                                <input type="text"  placeholder="请输入详细地址"  />
                            </li>
                            <li>
                                <span>业务范围</span>
                                <textarea name="" id="" cols="30" rows="10" placeholder="请输入业务范围" />
                            </li>
                        </ul>
                        <div class="right">
                            <a><span>上传证书</span></a>
                            <!-- <el-upload class="update_file" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg" @click="getImage">
                                <img class="change_hide" src="/static/update_file.png" alt="">
                                <p class="change_hide">上传登记证书</p>
                                <img style="display: none" class="add_img" alt="">
                                <input @change="fileImage" type="file" accept="image/jpeg,image/x-png,image/gif" id="" value="" />
                            </el-upload> -->
                            <div id="pict">
                                <div class="icon-po" v-for="(item,index) in img">
                                    <img  :src="item" >
                                    <div class="icon-close" @click="imgclose(index)">×</div>
                                </div>
                                <van-uploader :after-read="onRead" accept="image/jpg, image/jpeg" multiple class="icon-add">
                                </van-uploader>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import headTop from "@/components/header";
    import Left from "@/components/left";
    import axios from 'axios'
    import { Uploader } from 'vant';

    export default {
        data(){
            return {
                img:[]
            }
        },
        components: {
            headTop,
            Left
        },
        methods: {
            onRead(e){
                //注意，我们这里没有使用form表单提交文件，所以需要用new FormData来进行提交
                let fd= new FormData();
                fd.append("upfile", e.file);//第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
                
                axios.post(url, {params:fd}) //url是服务器的提交地址
                    //成功回调
                    .then(res => {this.img.push(res.data.imgpath); }) //将服务器返回的图片链接添加进img数组，进行预览展示
                    //失败回调
                    .catch(err => {alert(err);});
                    }
            },
            //删除预览图片按钮
            imgclose(e){
                this.img.splice(e,1);
            }
            
        }
</script>
<style lang="scss">
    @import "../../../style/mini";

     .icon-add{
        width: 200px;
        height: 200px;
        border: 1px dashed #9a9ba3;
        overflow: hidden;
        display: flex;
        margin-top: 20px;
    }

    .icon-add:before{
        content: '';
        position: absolute;
        width: 50px;
        height: 2px;
        left: 50%;
        top: 50%;
        margin-left: -25px;
        margin-top: -1px;
        background-color: #aaabb2;
    }
    .icon-add:after{
        content: '';
        position: absolute;
        width: 2px;
        height: 50px;
        left: 50%;
        top: 50%;
        margin-left: -1px;
        margin-top: -25px;
        background-color: #aaabb2;
    }
    .icon-po{
        position: relative;
        width: 200px;
        height: 200px;
        margin-right: 20px;
        margin-top: 20px;
    }
     .icon-close{
        position: absolute;
        right: 5%;
        top: 5%;
        width: 30px;
        height:30px;
        border-radius: 50%;
        background-color:red;
        color: #fff;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    
    .authen_content {
        background-color: #fff;
        padding: 50px 0;
        border-radius: 5px;
        & > h3 {
            text-align: center;
            font-weight: 500;
            font-size: 24px;
            color: #222;
        }
        .flex_list {
            display: flex;
            padding: 0 80px;
            ul {
                width: 55%;
                li {
                    display: flex;
                    margin-bottom: 10px;
                    &:last-child {
                        margin: 0;
                    }
                    span {
                        width: 110px;
                        display: inline-block;
                    }
                    input {
                        width: 80%;
                        height: 40px;
                        line-height: 40px;
                        border: 1px solid $border;
                        color: #222;
                        border-radius: 5px;
                        padding-left: 20px;
                        &:input::-webkit-input-placeholder {
                            /* placeholder颜色  */
                            color: #bbb;
                        }
                    }
                    textarea {
                        resize: none;
                        width: 78%;
                        border: 1px solid $border;
                        color: #222;
                        border-radius: 5px;
                        padding: 10px 20px;
                        font-size: 16px;
                        height: 150px;
                        &:input::-webkit-input-placeholder {
                            /* placeholder颜色  */
                            color: #bbb;
                        }
                    }
                }
            }
            .right {
                display: flex;
                width: 45%;
                padding-left: 40px;
                a {
                    display: inline-block;
                    width: 110px;
                }
                // .update_file {
                //     background-color: #fbfbfb;
                //     width: 60%;
                //     height: 140px;
                //     border: 1px dashed $border;
                //     text-align: center;
                //     padding-top: 80px;
                //     cursor: pointer;
                //     position: relative;
                //         border-radius: 5px;
                //     p {
                //         margin: 10px 0 0 0;
                //         color: $blue
                //     }
                //     .add_img {
                //         position: absolute;
                //         width: 100%;
                //         height: 100%;
                //         left: 0;
                //         top: 0;
                //         border-radius: 5px;
                //     }
                // }
            }
        }
    }
</style>