export function setCookie(name, value, days) {
    let date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + date
}

export function getCookie(name) {
    let arr = document.cookie.replace(/\s/g, "").split(';');
    for (let i = 0; i < arr.length; i++) {
        let tempArr = arr[i].split('=');
        if (tempArr[0] === name) {
            return decodeURIComponent(tempArr[1]);
        }
    }
    return ''
}

export function delCookie(name) {
    //设置已过期，系统立刻删除cookie
    setCookie(name, '1', -1)
}