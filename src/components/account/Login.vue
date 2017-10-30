<template>
    <div class="container-fluid">
        <my-header></my-header>
        <div class="col-xs-12">
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="sr-only"></label>
                    <div class="col-xs-10 col-xs-offset-1">
                        <input class="form-control" placeholder="手机号" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="sr-only"></label>
                    <div class="col-xs-8 col-xs-offset-1">
                        <input class="form-control" placeholder="手机验证码" />
                    </div>
                    <div class="col-xs-2">
                        <button class="btn btn-sm btn-success" type="button" id="send">发送</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import MyHeader from '@/components/Header'
    export default {
        name: 'Login',
        components: {MyHeader}
    }
</script>
<style>
    form {
        margin-top: 100px;
    }
    #send {
        margin-left: -15px;
    }
</style>