// 보그 PJ 공통 JS - common.js

///////////////// 로드구역 ///////////////////////
window.addEventListener("DOMContentLoaded", () => {

    console.log("로딩완료");

    // 스크롤값 변수
    let scTop;
    // 상단영역 - #top
    let topA = document.querySelector("#top");
    // 위로가기버튼 - .tbtn
    let tbtn = document.querySelector(".tbtn");

    /********************************** 
        [ 윈도우 스크롤 이벤트 함수 ]
        - 스크롤 이벤트 : scroll
        - 이벤트 대상 : window
        - 스크롤 이벤트값 : scrollY
    **********************************/
    window.addEventListener("scroll", () => {
        // 스크롤 위치값
        scTop = this.scrollY;
        // scrollY - 세로축 스크롤 위치값 리턴
        // this는 화살표함수에서 window객체임!
        console.log("스위:", scTop);

        ////////////////////////////////
        ////// 상단메뉴 슬림변경하기 ////
        ///////////////////////////////

        // 1. 스크롤 위치가 100px 이상일때 
        // 변경사항: #top에 클래스 on넣기
        if(scTop >= 100) topA.classList.add("on");

        // 2. 스크롤 위치가 100px 미만일때(else)
        // 변경사항: #top에 클래스 on제거
        else topA.classList.remove("on");

        ////////////////////////////////
        ////// 위로가기 버튼 보이기  ////
        ///////////////////////////////

        // 1. 스크롤 위치가 200px 초과일때 
        // 변경사항: #top에 클래스 on넣기
        if(scTop > 200) tbtn.classList.add("on");

        // 2. 스크롤 위치가 100px 미만일때(else)
        // 변경사항: #top에 클래스 on제거
        else tbtn.classList.remove("on");

    }); ////////////// scroll //////////////

    /************************************************** 
        [윈도우 세로 스크롤 위치값 가져오는 방법]

        1. this.scrollY (this키워드가 window의미)
        2. window.scrollY
        3. document.scrollingElement.scrollTop
        4. document.documentElement.scrollTop
        5. document.querySelector("html").scrollTop

        참고) 가로스크롤일 경우
            scrollY -> scrollX
            scrollTop -> scrollLeft
            로 바꿔서 위와 동일함!

    **************************************************/


}); //////////// 로드구역 ////////////////////////