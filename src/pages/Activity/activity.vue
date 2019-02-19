<template>
  <div>
    <head-top></head-top>
    <div class="main-container">
        <left></left>
        <div class="content">
            <h3 class="title">活动
            <router-link to="/releasenews" class="release_news" tag="button">发布活动</router-link>
            </h3>
            <ul class="activitylist">
                <li class="item meetinglist" v-for="(item, index) in hdList" v-bind:key="index">
                    <div class="item__content">
                        <ul>
                            <li><img width="100%" :src="item.imgurl" alt=""></li>
                            <li>
                                <dt>{{item.title}}</dt>
                                <dd>
                                    <a>{{item.message}}</a><br>
                                    <a>{{item.time}}</a>
                                </dd>
                            </li>
                        </ul>
                        <p>
                            <a>阅读：<b style="color: #465ad2;">{{item.readNumber}}</b>次</a>
                            <a>报名：<b style="color: #e71340;">{{item.signUp}}</b>人</a>
                        </p>
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
    data(){
		return {
			hdList: [
				{
					imgurl: '../../static/newslist.png',
					title: '北京娄底企业商会成立大会暨会员大会',
					message: '北京娄底企业商会',
					time: '2018-12-31',
					readNumber: '1245',
					signUp: '124'
				}
			]
		}
    },
    components: {
        headTop,
        Left
    }
};
</script>
<style lang="scss">
	@import "../../style/mini";

	.activitylist {
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

	.release_news {
		float: right;
		width: 140px;
		height: 40px;
		line-height: 40px;
		background-color: #465ad2;
		color: #fff;
		border: 0;
		border-radius: 5px;
		cursor: pointer;
	}

	.item {
		box-sizing: border-box;
		break-inside: avoid;
		padding: 10px;
		counter-increment: item-counter;
		border-radius: 5px;

		&:hover .hover_mask,
		&:hover .item_hover {
			display: block;
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
			}
		}
		ul {
			display: flex;
			padding: 0;margin: 20px 0 0 0;
			li {
				position: relative;
				&:first-child {
					width: 45%;
					img {
						border-radius: 5px;
					}
				}
				dt {
					font-size: 17px;
					color: #333;
					font-weight: 500;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
				}
				dd {
					margin: 0;
					justify-content: space-between;
					position: absolute;
					width: 100%;
					bottom: 5px;
					font-size: 15px;
					color: #999;
					a span {
						border: 1px solid $red;
						border-radius: 50%;
						padding: 2px;
						font-size: 14px;
						font-weight: 600;
						margin-left: 5px;
					}
				}
			}
			li:last-child {
				margin-left: 15px;
			}
		}
		p {
			display: flex;
			justify-content: space-around;
			border-top: 1px solid #eaedef;
			margin: 15px 0 0 0;
			padding: 15px 0 0 0;
			a {
				font-size: 14px;
				color: #999;
				b {
					font-size: 24px;
				}
			}
		}
	}
</style>