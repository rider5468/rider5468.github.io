$(document).ready(function(){
    /* 옆으로 슬라이드 */
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
    /* 옆으로 슬라이드 끝 */

    // $(".page").each(function (index){
    //     console.log($(".page").eq(index).offset().left);
    //     $("#gnb .menu button").eq(index).on("click", function(){
    //         var moveLeft = $(window).scrollLeft();
    //         var elmSelecter = $(".page").eq(index);
    //         moveLeft = elmSelecter.offset().left;
    //     });
    // }

    $(".page2_btn").on("click", function(){
        $(".page2_box1").fadeToggle(1000);
        $(".page2_box2").fadeToggle(1000);
        $(this).toggleClass("on");
    });

});