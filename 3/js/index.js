$(document).ready(function(){
    function nextAni(){
        $(".img_box").not(":animated").animate({"margin-left":"-70vw"}, 800, function(){
            $(".img_box li").eq(0).appendTo(".img_box");
            $(".img_box").css("margin-left", "0");
            $(".img_btn_box button").eq(0).appendTo(".img_btn_box");
            $(".img_btn_box button").eq(0).addClass("on");
            $(".img_btn_box button").eq(0).siblings().removeClass("on");

        });
    }

    function prevAni(){
        var len = $(".img_box li").length();
        $(".img_box li").eq(len).prependTo(".img_box");
        $(".img_box li").css("margin-left", "-70vw");
        $(".img_box").not(":animated").animate({"margin-left":"0"}, 800);
    }


    var intv = setInterval( function(){ nextAni(); }, 3000 );

    $(".img_btn_box button").click(function(){
        var idx = $(this).index();
        if(idx != 0){
            for(var i=0; i<idx-1; i++){
                $(".img_box li").eq(i).appendTo($(".img_box"));
                $(".img_btn_box button").eq(i).appendTo($(".img_btn_box"));
            }
        }
    });
});