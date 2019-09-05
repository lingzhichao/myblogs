export function modify({commit}, counts) {
    return commit('modify', counts)
}


export function navStyleBtn({commit}, titles) {
    return commit('navStyleBtn', titles)
}

// 点击各个分类获得相应文章
export function getArticle({commit}, types) {
    return commit('getArticle', types)
}

// 切换文章页数
export function changePage({commit}, num) {
    return commit('changePage', num)
}

// 搜索文章
export function searchArticle({commit}, searchValue) {
    return commit('searchArticle', searchValue)
}

// 请求接口获取所有文章
export function getAllArticle({commit}) {
    return commit('getAllArticle')
}

// 切换评论页数
export function commentsChange({commit}, num) {
    return commit('commentsChange', num)
}

// 请求接口获取所有评论
export function getAllcomments({commit}) {
    return commit('getAllcomments')
}

// 以时间戳命名区别游客信息
export function randomName({commit}) {
    return commit('randomName')
}

// 提交评论
export function uploadComments({commit}, values) {
    return commit('uploadComments', values)
}


// 验证登录信息
export function logins({commit}, values) {
    return commit('logins', values)
}

// 提交博文
export function postfillContent({commit}, values) {
    return commit('postfillContent', values)
}

// 是否登录
export function changeLogin({commit}, ) {
    return commit('changeLogin')
}

// 删除文章
export function delArticle({commit}, id) {
    return commit('delArticle', id)
}

// 修改文章
export function modifyArticle({commit}, data) {
    return commit('modifyArticle', data)
}

// 获取文章详情
export function articleDetail({commit}, id) {
    return commit('articleDetail', id)
}




