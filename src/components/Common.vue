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

</style>