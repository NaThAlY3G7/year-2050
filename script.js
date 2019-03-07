$(".main").click(function(){
    var input= parseInt($(".3").val());
    var text= "test";
    var yourname = $('.1').val();
    var yourfavoritefruit = $('.2').val();
    var times = $('.3').val();
    
    var fullthing;
    fullthing= yourname+" by year 2050 you will have eaten " +input*1609+ " " +yourfavoritefruit+"s";
    var fruit= fruit;
    $(".result").text(fullthing);    
});

