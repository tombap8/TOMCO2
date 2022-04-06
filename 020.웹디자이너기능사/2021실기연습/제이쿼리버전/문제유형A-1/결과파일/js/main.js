// 메인 JS - main.js 

/// 슬라이드 (수직방향 이동유형) ///

// 일정시간간격 호출 메서드 - setInterval(함수,시간)
setInterval(function(){

    // 1. 인터발호출확인
    console.log("인터발!");

    // 2. 대상선정: .slide
    // 3. 변경내용: top값을 -100%로 변경함
    // -> css변경 애니메이션 제이쿼리 메서드사용
    // -> animate({css설정},시간,이징,콜백함수)
    //  1)시간-애니메이션시간(1/1000초)
    //  2)이징(가속도) -> 여기선 못씀(추가파일필요)
    //  3)콜백함수(애니후 실행코드)
    // -> animate메서드 사용시 주의사항 : css에 트랜지션이 없어야함!
    $(".slide").animate({top:"-100%"},600,
    function(){//콜백함수(애니후 실행코드)
        // 1. 첫번째 li를 선택
        // $(this) -> .slide자신
        var first = $(this).find("li").first();
        // find(요소) 하위자손중 특정요소 찾기
        // first() 선택요소들 중 첫번째 선택

        // 2. 첫번째 li를 맨뒤로 이동 + top값 0으로 초기화!
        $(this).append(first).css({top:"0"});
        // append(선택요소) 메서드 : 선택요소를 맨뒤로 이동함

    });//////// animate /////////////////

},3000); /// 인터발함수 //////////////////
///////////////////////////////////////////

// 제이쿼리 코드블록 ////////////////////////
$(function(){

    // 탭메뉴 클릭시 클래스 on넣기/빼기
    // 대상: .tm li
    $(".tm li").click(function(){
        // 호출확인
        console.log("탭클릭!");

        // 클릭된 li에 클래스 on넣기 + 다른 li는 클래스 on빼기
        $(this).addClass("on").siblings().removeClass("on");
        // addClass(클래스명) - 선택요소에 클래스추가하기
        // removeClass(클래스명) - 선택요소에 클래스제거하기
        // siblings() - 선택요소 이외의 형제요소들 선택하기

        // 클릭된 li와 같은 순번의 탭내용li에 
        // 클래스 on넣기 + 다른 li는 클래스 on빼기
        // 대상: .tc>li (바로 하위 li만 선택!!!)
        $(".tc>li").eq($(this).index())
        .addClass("on")
        .siblings().removeClass("on");
        // eq(순번) 해당순번의 요소를 선택 (순번은 0부터)
        // $(this).index() 클릭된 li요소의 순번을 리턴함(0부터셈)
        // index() 순서를 알아내는 메서드
        console.log("클릭된li순번:"+$(this).index());

    });//////// click ////////////////

    ///// 팝업창 띄우기 /////////
    // 대상: .gong li:first-child
    $(".gong li").first()
    .click(function(){
        // 호출확인
        console.log("팝업띄워!");

        // 팝업 띄우기
        // 대상: .pop
        $(".pop").show();
        // show()는 display를 보이게하는 메서드

    });//////// click ///////////////

    /// 팝업 닫기버튼 클릭시 /////
    // 대상: .bbx button
    $(".bbx button").click(function(){
        // 호출확인
        console.log("팝업닫어!");

        // 팝업 닫기
        // 대상: .pop
        $(".pop").hide();
        // hide()는 display:none으로 만들어주는 메서드

    });//////// click //////////////////







}); /////// jQB ///////////////////////////
///////////////////////////////////////////
