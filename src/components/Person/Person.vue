<template>
    <div class="personContainer">
        <div class="personBox">
            <div class="personHeader">
                <div class="personTitle"><h3>我的介绍</h3></div>
                <div class="personContent">
                    <div class="personImg"><img src="../../../static/images/xc_img1.jpg" alt=""></div>
                    <div class="personCo">
                        <span>凌志超</span>
                        <span>九零后</span>
                        <span>前端工程师，python工程师</span>
                        <span>比较文艺，爱好旅游、看电影等</span>
                    </div>
                </div>
            </div>
            <div class="personHeader personTools">
                <div class="personTitle"><h3>我的技能</h3></div>
                <div class="toolsBox">
                    <img src="../../../static/images/gr_img1.jpg" alt="">
                    <img src="../../../static/images/gr_img2.jpg" alt="">
                    <img src="../../../static/images/gr_img3.jpg" alt="">
                    <img src="../../../static/images/gr_img4.jpg" alt="">
                    <img src="../../../static/images/y98nuaaxl2.png" alt="">
                </div>
            </div>
            <div class="personHeader personMotto">
                <div class="personTitle"><h3>寄语</h3></div>
                <p>
                　　来来往往的人群，来来往往的生命穿行于其中，我们渺小到仅是沧海一粟。我们无法止住时光前行的脚步，只能默默地，走完仿佛早已注定的应走的路。仿若绚烂的彼岸花，花开无叶，叶生无花，花中相错，生生不见，注定孤独，注定悲伤。
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Person",
        created() {
            this.$store.dispatch('navStyleBtn', '关于');
        },
    }
</script>

<style scoped>
    .personMotto p{
        font-size: 16px;
        width: 85%;
        margin-left: 30px;
        line-height: 30px;
    }
    .personMotto{
        margin-top: 60px;
    }
    .personTools{
        margin-top: 30px;
    }
    .toolsBox{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .toolsBox img{
        width: 96px;
        height: 96px;
    }
    .personCo{
        display: flex;
        flex-direction: column;
        margin-left: 90px;
        margin-top: 10px;
    }
    .personCo span{
        line-height: 50px;
        font-size: 16px;
        color: #000;
    }
    .personImg{
        width: 385px;
        height: 220px;
        overflow: hidden;
    }
    .personImg img{
        width: 100%;
        height: 100%;
    }
    .personContent{
        width: 100%;
        height: 220px;
        position: relative;
        display: flex;
        flex-direction: row;
    }
    .personHeader{
        width: 100%;
        height: auto;
    }
    .personTitle h3{
        font-size: 24px;
        color: #3f2863;
        line-height: 100px;
    }
    .personContainer{
        width: 100%;
        max-width: 1890px;
        margin: 0 auto;
        height: auto;
        background: url("../../../static/images/bg_b.png") no-repeat;
        background-position: center;
        background-size: 100% 100%;
        position: relative;
        display: flex;
        justify-content: center;
    }
    .personBox{
        width: 1000px;
        height: 900px;
        margin-top: 120px;
    }
</style>