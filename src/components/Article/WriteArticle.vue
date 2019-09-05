<template>
    <div class="articleContainer">
        <div class="backList">
            <span @click="backArticlList"><< 返回文章列表 </span>
        </div>
        <div class="articleBox">
            <div id="editor" class="editor"></div>
            <div class="btnBoxs">
                <el-button type="primary" @click="postfillContent" size="small" class="btn1">保存</el-button>
            </div>
        </div>
<!--        <div class="contents"></div>-->
    </div>
</template>

<script>

    import E from 'wangeditor'
    import ArticlePage from "./ArticlePage";

    export default {
        name: "WriteArticle",
        data() {
          return {
              formArticle: '',
              editor: '',
              type: ''
          }
        },
        created() {
            this.$store.dispatch('navStyleBtn', '博文');
        },
        mounted() {
            this.editor = new E('#editor');
            this.editor.customConfig.onchange = (html) => {
                this.formArticle = html;
                // $('.contents').html(html);
            };
            this.editor.customConfig.menus = [          // 菜单配置
                'head',  // 标题
                'bold',  // 粗体
                'fontSize',  // 字号
                'fontName',  // 字体
                'italic',  // 斜体
                'underline',  // 下划线
                'strikeThrough',  // 删除线
                'foreColor',  // 文字颜色
                'backColor',  // 背景颜色
                'link',  // 插入链接
                'list',  // 列表
                'justify',  // 对齐方式
                'emoticon',  // 表情
                'image',  // 插入图片
                'table',  // 表格
                'code',  // 插入代码
                'undo',  // 撤销
                'redo',  // 重复
            ];
            this.editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
            this.editor.customConfig.uploadImgMaxLength = 5;
            this.editor.customConfig.uploadFileName = 'myFileName';
            this.editor.customConfig.pasteTextHandle = (content) => { //支持粘贴
                return content
            };
            this.editor.customConfig.uploadImgShowBase64 = true; //图片以base64形式保存
            this.editor.create();
            $('.w-e-text-container').css({
                height: '520px'
            });
        },
        methods: {
            postfillContent: function () {
                // if (this.type === '') {
                //     this.$message({
                //         showClose: true,
                //         message: '请选择文章分类！!',
                //         type: 'error'
                //     });
                //     return
                // }
                if (this.formArticle === '' || this.formArticle === '<p><br></p>') {
                    this.$message({
                        showClose: true,
                        message: '博文内容不能为空!',
                        type: 'error'
                    });
                    return
                }
                //  这里请求接口
                let data = {
                    content: this.formArticle,
                    type: 'python'
                };
                this.$store.dispatch('postfillContent', data);
                return
                this.clearContent();
            },
            clearContent: function () {
                this.editor.txt.clear();
                this.formArticle = '';
                this.editor = '';
                this.$router.push({name: 'ArticlePage'})
            },
            backArticlList: function () {
                this.clearContent();
            }
        }
    }
</script>

<style scoped>
    .btnBoxs{
        width: 1200px;
        position: relative;
        display: flex;
        justify-content: flex-end;
    }
    .btn1{
        margin-bottom: 20px;
    }
    .editor{
        width: 100%;
        height: auto;
        margin: 20px auto;
    }

    .backList{
        width: 1200px;
        line-height: 50px;
        font-size: 15px;
    }
    .backList span:hover {
        color: red;
        cursor: pointer;
    }
    .articleBox{
        z-index: 1;
        width: 1200px;
    }
    .articleContainer{
        margin-top: 120px;
        position: relative;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .contents{
        width: 1200px;
        position: relative;
        height: auto;
    }
</style>