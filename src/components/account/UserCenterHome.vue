<template>
    <div>
        <div>
            <div class="user-center-home-header">
                <div class="user-center-home-img">
                    <img src="../../assets/default-portrait.jpg" />
                </div>
                <div class="user-center-home-name">
                    <p>xilongtao（种植户）</p>
                </div>
            </div>
            <div class="user-center-home-body"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserCenterHome',
    }
</script>
<style>
    div.user-center-home-header {
        background-color: #56c14b;
        height: 160px;
    }
    div.user-center-home-img {
        text-align: center;
        height: 120px;
    }
    div.user-center-home-img img {
        vertical-align: middle;
        height: 100px;
        width: 100px;
        margin-top: 15px;
        border-radius: 50px;
    }
    div.user-center-home-name {
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
</style>