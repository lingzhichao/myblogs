<template>
    <div class="artPage">
        <div class="artBox">
            <div class="artLeft">
                <div class="shareTec">技术分享</div>
                <div class="noArticle" v-if="typeArticle.length === 0">
                    博主太懒了,暂无文章!
                </div>
                <div @click="toDetail(items.id)" v-else v-for="(items, index) in typeArticle" :key="index" class="blogsArt">
                    <AllArticleItem
                            :types="items.types"
                            :title="items.title"
                            :content="items.content"
                            :date="items.date"
                            :id="items.id"
                    />
                </div>
                <div class="pagingBox" v-if="allPage >= 5">
                    <el-pagination
                            :background="true"
                            layout="prev, pager, next"
                            :total="allPage"
                            :page-size="pageSize"
                            @current-change="changePage"
                            :current-page="nowPage"
                    >
                    </el-pagination>
                </div>
            </div>
            <div class="artRight">
                <div class="artRightNav">
                    <div class="searchBox">
                        <Input
                                search
                                placeholder="您可以在此搜索文章"
                                v-model="search"
                                @on-enter="toSearch"
                                @on-change="toSearch"
                        />
                    </div>
                    <div class="artNavItem" v-for="(item, index) in artNav" :key="index" @click="getArticles(item.name)">
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>
        </div>
        <BackTop :bottom="40" :height="500"/>

    </div>
</template>

<script>

    import { mapGetters } from 'vuex'
    import AllArticleItem from './AllArticleItem';

    export default {
        name: "ArticlePage",
        data() {
            return {
                // artNav: ['python', '前端', 'MySQL', 'Linux'],
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
            this.getAllArticles();
        },
        methods: {
            toDetail: function(id) {
                this.$store.dispatch('articleDetail', id);
                this.$router.push({name: 'ArticleDetail'});
            },
            getAllArticles: function() {
                this.$store.dispatch('getAllArticle');
            },
            toSearch:function() {
                if (this.search !== ''){
                    this.$store.dispatch('searchArticle', this.search);
                    return
                }
                this.getAllArticles();
            },
            getArticles: function (name) {
                this.$store.dispatch('getArticle', name);
            },
            // 页面切换函数，page是当前页数
            changePage:function (page) {
                this.$store.dispatch('changePage', page);
                // console.log(`${page}`);
            }
        },
        computed:{
            ...mapGetters(['typeArticle', 'nowPage', 'allPage', 'pageSize', 'allTypeArticle']), //  动态计算属性，相当于this.$store.getters.counts
        },
        components: {
            AllArticleItem
        }
    }
</script>

<style scoped>
    .noArticle{
        margin-top: 20px;
    }
    .searchBox{
        width: 100%;
        height: auto;
        margin-top: 30px;
        margin-bottom: 20px;
    }
    .pagingBox{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
    }
    .blogsArt{
        width: 100%;
        padding: 30px 0;
        height: auto;
        position: relative;
        border-bottom: #6c517a 1px solid;
        margin-bottom: 30px;
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
        width: 300px;
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