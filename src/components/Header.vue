<template>
    <header class="row">
        <transition name="fade">
            <div class="menu" v-if="show">
                <ul class="menu">
                    <li class="active">首页</li>
                    <li>我要买</li>
                    <li>我要卖</li>
                    <li>账户</li>
                </ul>
            </div>
        </transition>
        <div class="header col-xs-2">
            <h5><span class="glyphicon glyphicon-th" v-on:click.stop="openMenu"></span></h5>
            
        </div>
        <div class="header col-xs-10">
            <h3 class="pull-left">XXXX</h3>
        </div>
    </header>
</template>
<script>
export default {
  name: 'header',
  props: ['show'],
  methods: {
    openMenu: function() {
        this.$emit('openMenu');//触发父组件的事件
    }
  }
  // data: function () {
  //   return {
  //       show: false
  //   }
  // }
}
</script>
<style>
/*头部*/
header {
    background-color: #56c14b;
}
div.header {
    color:#fff;
}
div.header h5 {
    margin-top: 25px;
}

/*菜单*/
div.menu {
    height: 300px;
    width:200px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #50aa47;
    color: #fff;
    z-index: 2;
    font-size: 18px;
}
ul.menu {
    margin-top: 20px;
    padding-left: 0;
    margin-left: 0;
    list-style-type: none;
}
ul.menu li {
    padding-left: 30px;
    height: 30px;
    line-height: 30px;
}
ul.menu li.active {
    background-color: #305e2c;
}
</style>