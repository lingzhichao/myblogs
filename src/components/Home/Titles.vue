<template>
    <div class="titleBox" :style="{width: widths}">
        <span>{{titles}}</span>
    </div>
</template>

<script>
    export default {
        name: "Titles",
        props: ['titles', 'widths']
    }
</script>

<style scoped>
    .titleBox{
        height: 40px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-left: 2px solid blue;
        font-size: 16px;
        color: white;
        background: #6c517a;
    }
    .titleBox span{
        cursor: pointer;
        margin-left: 20px;
    }
</style>