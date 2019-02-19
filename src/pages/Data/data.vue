<template>
    <div>
        <head-top></head-top>
        <div class="main-container">
            <left></left>
            <div class="content">
                <h3 class="title">数据</h3>
                <div class="gender data_list">
                    <h3>性别</h3>
                    <div id="genDer" :style="{width: '100%', height: '180px'}"></div>
                </div>
                <div class="data_list">
                    <h3>成员增长数据</h3>
                    <ul class="listActive">
                        <li @click="tabClick(day)">日</li>
                        <li @click="tabClick(month)">月</li>
                        <li @click="tabClick(year)">年</li>
                    </ul>
                    <div :is="currentView"></div>
                </div>
                <div class="data_list">
                    <h3>用户访问量增长数据</h3>
                    <ul class="listActive">
                        <li @click="tabList(ri)">日</li>
                        <li @click="tabList(yue)">月</li>
                        <li @click="tabList(nian)">年</li>
                    </ul>
                    <div :is="currentList"></div>
                </div>
                <div class="data_list">
                    <h3>行业人数比例</h3>
                    <div id="PeopleChart" :style="{width: '100%', height: '450px'}"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import headTop from "@/components/header";
    import Left from "@/components/left";
    import dayData from "@/components/Echarts/member/day/day";
    import monthData from "@/components/Echarts/member/month/month";
    import yearData from "@/components/Echarts/member/year/year";

    import ri from "@/components/Echarts/increase/ri/ri";
    import yue from "@/components/Echarts/increase/yue/yue";
    import nian from "@/components/Echarts/increase/nian/nian";

    export default {
        data(){
            return {
                day: 'dayData',
                month: 'monthData',
                year: 'yearData',
                ri: 'ri',
                yue: 'yue',
                nian: 'nian',
                currentView: 'dayData', // 默认选中第一项
                currentList: 'ri' // 默认选中第一项
            }
        },
        mounted(){
            this.drawLine()
            this.setGender()
        },
        components: {
            headTop,
            Left,
            dayData,
            monthData,
            yearData,
            ri,
            yue,
            nian
        },
        methods: {
            tabClick(tabItem) {
                this.currentView = tabItem;
            },
            tabList(indexItem) {
                this.currentList = indexItem;
            },
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let PeopleChart = this.$echarts.init(document.getElementById('PeopleChart'))
                // let data = [["2000-06-31",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];
                
                // var dateList = data.map(function (item) {
                //     return item[0];
                // });
                // var valueList = data.map(function (item) {
                //     return item[1];
                // });
                
                // 绘制图表
                PeopleChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        formatter: "Temperature : <br/>{b} : {c} %"
                    },
                    xAxis: {
                        type: 'value',
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            formatter: '{value} %'
                        }
                    },
                    yAxis: {
                        type: 'category',
                        axisLine: {onZero: true},
                        axisLabel: {
                            formatter: '{value}'
                        },
                        boundaryGap: true,
                        data: ['农业', '家具', '软件', '互联网', '电商', '装修', '法律', '保险', '医疗', '建筑']
                    },
                    series: [{
                        type: 'bar',
                        smooth: true,
                        barCategoryGap: 20,
                        lineStyle: {
                            normal: {
                                width: 3,
                                shadowColor: 'rgba(0,0,0,0.4)',
                                shadowBlur: 10,
                                shadowOffsetY: 10
                            }
                        },
                        data:[15, 50, 56.5, 46.5, 22.1, 2.5, 27.7, 55.7, 96.5, 20.56]
                    }]
                });
            }, 
            // 性别统计
            setGender(){
                // 基于准备好的dom，初始化echarts实例
                let genderChart = this.$echarts.init(document.getElementById('genDer'))
                // let data = [["2000-06-31",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];
                
                // var dateList = data.map(function (item) {
                //     return item[0];
                // });
                // var valueList = data.map(function (item) {
                //     return item[1];
                // });
                
                // 绘制图表
                genderChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        formatter: "{b}   {c} 人"
                    },
                    xAxis: {
                        type: 'value',
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            formatter: ''
                        }
                    },
                    yAxis: {
                        type: 'category',
                        axisLine: {onZero: true},
                        axisLabel: {
                            formatter: '{value}'
                        },
                        boundaryGap: true,
                        data: ['女', '男']
                    },
                    series: [{
                        type: 'bar',
                        smooth: true,
                        barCategoryGap: 20,
                        lineStyle: {
                            normal: {
                                width: 3,
                                shadowColor: 'rgba(0,0,0,0.4)',
                                shadowBlur: 10,
                                shadowOffsetY: 10
                            }
                        },
                        data:[120, 180]
                    }]
                });
            }
        }
    }
</script>
<style lang="scss">
	@import "../../style/mini";

    .data_list {
        background-color: #fff;
        position: relative;
        padding: 30px 0 0 0;
        margin-bottom: 20px;
        border: 1px solid $border;
        border-radius: 5px;
        h3 {
            margin: 0;
            position: absolute;
            left: 120px;
            font-weight: 500;
        }
        .listActive {
            position: absolute;
            margin: auto;
            left: 0;right: 0;
            display: flex;
            width: 180px;
            height: 30px;
            line-height: 30px;
            z-index: 1500;
            li {
                width: 60px;
                border: 1px solid $border;
                text-align: center;
                margin-left: -1px;
                cursor: pointer;
                &:hover {
                    background-color: $blue;
                    color: #fff;
                }
            }
        }
    }
</style>