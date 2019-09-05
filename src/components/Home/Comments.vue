<template>
    <div class="commentsContaienr">
        <div class="comentHeader">
            <img src="../../../static/images/img3.jpg" alt="">
        </div>
        <div class="commentsContent">
            <p>我是姓名</p>
            <span>这里是评论内容里是评论内容里是评论内容里是评论内容里是评论内容里是评论内容里是评论内容</span>
            <p>2018-08-09</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Comments",
        props: ['name', 'content', 'commentDate']
    }
</script>

<style scoped>
    .commentsContaienr{
        width: 290px;
        height: 91px;
        position: relative;
        border-top: 1px solid #ccc;
        margin-top: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .comentHeader{
        margin-top: 10px;
    }
    .comentHeader img{
        width: 50px;
        height: 50px;
        border-radius: 5px;
    }
    .commentsContent{
        position: relative;
        width: 75%;
        margin-left: 15px;
        margin-top: 8px;
        cursor: pointer;
    }
    .commentsContent p:first-child{
        color: #d32;
        font-size: 15px;
        font-weight: 600;
    }
    .commentsContent span{
        max-height: 60px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 14px;
    }
    .commentsContent:hover span{
        text-decoration: underline;
        color: #000;
    }
</style>