// 보그 PJ 공통 JS - common.js

///////////////// 로드구역 ///////////////////////
window.addEventListener("DOMContentLoaded", () => {

    console.log("로딩완료");

    // 스크롤값 변수
    let scTop;

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