// CGV 메인 페이지 JS - main.js

/*************************************** 
    함수명: chgMV
    기능: 영화예고편을 변경함
***************************************/
function chgMV(mvid){ // mvid - 영화아이디값 전달변수

    // 1. 함수호출 확인!
    console.log("나야나!", mvid);

    // 2. 대상선정: #screen iframe
    var tg = document.querySelector("#screen iframe");

    // 3. 변경내용: 대상의 src속성 변경하기
    // src중 영화 아이디부분을 변경함!
    tg.src = `https://www.youtube.com/embed/${mvid}?autoplay=1&playsinline=1`;


} ////////// chgMV 함수 ////////////////////