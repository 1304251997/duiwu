<template>
  <div>
    <head-top></head-top>
    <div class="main-container">
      <left></left>
      <div class="content">
        <h3 class="title">简介</h3>
        <div class="editor-container">
          <UE :defaultMsg=defaultMsg :config=config ref="ue"></UE>
        </div>
        <div class="save_message"><button @click="getUEContent()" class="">保存</button></div>
      </div>
    </div>
  </div>
</template>
<script>
  import UE from '@/components/defaultMsg'
  import headTop from '@/components/header'
  import Left from '@/components/left'
  export default {
    data() {
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
    methods: {
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
  };
</script>
<style lang="scss">
    @import '../../style/mini';
    
    .save_message {
      width: 100%;
      text-align: center;
      margin: 0 0 80px 0;
      padding: 15px 0;
      background-color: #fff;
      border-top: 1px solid #ebebeb;
      button {
        width: 120px;
        text-align: center;
        height: 40px;
        line-height: 40px;
        color: #fff;
        background-color: $blue;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
        margin: 0;
        outline: none
      }
    }
    .editor-container {
      background-color: #fff;
      padding: 20px 0
    }
</style>