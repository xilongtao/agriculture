<template>
    <header class="row">
        <div class="menu col-xs-12" >
            <ul class="menu">
                <li :class="{ active : homeActive}">
                    <router-link to="/">首页</router-link>
                </li>
                <li :class="{ active : saleListActive}">
                    <router-link to="sale-list">我要买</router-link>
                    <!--<a v-link="{path: '/sale-list'}">我要买</a>-->
                </li>
                <li>
                    <router-link to="buy-list">我要卖</router-link>
                </li>
                <li>
                    <router-link to="my-account">账户</router-link>
                </li>
            </ul>
        </div>
        <div class="header col-xs-12">
            <h1>中国农业种植信息网</h1>
        </div>
    </header>
</template>
<script>
export default {
  name: 'header',

  computed: {
    homeActive: function() {
        return this.$route.path == '/index'
    }, 
    saleListActive: function () {
        return this.$route.path == '/sale-list'
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
    text-align: center;
}
div.header h5 {
    margin-top: 25px;
}

/*菜单*/
div.menu {
    height: 40px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #50aa47;
    color: #fff;
    z-index: 2;
    font-size: 18px;
}
ul.menu {
    list-style-type: none;
}
ul.menu li {
    display:block;
    float:left;
    width:25%;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
ul.menu li a {
    color: #fff;
}
ul.menu li.active {
    background-color: #305e2c;
}
</style>