<template>
    <div>
        <head-top></head-top>
        <div class="main-container">
            <left></left>
            <div class="content">
                <h3 class="title">会费</h3>
                <div class="membership_content">
                    <ul class="flex-top">
                        <li>
                            <a href="javascript:void(0)"><img width="50" height="50" src="/static/opening_service.png" alt=""></a>
                            <div>
                                <dt>会费功能</dt>
                                <dd>未开通</dd>
                            </div>
                        </li>
                        <li><button>开通</button></li>
                    </ul>
                </div> 
            </div>
        </div>   
    </div>
</template>
<script>
    import headTop from "@/components/header";
    import Left from "@/components/left";
    export default {
        components: {
            headTop,
            Left
        }
    }
</script>
<style lang="scss">
    @import "../../style/mini";
    .membership_content {
        background-color: #fff;
        min-height: 520px;
        padding: 30px;
        .flex-top {
            display: flex;
            justify-content: space-between;
            padding: 15px 30px;
            background-color: #f4f5f9;
            li {
                display: flex;
                a {
                    margin-right: 15px;
                }
                dt {
                    font-size: 16px;
                    color: #222;
                    padding-top: 5px;
                }
                dd {
                    margin: 0;
                    font-size: 14px;
                    color: #666
                }
                button {
                    width: 140px;
                    height: 40px;
                    line-height: 40px;
                    background-color: $blue;
                    color: #fff;
                    border: 0;
                    border-radius: 5px;
                    cursor: pointer;
                    outline: none;
                    margin-top: 6px;
                }
            }
        }
    }
</style>