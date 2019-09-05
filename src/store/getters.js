import {setCookie, getCookie, delCookie} from '../assets/cookie'


export const counts = state=> state.counts;

export const homeNavSelect = state => state.homeNavSelect;

export const articlessArr = state => state.allArticles.slice(0,5);

export const typeArticle = state => {
    if (state.typeArticle.length > state.articlePageObj.articlePageSize){
        state.articlePageObj.articlePageSize = 5;
    } else {
        state.articlePageObj.articlePageSize = state.typeArticle.length ;
    }
    let start = (state.articlePageObj.articlePage-1) * state.articlePageObj.articlePageSize;
    let end = state.articlePageObj.articlePage * state.articlePageObj.articlePageSize;
    return state.typeArticle.slice(start,end);
};

export const nowPage = state => state.articlePageObj.articlePage;

export const pageSize = state => state.articlePageObj.articlePageSize;

export const allPage = state => {
    state.articlePageObj.allPage = state.typeArticle.length;
    return state.articlePageObj.allPage;
};

export const commentsPageSize = state =>{
    return state.commentsObj.commentsPageSize;
} ;

export const commetsNowPage = state => state.commentsObj.commentsPage;

export const commetsAllPage = state => {
    state.commentsObj.allPage = state.allCommentsArrs.length;
    return state.commentsObj.allPage;
};

export const commentsArrs = state => {
    if (state.commentsArrs.length > state.commentsObj.commentsPageSize){
        state.commentsObj.commentsPageSize = 5;
    } else {
        state.commentsObj.commentsPageSize = state.commentsArrs.length;
    }
    let start = (state.commentsObj.commentsPage-1) * state.commentsObj.commentsPageSize;
    let end = state.commentsObj.commentsPage * state.commentsObj.commentsPageSize;
    return state.commentsArrs.slice(start,end);
};

export const randomName = state => state.touristObj.randomName;

export const touris = () => {
    let tourisInfos = JSON.parse(getCookie('touris'));
    return tourisInfos
};

export const changeLogin = state => state.changeLogin;

export const articleDetail = state => state.articleDetail;
