const state = {
    counts: 0, // 测试
    homeNavSelect: "",    // 首页导航栏点击后修改样式
    countArr: [],
    articlessArr: [], // 首页推荐文章数组
    allArticles: [
        {title: "fsagfsg", content: "daf", date: "2018-08-08", id: 110, types: "python"},
        {title: "fsagfsg", content: "daf", date: "2018-08-08", id: 2, types: "python"},
        {title: "fsagfsg", content: "daf", date: "2018-08-08", id: 1, types: "python"},
        {title: "fsagfsg", content: "daf", date: "2018-08-08", id: 3, types: "python"},
        {title: "fsagfsg", content: "daf", date: "2018-08-08", id: 4, types: "python"},
        {title: "fsagfsg", content: "daf", date: "2018-08-08", id: 5, types: "python"},
        {title: "fsagfsg", content: "daf", date: "2018-08-08", id: 6, types: "python"},
        {title: "fsagfsg", content: "daf", date: "2018-08-08", id: 7, types: "h5"},
        {title: "fsagfsg", content: "daf", date: "2018-08-08", id: 8, types: "H5"},
        {title: "fsagfsg", content: "daf", date: "2018-08-08", id: 9, types: "python"},
    ], // 所有文章数组
    typeArticle: [], // 指定分类文章数组
    articlePageObj:{
        articlePage: 1,
        articlePageSize: 5,
        allPage: 0
    }, // 文章分页展示
    commentsObj:{
        allPage: 0,
        commentsPageSize: 5,
        commentsPage: 1
    }, // 评论分页展示
    allCommentsArrs: [
        {id:0, headImg:"../../../static/images/img3.jpg", name: "吴亦凡", dates:"2019-08-08", contents: "我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容"},
        {id:1, headImg:"../../../static/images/img3.jpg", name: "吴亦凡", dates:"2019-08-08", contents: "我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容"},
        {id:3, headImg:"../../../static/images/img3.jpg", name: "吴亦凡", dates:"2019-08-08", contents: "我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容"},
        {id:4, headImg:"../../../static/images/img3.jpg", name: "吴亦凡", dates:"2019-08-08", contents: "我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容"},
        {id:5, headImg:"../../../static/images/img3.jpg", name: "吴亦凡", dates:"2019-08-08", contents: "我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容"},
        {id:6, headImg:"../../../static/images/img3.jpg", name: "吴亦凡", dates:"2019-08-08", contents: "我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容"},
        {id:7, headImg:"../../../static/images/img3.jpg", name: "无邪", dates:"2019-08-08", contents: "我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容"},
        {id:8, headImg:"../../../static/images/img3.jpg", name: "吴亦凡", dates:"2019-08-08", contents: "我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容"},
        {id:9, headImg:"../../../static/images/img3.jpg", name: "吴亦凡", dates:"2019-08-08", contents: "我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容"},
        {id:10, headImg:"../../../static/images/img3.jpg", name: "吴亦凡", dates:"2019-08-08", contents: "我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论容我是评论内容我是评论内容我是评论内容我是评论内容我是评论内容"},
    ], // 所有的评论数组
    commentsArrs: [], // 展示的评论数组
    touristObj:{
        randomName: "",
        header: ""
    }, // 游客信息
    allHeadImg: [
        "../../../static/images/gr_img3.jpg",
        "../../../static/images/gr_img3.jpg",
        "../../../static/images/gr_img4.jpg",
        "../../../static/images/gr_img4.jpg",
        "../../../static/images/gr_img3.jpg",
    ], // 游客随机头像
    changeLogin: 0, // 是否登录
    articleDetail: ""
};


export default state
