<template>
    <div class="container-fluid">
        <my-header sale-list-active="true"></my-header>
        <!--列表模块-->
        <div class="row">
            <ul class="list-group">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    </div>
</template>
<script>
import MyHeader from '@/components/Header'
import MyConfig from '../config'


export default {
  name: 'list',
  components: {MyHeader},
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
   
</style>