<template>
    <div class="deliver_content">
        <h3>发布通知</h3>
        <ul>
            <li>
                <span>标题：</span>
                <input type="text" placeholder="不少于5个字" />
            </li>
            <li>
                <span>内容：</span>
                <textarea id="" cols="30" rows="10" placeholder="请输入内容"></textarea>
            </li>
        </ul>
        <p class="bottom_btn">
            <button @click="closeAlert()">取消</button>
            <button>确定</button>
        </p>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
    @import '../style/mini';

    .deliver_content {
        background-color: #fff;
        position: fixed;
        top: 0;bottom: 0;left: 0;right: 0;
        margin: auto;
        width: 523px;
        height: 56%;
        h3 {
            width: 30%;
            height: 46px;
            line-height: 46px;
            font-weight: 500;
            text-align: center;
            font-size: 22px;
            color: #fff;
            background-color: $blue;
        }
        ul {
            border-top: 1px solid #e4e8eb;
            border-bottom: 1px solid #e4e8eb;
            padding: 20px 0;
            height: 61%;
            li {
                padding: 0 30px;
                display: flex;
                margin-bottom: 15px;
                span {
                    font-size: 16px;
                    color: #333;
                    display: inline-block;
                    width: 68px;
                    line-height: 45px;
                }
                input {
                    width: 100%;
                    height: 45px;
                    font-size: 16px;
                    color: #bbb;
                    border: 1px solid #e4e8eb;
                    border-radius: 5px;
                    padding-left: 15px;
                    outline: none
                }
                textarea {
                    width: 100%;
                    border: 1px solid #e4e8eb;
                    border-radius: 5px;
                    font-size: 16px;
                    color: #bbb;
                    outline: none;
                    padding: 15px;
                    resize: none;
                    height: 100%;
                }
            }
        }
        .bottom_btn {
            text-align: center;
            margin: 15px 0 0 0;
            button {
                width: 140px;
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                color: #fff;
                background-color: $blue;
                border: 0;
                border-radius: 5px;
                outline: none;
                cursor: pointer;
                &:first-child {
                    background-color: #e4e8eb;
                    color: #80828d;
                    margin-right: 20px;
                }
            }
        }
    }
</style>