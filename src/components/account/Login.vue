<template>
    <div class="col-xs-12">
        <form class="form-horizontal">
            <div class="form-group">
                <label class="sr-only"></label>
                <div class="col-xs-6">
                    <input class="form-control" placeholder="手机号" />
                </div>
            </div>
            <div class="form-group">
                <label class="sr-only"></label>
                <div class="col-xs-4">
                    <input class="form-control" placeholder="手机验证码" />
                </div>
                <div class="col-xs-2">
                    <button class="btn btn-sm btn-success" type="button">发送</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Login'
    }
</script>