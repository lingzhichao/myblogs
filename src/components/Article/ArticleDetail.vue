<template>
    <div class="artPage">
        <div class="artBox">
            <div class="artLeft">
                <div class="shareTec">经典文章</div>
                <div class="articleContents">
                    {{articleDetail}}
                </div>
            </div>
            <div class="artRight">
                <div class="righgImgBox">
                    <img src="../../../static/images/gif1.gif" alt="">
                </div>
                <div class="linkBox">
                    <div>友情链接</div>
                    <p><a href="https://www.baidu.com" target="_blank">国梁的博客</a></p>
                    <p><a href="https://www.baidu.com" target="_blank">国梁的博客</a></p>
                    <p><a href="https://www.baidu.com" target="_blank">国梁的博客</a></p>
                </div>
            </div>
        </div>
        <BackTop :bottom="40" :height="500"/>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'

    export default {
        name: "ArticleDetail",
        data() {
            return {
                artNav: [
                    {name: 'python', types: 0},
                    {name: 'H5', types: 1},
                    {name: 'MySQL', types: 2},
                    {name: 'Linux', types: 3},
                ],
                search: ''
            }
        },
        created() {
            this.$store.dispatch('navStyleBtn', '博文');
        },
        mounted() {

        },
        methods: {

        },
        computed:{
            ...mapGetters(['articleDetail']), //  动态计算属性，相当于this.$store.getters.counts
        },
        components: {

        }
    }
</script>

<style scoped>
    .articleContents{
        width: 100%;
        height: auto;
    }
    .articleContents p{
        text-indent: 2em;
    }
    .articleContents code{
        font-size: 14px;
        color: white;
    }
    .articleContents pre{
        background: #3f2863;
        width: 100%;
    }
    .linkBox{
        width: 100%;
        height: auto;
        font-size: 16px;
        margin: 20px auto;
    }
    .linkBox div:first-child{
        border-bottom: 1px solid;
        padding: 5px;
    }
    .linkBox p{
        font-size: 15px;
        padding: 10px;
    }
    .linkBox p a{
        color: #999999;
    }
    .linkBox p:hover a{
        color: red;
    }
    .linkBox p:hover{
        text-decoration: underline;
    }
    .righgImgBox{
        width: 100%;
        height: auto;
    }
    .artPage{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
    }
    .artBox{
        width: 1200px;
        height: auto;
        margin-top: 140px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
    .artLeft{
        width: 750px;
        height: auto;
    }
    .artRight{
        width: 360px;
        height: 700px;
    }
    .artRightNav{
        width: 100%;
        height: 192px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .artNavItem{
        width: 102px;
        height: 102px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        font-size: 15px;
        color: #000;
        cursor: pointer;
        border: 1px solid #F8B3D0;
        background-color: #FFF5FA;
    }
    .artNavItem span{
        transition: .5s linear;
    }
    .artNavItem:hover span{
        transform: rotate(360deg);
    }
    .shareTec{
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        line-height: 36px;
        color: #333;
        border-bottom: #6c517a 4px solid;
    }
</style>