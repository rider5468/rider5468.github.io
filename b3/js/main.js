//제이쿼리 세팅
$(document).ready(function(){
//다음으로 넘어가는 애니메이션 설정
    function nextAni(){
        $(".img_box").not(":animated").animate({"margin-left":"-1980px"},500,function(){
            $(".img_box li").eq(0).appendTo($(".img_box"));
            $(".img_box").css("margin-left","0px");
        });
    };
//이전으로 돌아가는 애니메이션 설정
    function prevAni(){
        $(".img_box li").eq(2).prependTo($(".img_box"));
        $(".img_box").css("margin-left","-1980px");
        $(".img_box").not(":animated").animate({"margin-left":"0px"},500);
    };

//인터발 설정 (자동실행)
    var intv = setInterval(function(){nextAni();},2900);
    
//래프트버튼 눌렀을 때 뒤의 intv은 추가 동작이 없을 경우 자동으로 설정한 setInterval이 실행되게 하는 것
    $(".left_btn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function(){nextAni();},2900);
    });
//라이트버튼 눌렀을 때
    $(".right_btn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function(){nextAni();},2900);
    });
});