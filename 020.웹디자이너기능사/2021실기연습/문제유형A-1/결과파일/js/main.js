// 메인 JS - main.js 
console.log("연결확인!!!");

////////////////////////////
/// 슬라이드 기능구현하기 ///
///////////////////////////

/// 일정시간간격 호출하기 ///
// setInterval(함수,시간) -> 시간은 1/1000초
setInterval(function(){

    // 1. 호출여부확인
    console.log("인터발!!!");

    // 2. 대상선정: .slide
    var tg = document.querySelector(".slide");

    // 3. 변경내용: 대상의 top값이 -100%로 변경+트랜지션
    tg.style.top = "-100%";
    tg.style.transition = ".6s";

    // 4. 이동후 작업! /////////////////////
    // 위의 이동설정후에 적용해야함!(이동시간 0.6초후!)
    // 왜? top값, transition값이 변경되므로!

    // 0.6초후 한번 함수실행!//////////////
    setTimeout(function(){

        // 4-1. 첫번째 li를 잘라서 맨뒤로 이동함!
        // 첫번째 li 선택
        var first = tg.querySelectorAll("li")[0];
        // 맨뒤로 이동 메서드 -> appendChild(요소)
        tg.appendChild(first);
    
        // 4-2. top값이 -100%이므로 0으로 변경!
        tg.style.top = "0";
    
        // 4-3. 이때 트랜지션 없애기!
        tg.style.transition = "none";

    },600);///-> 600은 0.6초 타임아웃함수 //////
    ///////////////////////////////////////////


},3000);// 인터발함수 //////////////
///////////////////////////////////


/*////////////////////////////////////////
    함수명 : chgTab
    기능: 탭메뉴 변경하기
*/////////////////////////////////////////
function chgTab(i1,i2){
    // i1 - 클래스를 넣을 li순번
    // i2 - 클래스를 뺄 li순번
    
    // 1. 함수호출확인
    console.log("탭변경!"+i1+"/"+i2);

    // 2. 대상선정: .tm>li 탭메뉴li, .tc>li 탭내용li
    // 2-1. 탭메뉴li
    var tm = document.querySelectorAll(".tm>li");
    // 2-2. 탭내용li
    var tc = document.querySelectorAll(".tc>li");

    // 3. 클래스 on 빼기, on 넣기
    
    // 3-1. 클래스 넣기 : classList.add(클래스명)
    tm[i1].classList.add("on");
    tc[i1].classList.add("on");
    
    // 3-2. 클래스 빼기 : classList.remove(클래스명)
    tm[i2].classList.remove("on");
    tc[i2].classList.remove("on");

} //////// chgTab함수 ////////////////////
//////////////////////////////////////////

/*////////////////////////////////////////
    함수명: popup
    기능: 팝업 열기/닫기
*/////////////////////////////////////////
function popup(sts){ // sts 팝업상태 전달값(block/none)

    // 1. 함수호출여부
    console.log("팝업!!!" + sts);

    // 2. 변경대상 : .pop
    var pop = document.querySelector(".pop");

    // 3. 변경내용 : 팝업창 보이기/숨기기
    pop.style.display = sts;
} /////// popup함수 //////////////////////
//////////////////////////////////////////
