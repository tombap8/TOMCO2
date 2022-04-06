// JavaScript Document

var imgs = 4;
var now = 0;

jQuery(document).ready(function() {
   $(".nav>li").mouseover(function(){
	$(this).children(".submenu").stop().slideDown();
	});
   $(".nav>li").mouseleave(function(){
	$(this).children(".submenu").stop().slideUp();
   });
   
   start(); 
   
   $(".partner img").click(function (){
      $("#partner_up").addClass("active");
   });
   $("#partner_up button").click(function (){
      $("#partner_up").removeClass("active");
   });
   
});

function start(){
   $(".imgs>img").eq(0).siblings().css({"margin-top":"-800px"});
   setInterval(function(){slide();},2000);
}
function slide(){
   now = now==imgs?0:now+=1;
   $(".imgs>img").eq(now-1).css({"margin-top":"-800px"});   
   $(".imgs>img").eq(now).css({"margin-top":"0px"});
}