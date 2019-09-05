<template>
    <div class="artItems">
        <div class="imgBox">
            <img v-if="types === 'python'" src="../../../static/images/python_icon.jpg" alt="">
            <img v-else-if="types ==='H5'" src="../../../static/images/h5_icon.jpg" alt="">
            <img v-else-if="types === 'MySQL'" src="../../../static/images/mysql_icon.jpg" alt="">
            <img v-else-if="types === 'Linux'" src="../../../static/images/php_img.png" alt="">
        </div>
        <div class="contentBox">
            <h3>{{title}}</h3>
            <p>{{content}}</p>
            <div class="changeArticles">
                <div>{{date}}</div>
                <div class="chanings" v-if="changeLogin == 1">
                    <div @click.stop="delArticle(id)">删除</div>
                    <div @click.stop="changeArticles(id)">修改</div>
                </div>
            </div>

        </div>
        <div @click.stop>
            <el-dialog
                    title="提示"
                    :visible="dialogVisible"
                    width="30%"
                    :modal="false"
                    :modal-append-to-body="false"
            >
                <span>确认删除{{ title }}吗？</span>
                <span slot="footer" class="dialog-footer">
                <el-button @click.stop="cancelDel">取 消</el-button>
                <el-button type="primary" @click.stop="delSure(id)">确 定</el-button>
            </span>
            </el-dialog>
        </div>

    </div>
</template>

<script>

    import { mapGetters } from 'vuex'

    export default {
        name: "AllArticleItem",
        props:['title', 'types', 'content', 'date', 'id'],
        data() {
          return {
              dialogVisible: false
          }
        },
        methods: {
            cancelDel: function() {
                this.dialogVisible = false;
            },
            delSure: function(id) {
                this.$store.dispatch('delArticle', id);
                this.dialogVisible = false;
            },
            delArticle:function (id) {
                console.log(id);
                this.dialogVisible = true;
            },
            changeArticles:function (id) {
                console.log(id);
            }
        },
        computed:{
            ...mapGetters(['changeLogin']),
        },
    }
</script>

<style scoped>
    .chanings div:hover{
        color: red;
    }
    .chanings{
        display: flex;
        flex-direction: row;

    }
    .chanings div:first-child{
        margin-right: 10px;
    }
    .contentBox h3{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .contentBox p:nth-child(2){
        font-size: 14px;
        height: 66px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        -webkit-box-orient: vertical;
        color: #999999;
    }
    .changeArticles{
        margin: 10px 0;
        color: #999;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .contentBox{
        width: 530px;
        height: auto;
        position: relative;
    }
    .artItems{
        height: auto;
        width: 100%;
        position: relative;
        display: flex;
        justify-content: space-between;
        cursor: pointer;

    }
    .imgBox{
        width: 167.5px;
        height: 137px;
    }
    .imgBox img{
        width: 100%;
        height: 100%;
    }
</style>