import {setCookie, getCookie, delCookie} from '../assets/cookie'
import axios from 'axios'
import qs from 'qs'

function getDates() {
    Date.prototype.format = function(fmt) {
        let o = {
            "M+" : this.getMonth()+1,
            "d+" : this.getDate(),
            "h+" : this.getHours(),
            "m+" : this.getMinutes(),
            "s+" : this.getSeconds(),
            "q+" : Math.floor((this.getMonth()+3)/3),
            "S"  : this.getMilliseconds()
        };
        if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length))
        }
        for(var k in o) {
            if(new RegExp("("+ k +")").test(fmt)){
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)))
            }
        }
        return fmt
    };
    // let nowDate = new Date().format("yyyy-MM-dd")  这是使用方法 获取当前时间
}

function getall(state) {
    state.commentsObj.commentsPage = 1;
    state.commentsArrs = state.allCommentsArrs;
}

// 将游客信息存入cookie
function setNameCookie(state) {
    setCookie('touris', JSON.stringify(state.touristObj), 1);
  console.log(2222222222222222222)

}

// 获取游客姓名并存入state池
function getNameCookie(state) {
    state.touristObj.randomName = getCookie('name');
}

export const modify = (state, counts)=> {
    state.counts = counts
};

export const navStyleBtn = (state, homeNavSelect)=> {
    state.homeNavSelect = homeNavSelect
};

export const getArticle = (state, typeArticle) =>{
    state.typeArticle = [];
    state.articlePageObj.articlePage = 1;
    for (let i = 0; i < state.allArticles.length; i++) {
        let item = state.allArticles[i];
        if (item.types === typeArticle) {
            state.typeArticle.push(item);
        }
    }
};

export const changePage = (state, num) => {
    state.articlePageObj.articlePage = num;
};

export const searchArticle = (state, searchValue)=> {
    // 这里需要请求接口模糊查询,把结果赋值给typeArticle数组
    state.articlePageObj.articlePage = 1;

    state.typeArticle = [
        {title: 'dadfafdsfs', content: 'sdadafasfsdaf', date: '2018-08-08', id: 0, types: 'python'}
    ]
};

export const getAllArticle = (state)=> {
    // 这里请求接口获取所有文章
    state.articlePageObj.articlePage = 1;
    state.typeArticle = state.allArticles;
};

export const getAllcomments = (state)=> {
    // 这里请求接口获取所有评论

    getall(state);

    // state.commentsObj.commentsPage = 1;
    // state.commentsArrs = state.allCommentsArrs;
};


export const commentsChange = (state, num) => {
    state.commentsObj.commentsPage = num;
};

export const randomName = (state) => {
    getDates();
    let newNowTime = new Date(Number(new Date()));
    let newTime = newNowTime.toTimeString().substr(0, 8).split(':').join('');
    let nowDate = new Date().format("yyyy-MM-dd").split('-').join('');
    let x = nowDate + newTime;
    let y = parseInt(Math.random() * 10 + 1);
    state.touristObj.randomName = `游客${x}${y}`;
    state.touristObj.header = state.allHeadImg[ y - 1 ];
    console.log(1111111111111111)
    setNameCookie(state)
};

export const uploadComments = (state, values) => {
    // 这里请求接口， 接口应返回所有评论  然后赋值
    getDates();
    getNameCookie(state);
    let nowDate = new Date().format("yyyy-MM-dd");  //这是使用方法 获取当前时间
    let commentContent = {
        name: state.touristObj.randomName,
        date: nowDate,
        content: values
    };
    console.log(commentContent);
    getall(state);
};



export const logins = (state, data) => {
    let datas = qs.stringify(data);

    // axios.post('http://api.tianapi.com/meinv/', datas).then((res)=>{
    axios.get('http://api.tianapi.com/meinv/', {params: data}).then((res)=>{
        console.log('登录成功!');
      state.changeLogin = 1;
      setCookie('isLogin', state.changeLogin ,1 );
      delCookie('touris'); // 删除游客信息

    }).catch(()=>{
        console.log('请求失败');
    });
};

// 提交文章
export const postfillContent = (state, data) => {
    getDates();
    let nowDate = new Date().format("yyyy-MM-dd");
    data.date = nowDate;
    // 这里应直接请求接口，将时间、姓名、内容提交，接口返回标题、内容等
    // data.id = 7;
    // data.title = 'python学习';
    // state.allArticles.push(data);
    // state.articleDetail = data;
    console.log(data);
    // console.log(state.allArticles);

    return
    let datas = qs.stringify(data);
    axios.post('http://api.tianapi.com/meinv/', datas).then((res)=>{
        // axios.get('http://api.tianapi.com/meinv/', {params: data}).then((res)=>{
        console.log(111111111111)

    }).catch(()=>{
        console.log('请求失败');
    });
};

// 改变登录状态
export const changeLogin = (state, data) => {
    state.changeLogin = getCookie('isLogin');
};

// 删除文章
export const delArticle = (state, id) => {
    // 这里请求接口  接口返回所有文章列表  id为要删除文章的唯一id
    console.log('删除成功!', id);
};

// 修改文章
export const modifyArticle = (state, data) => {
    // 这里请求接口  接口返回所有文章  data为要文章信息
    console.log('修改成功!', data);
};

// 获取文章详情
export const articleDetail = (state, id) => {
    // 这里请求接口  接口返回所有文章  data为要文章信息
    for (let i=0; i< state.allArticles; i++){
        let item = state.allArticles[i];
        if (item.id == id) {
            state.articleDetail = item;
            console.log(1111111111)
        }
    }
    console.log(2222222222222)
};
