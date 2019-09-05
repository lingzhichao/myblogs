class Snows{
    constructor(minSize, maxSize, time) {
        this.minSize = minSize;
        this.maxSize = maxSize;
        this.time = time;
    }
    start() {
        var flake = $('<div></div>').css('position', 'absolute').html('*'); //创建一个盒子,设置绝对定位,创建雪花放进去.
        var _this = this;
        setInterval(function() { //设置定时器
            var body = $("body"); //将body由dom元素转为jQuery对象
            var width = $(document).width(); //获取文档宽度
            var height = $(document).height(); //获取文档高度
            var startLeft = Math.random() * width; //设置雪花起始left位置
            var endLeft = Math.random() * width; //设置雪花结束left位置
            var flakeSize = _this.maxSize * Math.random(); //设置雪花大小
            var flakeOpacity = 0.3 + Math.random() * 0.3; //设置雪花透明度
            var endFlakeOpacity = 0.5 + Math.random() * 0.3; //设置运动雪花透明度
            var durationTime = 2000 * Math.random() + 10 * height; //设置运动执行时间
            flake.clone().appendTo(body).css({
                'left': startLeft,
                'font-size': flakeSize,
                'opacity': flakeOpacity,
                'color': "black",
                'top': "-50px"
            }).animate({
                    'left': endLeft,
                    'opacity': endFlakeOpacity,
                    'top': height
                },
                durationTime,
                function() {
                    $(this).remove(); //克隆雪花并把它放入文档中,设置雪花样式,起始大小,起始雪花透明度,起始雪花颜色,起始雪花位置.调用animate方法设置运动结束位置,运动结束透明度.运动执行时间.落地清除.
                });
        }, _this.time);
    }
}
export default Snows
