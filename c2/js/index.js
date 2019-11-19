$(document).ready(function(){
  function nextAni(){
      $(".img_box").not(":animated").animate({"margin-left":"-1920px"},500, function(){
          $(".img_box li").eq(0).appendTo($(".img_box"));
          $(".img_box").css("margin-left", "0px");
      });
  }
    function prevAni(){
        $(".img_box li").eq(2).prependTo($(".img_box"));
        $(".img_box").css("margin_left","-1920px");
        $(".img_box").not(":animated").animate({"margin-left":"0px"},500);
    }
    
    var intv = setInterval(function(){
        nextAni();
    },2900);
})