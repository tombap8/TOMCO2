$(function(){
  $(".top nav ul>li").hover(
    function(){
      $("ol",this).stop().slideDown(400);
    },
    function(){      
      $("ol",this).stop().slideUp(400);
    });
});// jQB ////////
var num=0;
setInterval(function(){
  num++;
  num===3?num=0:num=num;
  $(".ban img").eq(num).animate({left: "0"},600)
  .siblings().animate({left: "-100%"},600);
},3000);