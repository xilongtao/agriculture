<template>
    <div class="menu" style="display:none">
        <ul class="menu">
            <li class="active">首页</li>
            <li>我要买</li>
            <li>我要卖</li>
            <li>账户</li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'menu',
}
</script>

<style>
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