<template>
    <div class="container-fluid">
        <my-header home-active="true"></my-header>
            
        <router-view />
            
        <empty ></empty>
    </div>
</template>
<script>
import MyHeader from '@/components/Header'
import Empty from '@/components/Empty'


export default {
  name: 'common',
  components: {MyHeader, Empty}
}
</script>

<style>
.s-enter, .s-enter-active {
  transform: translateX(100%);
  transition: transform .3s ease-in-out;
}

.s-leave, .s-leave-active {
  transform: translateX(-100%);
  transition: transform .3s ease-in-out;
}
</style>