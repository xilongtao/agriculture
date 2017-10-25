<template>
    <div class="container-fluid" v-on:click="toggleMenu">
        <my-header v-bind:show="pshow" v-on:openMenu="toggleMenu"></my-header><!--监听子组件触发的openMenu事件-->
        <!--搜索模块-->
        <div class="row">
            <div class="col-xs-12">
                <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="14" id="myMap">
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
                <button class="btn btn-xs btn-success">搜索</button>
            </div>
            <!--信息表格-->
            <div class="col-xs-12 info">
                <table class="table table-bordered table-slashes">
                    <tr>
                        <td>种植面积</td>
                        <td>3000亩</td>
                        <td>预期价格</td>
                        <td>10元/斤</td>
                    </tr>
                    <tr>
                        <td>种植面积</td>
                        <td>3000亩</td>
                        <td>预期价格</td>
                        <td>10元/斤</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import MyHeader from '@/components/Header'
import MyConfig from '../config'

import {BaiduMap} from 'vue-baidu-map'
import {BmlHeatmap} from 'vue-baidu-map'

export default {
  name: 'index',
  components: { MyHeader, BmlHeatmap, BaiduMap },
  data: function () {
    return {
        pshow: false,
        data: [
            {lng: 116.418261, lat: 39.921984, count: 50},
            {lng: 116.423332, lat: 39.916532, count: 51},
            {lng: 116.419787, lat: 39.930658, count: 15}
            // ...此处添加更多的数据集
          ]
    }
  },
  methods: {
    toggleMenu: function() {
      this.pshow = !this.pshow
    }
  },
  mounted: function () {
    // this.$nextTick(function () {
    //   MP("mExNf3ontCjKSISyGh77yQdu").then( BMap => {
    //     // var map = new BMap.Map('myMap');            // 创建Map实例
    //     this.bmap = BMap;
    //   })
    // })
        /*
        var echarts = require('echarts/lib/echarts')
        require('echarts/lib/chart/heatmap')
        require('echarts/extension/bmap/bmap')
        require('echarts/lib/component/visualMap')
        // require('echarts/lib/chart/heatmap')
        this.myChart = echarts.init(document.getElementById('myMap'))
        var myChart = this.myChart


        $.get(MyConfig.apiDomain + 'testvue2/static_html/heatData.php', function (res) {

            var points = [].concat.apply([], res.map(function (track) {
                return track.map(function (seg) {
                    return seg.coord.concat([1]);
                });
            }));

            myChart.setOption({
                animation: false,
                bmap: {
                    center: [120.13066322374, 30.240018034923],
                    zoom: 14,
                    roam: true
                },
                visualMap: {
                    show: false,
                    top: 'top',
                    min: 0,
                    max: 5,
                    seriesIndex: 0,
                    calculable: true,
                    inRange: {
                        color: ['blue', 'blue', 'green', 'yellow', 'red']
                    }
                },
                series: [{
                    type: 'heatmap',
                    coordinateSystem: 'bmap',
                    data: points,
                    pointSize: 5,
                    blurSize: 6
                }]
            });
        }, 'json')
        */

  }
}
</script>

<style>
    /*首页地图*/
#myMap {
    height: 400px;
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
</style>