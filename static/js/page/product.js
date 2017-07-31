$(document).ready(function(){
    new navScroll({
        resizeWrap : {           //调整布局功能，不需要此功能，此代码块可以删除
            wrap : 'wrap',       //外容器ID
            maxWidth : 600       //窗口小于多少PX调整布局，不需要此功能，参数可以删除
        },
        nav : {                  //导航跳转功能，不需要可以删除此代码块
            id : 'navigation',   //点击跳转到容器的导航ID 请把 ID 设置给 UL 
            current : 'current', //默认点击A链接后，默认样式名
            speed : 25,          //动画执行速度，越小则越快。反之，越慢。
            fixPx :40            //在导航使用绝对定位且在窗口上方，容器与导航的差,默认为0
        }
    });
})