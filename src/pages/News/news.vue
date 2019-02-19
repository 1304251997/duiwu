<template>
  <div>
    <head-top></head-top>
    <div class="main-container">
      <left></left>
      <div class="content">
        <h3 class="title">新闻<router-link to="./release" class="release_news" tag="button">发布新闻</router-link></h3>
        <ul class="newslist masonry">
          <li class="item" v-for="(item, index) in newslist" :key="index">
            <div class="item__content">
              <div class="hover_mask">
                <button>预览</button>
              </div>
              <h5>{{item.title}}</h5>
              <dt>
                <a v-for="(init, index) in item.imgUrl" :key="index" v-bind:model="init.url">
                  <img width="100%" :src="init.url" alt>
                </a>
              </dt>
              <dd>
                {{item.promessage}}　{{item.time}}<a class="see_number"><img src="../../assets/see_icon.png" alt="">{{item.seeNumber}}</a>
                <a class="item_hover">
                  <img src="../../assets/edit_blue_icon.png" alt="">
                  <img src="../../assets/delete_icon.png" alt="">
                </a>
              </dd>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import headTop from "@/components/header";
import Left from "@/components/left";
export default {
  data() {
    return {
      newslist: [
        {
          title: "塞内加尔独特的地理环境与风貌",
          promessage: "北京娄底企业商会",
          seeNumber: "120",
          time: '17-0101',
          imgUrl: [
            {
              url: "../../static/newslist.png"
            }, {
              url: "../../static/newslist.png"
            }, {
              url: "../../static/newslist.png"
            }
          ]
        },
        {
          imgUrl: [
            {
              url: "../../static/newslist.png",
              url: "../../static/newslist.png"
            }
          ],
          title: "塞内加尔独特的地理环境与风貌1",
          promessage: "北京娄底企业商会2",
          seeNumber: "120",
          time: '17-0101'
        },
        {
          imgUrl: [
            {
              url: "../../static/newslist.png"
            }
          ],
          title: "塞内加尔独特的地理环境与风貌1",
          promessage: "北京娄底企业商会2",
          seeNumber: "120",
          time: '17-0101'
        },
        {
          imgUrl: [
            {
              url: "../../static/newslist.png"
            }
          ],
          title: "塞内加尔独特的地理环境与风貌1",
          promessage: "北京娄底企业商会2",
          seeNumber: "120",
          time: '17-0101'
        },
        {
          imgUrl: [
            {
              url: "../../static/newslist.png"
            }
          ],
          title: "塞内加尔独特的地理环境与风貌1",
          promessage: "北京娄底企业商会2",
          seeNumber: "120",
          time: '17-0101'
        }
      ]
    };
  },
  components: {
    headTop,
    Left
  }
};
</script>
<style lang="scss">
@import "../../style/mini";

// .newslist {
//     column-count: 3;
//     column-gap: 0;
//     counter-reset: item-counter;
//     .item {
//         box-sizing: border-box;
//         break-inside: avoid;
//         padding: 0 10px;
//         counter-increment: item-counter;
//         background-color: #fff;
//     }
// }
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

  &:hover .hover_mask, &:hover .item_hover {
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
    .hover_mask {
      position: absolute;
      width: 100%;
      height: 76%;
      left: 0;
      top: 0;
      border-radius: 5px 5px 0 0;
      background-color: rgba($color: #000000, $alpha: 0.5);
      text-align: center;
      display: none;
      button {
        border: 0;
        border-radius: 5px;
        background-color: #fff;
        color: $blue;
        width: 88px;
        height: 40px;
        line-height: 40px;
        margin-top: 10%;
        cursor: pointer;
      }
    }
  }
  h5 {
      font-size: 18px;
      font-weight: 500;
      margin: 20px 0 10px 0
  }
  dt {
      display: flex;
      a {
        flex-shrink: 1;
        padding-right: 15px;
      }
      &:last-child {
        padding-right: 0
      }
  }
  dd {
      margin: 0;
      font-size: 14px;
      color: #999;
      position: relative;
      .see_number {
        margin-left: 15px;
      }
      .item_hover {
        position: absolute;
        right: 0;
        top: 0;
        display: none;
        img:last-child {
          margin-left: 15px
        }
      }
  }
}
</style>