<template>
    <div class="commetContainer">
        <div class="commeterHead" :style="{backgroundImage: headImg}"></div>

        <div class="commeterContent">
            <div class="commetTitle">
                <div class="commeterText">
                    {{name}}
                </div>
                <div class="commetDate">
                    {{dates}}
                </div>
            </div>
            <div class="commetContents">
                {{contents}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommentItem",
        props:['headImg', 'name', 'dates', 'contents']
    }
</script>

<style scoped>
    .commetContainer{
        width: 100%;
        height: auto;
        padding: 40px 0 30px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #e5e5e5;
        cursor: pointer;
    }
    .commeterHead{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: relative;
        background: url("../../../static/images/img2.jpg") no-repeat;
        background-size: 100% 100%;
        background-position: center;
    }
    .commeterContent{
        width: 900px;
        height: auto;
        position: relative;
    }
    .commetTitle{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: black;
        font-size: 16px;
        margin-bottom: 20px;
        margin-top: 5px;
    }
    .commetContents{
        width: 100%;
        height: auto;
        font-size: 15px;
    }
</style>