// JavaScript Document

jQuery(document).ready(function() {
 $(".nav>li").mouseover(function(){
  $(this).children(".submenu").stop().slideDown();
  });
 $(".nav>li").mouseleave(function(){
  $(this).children(".submenu").stop().slideUp();
 });

 $(".partner img").click(function (){
    $("#modal").addClass("active");
 });
 $("#modal button").click(function (){
    $("#modal").removeClass("active");
 });

});
   
$( ".btn_slides_next" ).click(function() {
    if(!$("#slides li").last().is(":visible")){
        $("#slides li:visible").hide().next("li").fadeIn("40");
        $(".btn_slides_prev").removeClass("off");
    }
    if($("#slides li").last().is(":visible")){
        $('.btn_slides_next').addClass('off');
    }
    return false;
});

$( ".btn_slides_prev" ).click(function() {
    if(!$("#slides li").first().is(":visible")){
        $("#slides li:visible").hide().prev("li").fadeIn("40");
        $(".btn_slides_next").removeClass("off");
    }
    if($("#slides li").first().is(":visible")){
        $('.btn_slides_prev').addClass('off');
    }
    return false;
});
