$(document).ready(function(){

    $('.left-nav').click(function(){
        $("#general-rollover").carousel('prev');
    });

    $(".right-nav").click(function(){
        $("#general-rollover").carousel('next');
    });

    $(".first").click(function(){
        $("#general-rollover").carousel(0);
    });

    $(".second").click(function(){
        $("#general-rollover").carousel(1);
    });
    $(".third").click(function(){
        $("#general-rollover").carousel(2);
    });

    $(".fourth").click(function(){
        $("#general-rollover").carousel(3);
    });

    $(".fifth").click(function(){
        $("#general-rollover").carousel(4);
    });

});