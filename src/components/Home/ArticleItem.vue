<template>
    <div class="itemBox">
        <div class="imgBox">
            <img v-if="type === 'python'" src="../../../static/images/python_icon.jpg" alt="">
            <img v-else-if="type ==='H5'" src="../../../static/images/h5_icon.jpg" alt="">
            <img v-else-if="type === 'MySQL'" src="../../../static/images/mysql_icon.jpg" alt="">
            <img v-else-if="type === 'Linux'" src="../../../static/images/php_img.png" alt="">
        </div>
        <div class="articleItem">
            <h3>
                {{title}}
            </h3>
            <h5>{{type}}</h5>
            <p>{{articleContent}}</p>
            <p class="p2">{{articleDate}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleItem",
        props: ['imgSrc', 'title', 'type', 'articleContent', 'articleDate']
    }
</script>

<style scoped>
    .p2{
        color: #cccccc !important;
    }
    .itemBox:hover{
        box-shadow: 0 2px 3px 3px #ebebeb;
    }
    .itemBox:hover .imgBox img{
        transform: scale(1.1);
    }
    .itemBox{
        width: 100%;
        height: 280px;
        margin: 45px auto;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        cursor: pointer;
        position: relative;

    }
    .imgBox{
        width: 416px;
        height: 280px;
        overflow: hidden;
        position: relative;
    }
    .imgBox img{
        width: 100%;
        height: 100%;
        display: block;
        margin: 0 auto;
        transition: .3s linear;
    }
    .articleItem{
        width: 483px;
        height: 220px;
        position: relative;
    }
    .articleItem h3{
        font-size: 24px;
        margin: 20px 0;
        color: #000;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .articleItem h5{
        font-size: 12px;
        color: #ff7f21;
        margin-bottom: 32px;
    }
    .articleItem p{
        font-size: 14px;
        height: 60px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        -webkit-box-orient: vertical;
        color: #000;
        margin-bottom: 20px;
    }
</style>