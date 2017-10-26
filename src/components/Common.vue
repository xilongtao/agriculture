<template>
    <div class="container-fluid">
        <my-header home-active="true"></my-header>
        <transition :name="transitionName">
            <router-view class="child-view" />
        </transition>
        <empty ></empty>
    </div>
</template>
<script>
import MyHeader from '@/components/Header'
import Empty from '@/components/Empty'

export default {
  name: 'common',
  components: {MyHeader, Empty},
  data: function () {
    return {
        transitionName: 'slide-left'
    }
  }
}
</script>

<style>

</style>