// JavaScript Document

jQuery(document).ready(function() {
 $(".nav>li").mouseover(function(){	
	if($(this).children(".submenu").length > 0) {
		$(this).children(".submenu").stop().slideDown(500);
	}
 });
 $(".nav>li").mouseleave(function(){
	$(this).children(".submenu").stop().slideUp();
 });

 $('#imgsbar a').click(function(){
    $('#imgsbar a').removeClass('active')
    $(this).addClass('active');
    var imgLeft=$(this).attr('img-left');
    $('#imgs').animate({left:imgLeft},"fast");
 })
 
 $(".partner_info img").click(function () {
    $(".modal").show();
 });

 $(".modal .content button").click(function () {
     $(".modal").hide();
 });  
 
});

var win;
 function winOpen(){
 win = window.open('contact.html','child','toolbar = no, location= no , status = no, menubar = no, resizable = no , scrollbars = no, width = 500, height = 300')
 };

