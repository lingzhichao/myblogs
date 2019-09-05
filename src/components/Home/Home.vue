<template>
    <div class="homeContainer">
        <div class="homeHeader">
            <div class="bannerBox">
                <div class="titles">
                    <h3>
                        MY <br>
                        Blog
                    </h3>
                    <h4>well-balanced heart</h4>
                </div>
            </div>
        </div>
        <div class="homeBox">
            <div class="articleNav">
                最新文章
            </div>
            <div class="contentContainer">
                <div v-for="(item, index) in articlessArr" :key="index" @click="toDetail(item.id)" >
                    <ArticleItem
                            :imgSrc="item.imgSrc"
                            :title="item.title"
                            :type="item.types"
                            :articleContent="item.content"
                            :articleDate="item.date"
                    />
                </div>
                <div class="toMore" @click="moreClick">查看更多>></div>
            </div>
        </div>
    </div>
</template>


<script>
    import Comments from './Comments'
    import ArticleItem from './ArticleItem'
    import { mapGetters } from 'vuex'


    export default {
        name: "Home",
        data(){
            return{
                value2: 0,
                // articlessArr: [
                //     {imgSrc: '../../../static/images/sy_img1.jpg', title: '我是标题', articleDate: '2018-09-21', articleContent: '我是内容我是内容我是内容我是内容', types: '前端'},
                //     {imgSrc: '../../../static/images/sy_img2.jpg', title: '我是标题', articleDate: '2018-09-21', articleContent: '我是内容我是,内容我是内我容我是,内容我是内我容我是,内容我是内我容我是,内容我是内我是内,容我是内我是内，容我是内我是内容我是内我是内容我是内容我是内容', types: '前端'},
                //     {imgSrc: '../../../static/images/sy_img3.jpg', title: '我是标题', articleDate: '2018-09-21', articleContent: '我是内容我是内容我是内容我是内容', types: '前端'},
                //     {imgSrc: '../../../static/images/sy_img1.jpg', title: '我是标题', articleDate: '2018-09-21', articleContent: '我是内容我是内容我是内容我是内容', types: '前端'},
                //     {imgSrc: '../../../static/images/sy_img2.jpg', title: '我是标题', articleDate: '2018-09-21', articleContent: '我是内容我是内容我是内容我是内容', types: '前端'},
                // ]
            }
        },
        created() {
            this.$store.dispatch('navStyleBtn', '动态');
        },
        mounted() {
          this.getAllArticle();
        },
        methods: {
            toDetail: function (index) {
                this.$store.dispatch('articleDetail', index);
                this.$router.push({name: 'ArticleDetail'});
            },
            toBoard:function (index) {
                // this.$router.push({name: 'Home', id:index})
            },
            getAllArticle: function (name) {
                this.$store.dispatch('getAllArticle');
            },
            moreClick: function () {
                this.$router.push({name: 'ArticlePage'});
                this.$store.dispatch('navStyleBtn', '博文');
            }
        },
        computed:{
            ...mapGetters(['articlessArr']),
        },
        components:{
            Comments,
            ArticleItem
        }
    }
</script>

<style scoped>
    .toMore{
        width: 100px;
        height: 30px;
        border-radius: 20px;
        line-height: 30px;
        text-align: center;
        float: right;
        color: black;
        margin-top: 20px;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .toMore:hover{
        color: red;
    }
    .articleNav{
        width: 1000px;
        margin: 0 auto;
        color: red;
        font-size: 15px;
    }
    .bannerBox .titles h3 {
        font-size: 60px;
    }
    .bannerBox .titles h4 {
        font-size: 46px;
    }
    .titles{
        color: #fff;
        position: absolute;
        top: 122px;
        left: 60px;
    }
    .bannerBox{
        width: 1200px;
        height: 100%;
        position: relative;
        margin: 0 auto;
    }


    .thirds img{
        width: 73px;
        height: 73px;
        display: block;
        margin-left: 50px;
    }

    .titleName a{
        margin-left: 28px;
    }
    .seconds a{
        margin-left: 15px;
    }
    .itemTextBox p:first-child{
        font-size: 20px;
        font-weight: bold;
        color: #000;
    }
    .itemTextBox p:nth-child(2){
        padding-top: 5px;
    }
    .itemTextBox p:nth-child(3){
        max-height: 55px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 17px;
        color: #000;
    }

    .itemImg img{
        width: 100%;
        height: 100%;
        transition: .2s linear;
    }
    .itemContents:hover .itemTextBox p:first-child{
        color: red;
    }
    .itemContents:hover .itemImg img{
        transform: scale(1.1);
    }
    .contentContainer{
        width: 1000px;
        height: auto;
        position: relative;
        margin: 0 auto;
    }
    .homeContainer{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /*background: url("../../../static/images/bg_b.png") no-repeat;*/
        /*background-size: 100% 100%;*/
        /*background-position:center;*/
    }
    .homeBox{
        width: 1200px;
        height: auto;
        position: relative;
    }
    .homeHeader{
        max-width: 1920px;
        width: 100%;
        margin: 120px auto;
        height: 600px;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: url("../../../static/images/banner.jpg") no-repeat;
        background-position: center;
        background-size: 1920px 600px;
    }
</style>