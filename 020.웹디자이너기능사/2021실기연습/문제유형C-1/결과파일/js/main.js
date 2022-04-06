// 메인 JS - main.js 
console.log("연결확인!!!");

////////////////////////////
/// 슬라이드 기능구현하기 ///
///////////////////////////

/// 일정시간간격 호출하기 ///
// setInterval(함수,시간) -> 시간은 1/1000초
// 페이드 효과 넘기기

// 슬라이드 순번변수
var snum = 0;

setInterval(function(){

    // 1. 호출여부확인
    console.log("인터발!!!");

    // 2. 대상선정: .slide li
    var tg = document.querySelectorAll(".slide li");

    // 3. 이전순번 슬라이드 class="on" 제거하기
    tg[snum].classList.remove("on");
    // tg변수는 요소 li들을 담고 있는 컬렉션이다
    // 이들 중 특정 순번의 li를 접근할 경우
    // 변수[순번] 또는 변수.item(순번)
    // 위의 경우 순번은 변수 snum에 할당되어 있으므로
    // tg[snum] 또는 tg.item(snum) 으로 표현할 수 있다

    // 4. 슬라이드 순번 증가하기!
    snum++;
    if(snum===3) snum=0;
    //한계수에서 처음으로!

    // 5. 해당순번만 class="on" 주기!
    tg[snum].classList.add("on");

},3000);// 인터발함수 //////////////
///////////////////////////////////

// [ classList 객체 ]
// - 요소에 클래스를 넣고 빼는 기능을 가진 객체
// 1) add(클래스명) - 클래스 넣기
// 2) remove(클래스명) - 클래스 지우기
// 3) toggle(클래스명) - 클래스 없으면 넣고 있으면 지우기


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
