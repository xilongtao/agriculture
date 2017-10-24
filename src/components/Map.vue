<template>
  <div>
    <div id="allmap"></div>
    <button v-on:click="haha">test</button>
  </div>
</template>
<style>
  #allmap{
    width: 500px;height: 500px;margin:0;font-family:"微软雅黑";
  }
</style>
<script>
import {MP} from '../map'
export default {
  data: function () {
    return {
      map: null
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      MP("mExNf3ontCjKSISyGh77yQdu").then( BMap => {
        var map = new BMap.Map('allmap');            // 创建Map实例
        this.map = map;
        var point = new BMap.Point(116.404, 39.915); // 创建点坐标
        map.centerAndZoom(point,15);
        map.enableScrollWheelZoom();
      })
    })
  },
  methods: {
    haha: function(event) {
      console.log(this.map)
    }
  }
}
</script>