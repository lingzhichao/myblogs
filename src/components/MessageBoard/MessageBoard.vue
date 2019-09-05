<template>
    <div class="msgContainer">
        <div class="msgBox">
            <div class="imgBox"><img src="../../../static/images/liuyan.jpg" alt=""></div>
            <div class="textBox" v-if="changeLogin == 0">
                <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="既然来了，就说几句"
                        v-model="textareas">
                </el-input>
                <div class="textSure">
                    <el-button type="primary" @click="sureSubmut">确认</el-button>
                </div>
            </div>
            <div v-else class="textBox allComments">所有留言:</div>
            <div class="allMsgContainer">
                <div v-for="(item, index) in commentsArrs" :key="index">
                    <CommentItem
                            :headImg="item.headImg"
                            :name="item.name"
                            :dates="item.dates"
                            :contents="item.contents"
                    />
                </div>
            </div>
            <div  class="pagingBox">
                <el-pagination
                        layout="prev, pager, next"
                        :total="commetsAllPage"
                        :page-size="commentsPageSize"
                        @current-change="changePages"
                        :current-page="commetsNowPage"
                >

                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>

    import CommentItem from './CommentItem'
    import { mapGetters } from 'vuex'


    export default {
        name: "MessageBoard",
        data() {
            return {
                textareas: '',
                commeetsArr: []
            }
        },
        created() {
            this.$store.dispatch('navStyleBtn', '留言');
        },
        mounted() {
            this.getAllcomments()
        },
        computed: {
            ...mapGetters(['commentsArrs', 'commetsNowPage', 'commetsAllPage', 'commentsPageSize', 'changeLogin']),
        },
        methods: {
            sureSubmut: function () {
                if (this.textareas === '') {
                    this.$Notice.error({
                        title: '留言不能为空',
                        desc: '要留言便留言，何故欲擒故纵，奴家不吃这一套！ ',
                        duration: 3
                    });
                    return
                }
                this.$store.dispatch('uploadComments', this.textareas);
            },
            changePages: function (pages) {
                this.$store.dispatch('commentsChange', pages);
            },
            getAllcomments: function() {
                this.$store.dispatch('getAllcomments');
            },
        },
        components: {
            CommentItem
        }
    }
</script>

<style scoped>
    .allComments{
        font-size: 16px;
        font-weight: bold;
        border-bottom: 2px solid #3f2863;
        line-height: 30px;
    }
    .pagingBox{
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 30px;
    }
    .textSure{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
    }
    .textBox{
        width: 100%;
        height: auto;
        position: relative;
        margin: 30px auto;
    }
    .textBox textarea{
        width: 100%;
        height: auto;
    }
    .imgBox{
        width: 100%;
        height: 300px;
        position: relative;

    }
    .imgBox img{
        width: 100%;
        height: 100%;
    }
    .msgContainer{
        width: 100%;
        height: auto;
        position: relative;
        display: flex;
        justify-content: center;
    }
    .msgBox{
        width: 1000px;
        height: auto;
        position: relative;
        margin-top: 160px;
        margin-bottom: 50px;
    }
</style>