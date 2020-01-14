$(document).ready(function(){
    /* 스크롤시 옆으로 슬라이드 */
    $(".page").each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveLeft = $(window).scrollLeft();
            var elmSelecter = $(".page").eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveLeft = $(elmSelecter).next().offset().left;
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveLeft = $(elmSelecter).prev().offset().left;
                    }catch(e){}
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollLeft: moveLeft + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    }); 
    /* 스크롤시 옆으로 슬라이드 끝 */

    $(".pic").on("click", function(){
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    });



    /* 상하 슬라이더 */
    function downAni(){
        $(".sl_box").not(":animated").animate({"margin-top": "-100vh"}, 1000, function(){
            $(".sl_box li").eq(0).appendTo(".sl_box");
            $(".sl_box").css("margin-top", "0");
            $(".sl_box li").eq(0).find("*").addClass("on");
            $(".sl_box li").eq(0).siblings().find("*").removeClass("on");
        });
    }
    function upAni(){
        var len = $(".sl_box li").length;
        console.log(len);
        $(".sl_box li").eq(len-1).prependTo(".sl_box");
        $(".sl_box").css("margin-top", "-100vh");
        $(".sl_box").not(":animated").animate({"margin-top" : "0"}, 1000);
        $(".sl_box li").eq(0).find("*").addClass("on");
        $(".sl_box li").eq(0).siblings().find("*").removeClass("on");
    }
    $(".sl_up_btn").on("click", function(){
        upAni();
    });
    $(".sl_down_btn").on("click", function(){
        downAni();
    });
    /*  */
    
});