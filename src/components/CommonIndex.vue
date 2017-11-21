<template>

    <!--搜索模块-->
    <div>
        <div class="col-xs-12 text-center">
            <p class="bg-success common-index-title">中国苹果分布图</p>
        </div>
        <div class="col-xs-12">
            <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="6" id="myMap" ak="mExNf3ontCjKSISyGh77yQdu" :dragging="true" :scroll-wheel-zoom="true" @ready="handler"><!--@ready="handler"-->
              <bml-heatmap :data="data" :max="100" :radius="20">
              </bml-heatmap>
            </baidu-map>
        </div>
        <div class="select-box col-xs-12">
            <select class="form-control">
                <option>大类</option>
                <option>大类</option>
                <option>大类</option>
            </select>
            <select class="form-control">
                <option>小类</option>
                <option>小类</option>
                <option>小类</option>
            </select>
            <select class="form-control">
                <option>细类</option>
                <option>细类</option>
                <option>细类</option>
            </select>
            <div style="clear:both;"></div>
        </div>
        <div class="submit col-xs-12">
            <button class="btn btn-sm btn-success" @click="getData">{{buttonStr}}</button>
        </div>
        <!--信息表格-->
        <div class="col-xs-12 info">
            <table class="table">
                <tr>
                    <td class="text-center">种植面积</td>
                    <td class="text-center">3000亩</td>
                    <td class="text-center">市场价</td>
                    <td class="text-center">10元/斤</td>
                </tr>
                <tr>
                    <td class="text-center">地头价</td>
                    <td class="text-center">3000亩</td>
                    <td class="text-center">批发价</td>
                    <td class="text-center">10元/斤</td>
                </tr>
            </table>
        </div>
        <div class="col-xs-12">
            <h5 class="text-center">苹果最近7日价格图</h5>
            <div id="echarts"></div>
        </div>
        <sale-list></sale-list>
    </div>
</template>
<script>
import MyConfig from '../config'

import {BaiduMap} from 'vue-baidu-map'
import {BmlHeatmap} from 'vue-baidu-map'
import SaleList from '@/components/SaleList'

export default {
  name: 'index',
  components: {BaiduMap, BmlHeatmap, SaleList},
  data () {
    return {
        data: [
        ],
        buttonStr: '搜索'
    }
  },
  methods:  {
    handler: function() {
        this.getData()
        // console.log(this.data)
        // this.data = [
        //     {lng: 116.418261, lat: 39.921984, count: 50},
        //     {lng: 116.423332, lat: 39.916532, count: 51},
        //     {lng: 116.419787, lat: 39.930658, count: 15},
        //     {lng: 116.429787, lat: 39.950658, count: 15},
        //     {lng: 116.439787, lat: 39.960658, count: 15},
        //     {lng: 116.449787, lat: 39.970658, count: 15}
        // ]
    },
    getData: function() {
        this.buttonStr = '计算中...';
        var tmpData = [];
        //构造100个假数据
        for (let i = 0; i < 100; i ++) {
            let item = {lng: 0, lat: 0, count: 0}
            let r = Math.random();
            let lng = r * 30 + 90 //r * 62 + 73
            lng = lng.toFixed(6)
            let j = Math.random();
            let lat = j * 15 + 25 // r * 70 + 3
            lat = lat.toFixed(6)
            let k = Math.random();
            let count = Math.ceil(k * 100)
            item.lng = parseFloat(lng);
            item.lat = parseFloat(lat);
            item.count = count
            tmpData.push(item)
        }
        this.data = tmpData
        this.buttonStr = '搜索';
    }
  },
  mounted: function () {
    var echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/line');
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    require("echarts/lib/component/legendScroll");//图片上的标识
    var mychats = echarts.init(document.getElementById('echarts'));
    
    var latest7 = [];
    for (let i = 7; i >= 1; i --) {
        let date = new Date();
        date.setDate(date.getDate() - i);
        let dateStr = date.toLocaleDateString();
        latest7.push(dateStr);
    }
    var option = {
        // title: {
        //     text: '最近7天苹果价格曲线图'
        // },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['地头价','市场价','批发价']
        },
        grid: {
            left: '0%',
            right: '8%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: latest7
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'地头价',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'市场价',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'批发价',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            }
        ]
    };
    mychats.setOption(option);
  }
}


</script>

<style>
    /*首页地图*/
#myMap {
    height: 350px;
    margin-top: 5px;
}
div.select-box {
    padding-top: 5px;
    clear: both;
}
div.select-box select {
    width: 33%;
    float: left;
}
div.submit {
    padding-top: 5px;
}
div.submit button {
    width: 100%;
}
div.info {
    margin-top: 5px;
}
p.common-index-title {
    margin: 5px 0;
}

#echarts {
    width: 100%;
    height: 300px;
}
</style>