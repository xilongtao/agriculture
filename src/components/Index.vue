<template>
    <div class="container-fluid">
        <my-header home-active="true"></my-header>
        <!--搜索模块-->
        <div class="row">
            <div class="col-xs-12">
                <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="11" id="myMap" ak="mExNf3ontCjKSISyGh77yQdu" :dragging="true" :scroll-wheel-zoom="true" @ready="handler">
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
  components: {MyHeader, BaiduMap, BmlHeatmap},
  data () {
    return {
        data: [
        ]
    }
  },
  methods:  {
    handler: function() {
        this.data = [
            {lng: 116.418261, lat: 39.921984, count: 50},
            {lng: 116.423332, lat: 39.916532, count: 51},
            {lng: 116.419787, lat: 39.930658, count: 15},
            {lng: 116.429787, lat: 39.950658, count: 15},
            {lng: 116.439787, lat: 39.960658, count: 15},
            {lng: 116.449787, lat: 39.970658, count: 15}
        ]
    }
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