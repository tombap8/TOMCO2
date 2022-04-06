// JavaScript Document
var imgs = 2;
var now = 0;

jQuery(document).ready(function() {
 $(".nav>li").mouseover(function() {	
	if($(this).children(".submenu").length > 0) {
		$(this).children(".submenu").stop().slideDown(500);
	}
 });
 $(".nav>li").mouseleave(function(){
	$(this).children(".submenu").stop().slideUp();
 });
 
 start(); 
 
 $(".partner_info img").click(function () {
    $(".modal").show();
 });

 $(".modal .content button").click(function () {
     $(".modal").hide();
 }); 
   
})
 
var win;
 function winOpen(){
 win = window.open('contact.html','child','toolbar = no, location= no, status = no, menubar = no, resizable = no , scrollbars = no, width = 500, height = 300')
 }
 
function start(){
   $(".imgs>img").eq(0).siblings().css({"margin-left":"-2000px"});
   setInterval(function(){slide();},2000);
}
function slide(){
   now = now==imgs?0:now+=1;
   $(".imgs>img").eq(now-1).css({"margin-left":"-2000px"});   
   $(".imgs>img").eq(now).css({"margin-left":"0px"});
}
 