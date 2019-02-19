<template>
    <div>
        <head-top></head-top>
        <div class="main-container">
            <left></left>
            <div class="content">
                <h3 class="title"><a href="/news">新闻 ></a> 发布新闻</h3>
                <div class="release_content">
                    <div class="editor-container">
                        <UE :defaultMsg=defaultMsg :config=config ref="ue"></UE>
                    </div>
                    <div class="save_message"><button @click="getUEContent()" class="">保存</button></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import UE from '@/components/defaultMsg';
    import headTop from "@/components/header";
    import Left from "@/components/left";
    export default {
        data(){
            return {
                defaultMsg: '',
                config: {
                    initialFrameWidth: null,
                    initialFrameHeight: 350
                }
            }
        },
        components: {
            headTop,
            Left,
            UE
        },
        methods:{
            getUEContent() {
                let content = this.$refs.ue.getUEContent();
                // this.$notify({
                //   title: '获取成功，可在控制台查看！',
                //   message: content,
                //   type: 'success'
                // });
                console.log(content)
            }
        }
    }
</script>
<style lang="scss">
    @import "../../style/mini";
    
    .release_content {
        background-color: #fff;
        padding: 30px;
    }
    .save_message {
        text-align: center;
        padding-top: 20px;
        button {
            width: 138px;
            height: 40px;
            line-height: 40px;
            background-color: #465ad2;
            color: #fff;
            border: 0;
            border-radius: 5px;
            cursor: pointer;
            outline: none;
        }
    }
</style>