$(function(){/// jQB /////
  /// 메뉴마우스오버시 ///
  $(".top nav ul>li").hover(
    function(){// over
      $(".top ol,.menubg").stop().slideDown(400);
    },
    function(){// out
      $(".top ol,.menubg").stop().slideUp(400);
    });//// hover ///
  /////////////////////////////
  
  var num = 0;//순번
  setInterval(function(){
    $(".ban img").eq(num).animate({left:"0"},600)
    .delay(1000)
    .animate({left:"-100%"},600);
                         
    num++;//1씩증가
    if(num===3)num=0;//한계수
  },3000);/// setInterval /////
  
  
  ///// 팝업창 띄우기 ////
  $("#tg").click(function(){
    $("#popup").fadeIn(300);
  });////// click //////////
  ///// 팝업창 닫기 //////
  $(".close").click(function(){
    $("#popup").fadeOut(300);
  });////// click //////////
  
  
  
  
  
  
  
  
  
  
  
  
  
});/// jQB //////////////