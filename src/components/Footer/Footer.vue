<template>
    <div class="footerContainer">
        <div class="footerBox">
            <div class="qucrode">
                <img src="../../../static/images/erweima.png" alt="">
            </div>
            <div class="textBox">
                <img src="../../../static/images/down_img.jpg" alt="">
                <div class="texts">
                    <h6>我的联系方式</h6>
                    <p>
                        QQ
                        <span class="qqSpan">972232855</span>
                    </p>
                    <p>
                        邮箱
                        <span class="emailSpan">972232855@qq.com</span>
                    </p>
                    <p>
                        原创选手 欢迎支持
                    </p>
                </div>
            </div>
        </div>
        <div style="display: none">
            Design by 凌志超
            <span @click="modify(2)">点击修改count</span>
            {{counts}}
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: "Footer",
        computed:{
            // this.$store.getters.counts
            ...mapGetters(['counts']), // 动态计算属性，相当于this.$store.getters.counts
            ...mapGetters(['homeNavSelect'])
        },
        methods: {
            modify(id){
                this.$store.dispatch('modify', id)
            },
        }
    }
</script>

<style scoped>
    .qqSpan{
        padding-left: 20px;
    }
    .emailSpan{
        padding-left: 15px;
    }
    .texts{
        text-align: left;
    }
    .texts h6{
        font-size: 20px;
        line-height: 60px;
    }
    .texts p{
        font-size: 14px;
        line-height: 32px;
    }
    .textBox{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /*align-items: center;*/
    }
    .textBox img{
        padding-right: 20px;
    }
    .qucrode{
        width: 160px;
        height: 160px;
        position: relative;
    }
    .qucrode img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .footerBox{
        width: 1000px;
        height: 160px;
        margin-top: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .footerContainer{
        width: 100%;
        height: 300px;
        text-align: center;
        font-size: 16px;
        color: black;
        position: relative;
        border-top: 1px solid #402863;
        display: flex;
        justify-content: center;
    }
</style>