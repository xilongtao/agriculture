<template>
    <!--列表模块-->
    <div class="col-xs-12">
        <ul class="list-group">
            <li class="list-group-item">
              <img src="../assets/logo.png" class="sale-list-img" />
              <div class="sale-list-info">
                <p class="sale-list-title">这里是标题和简单描述，河北赵县农场，丰收雪花梨，个大瓤田</p>
                <p class="sale-list-location">河北，石家庄，赵县农场</p>
                <p class="sale-list-time">2015-12-12</p>
              </div>
            </li>
            <li class="list-group-item">
              <img src="../assets/logo.png" class="sale-list-img" />
              <div class="sale-list-info">
                <p class="sale-list-title">这里是标题和简单描述，河北赵县农场，丰收雪花梨，个大瓤田</p>
                <p class="sale-list-location">河北，石家庄，赵县农场</p>
                <p class="sale-list-time">2015-12-12</p>
              </div>
            </li>
            <li class="list-group-item">
              <img src="../assets/logo.png" class="sale-list-img" />
              <div class="sale-list-info">
                <p class="sale-list-title">这里是标题和简单描述，河北赵县农场，丰收雪花梨，个大瓤田</p>
                <p class="sale-list-location">河北，石家庄，赵县农场</p>
                <p class="sale-list-time">2015-12-12</p>
              </div>
            </li>
            <li class="list-group-item">
              <img src="../assets/logo.png" class="sale-list-img" />
              <div class="sale-list-info">
                <p class="sale-list-title">这里是标题和简单描述，河北赵县农场，丰收雪花梨，个大瓤田</p>
                <p class="sale-list-location">河北，石家庄，赵县农场</p>
                <p class="sale-list-time">2015-12-12</p>
              </div>
            </li>
            <li class="list-group-item">
              <img src="../assets/logo.png" class="sale-list-img" />
              <div class="sale-list-info">
                <p class="sale-list-title">这里是标题和简单描述，河北赵县农场，丰收雪花梨，个大瓤田</p>
                <p class="sale-list-location">河北，石家庄，赵县农场</p>
                <p class="sale-list-time">2015-12-12</p>
              </div>
            </li>
        </ul>
    </div>
</template>
<script>
import MyConfig from '../config'


export default {
  name: 'sale-list',
  data () {
    return {
        data: [
        ]
    }
  },
  methods:  {

  }
}
</script>

<style>
li.list-group-item {
  position:relative;
}
img.sale-list-img {
  height: 100px;
  width: 100px;
  border:1px solid #efefef;
  position: absolute;
  left: 15px;
  top: 10px;
}
div.sale-list-info {
  margin-left: 115px;
  height: 100px;
}
div.sale-list-info p{
  margin: 0;
  padding: 0;
}
p.sale-list-title {
  font-weight: bold;
  height: 60px;
}
p.sale-list-location {
  height: 20px;
  line-height: 20px;
}
p.sale-list-time {
  height: 20px;
  line-height: 20px;
}
</style>