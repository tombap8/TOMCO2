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


/////// 로딩구역 ///////////////////////////
window.addEventListener("load",() => {

    console.log("로딩완료!");
    
    
    // 영화예고편 동영상 코드 객체 ///
    const mcode = {
        "듄":"-5Dc8EMVYBo",
        "유체이탈자":"_fuaoomS7zs",
        "이터널스":"BdkSkI61aGo",
        "연애 빠진 로맨스":"dWEQjU3GCE0",
        "프렌치 디스패치":"Y1_Ujpsn1Jc",
        "스파이더맨:노웨이홈":"yFZh-Wqi7RI"
    }; ///// mcode객체 ///////

    // 포스터 a요소 클릭시 영화 변경하기
    // 대상: .mlist a
    let mlink = document.querySelectorAll(".mlist a");
    console.log("a링크개수:",mlink.length);

    // 클릭이벤트 속성 셋팅하기
    for(let x of mlink){

        x.onclick = () => {
            // 각 a요소를 구분해주는 것
            // -> 자식요소 중 img 의 alt속성에 영화제목있음!
            let mtit =  x.querySelector("img")
            .getAttribute("alt");
            console.log("영화제목:",mtit);
        }; ///// click 함수 ////

    } //////// for of ///////////

    // 포스터 메뉴 li 클릭시 li에 클래스 on넣기
    // 대상: .mlist ul>li
    let mlist = document
    .querySelectorAll(".mlist ul>li");

    console.log("리스트개수:",mlist.length);

    // 클래스 초기화 함수 ///
    const resetFn = ()=>{
        for(let x of mlist) 
            x.classList.remove("on");
    }; ////// resetFn함수 //////////

    // 대상만큼 click이벤트 설정하기
    // for of 사용!
    for(let x of mlist){
        x.onclick = ()=>{
            // 1. 클래스 초기화함수 호출
            resetFn();
            // 2. 해당li요소 클래스 on넣기
            x.classList.add("on");
        }; ///////// click /////////
    } ///////// for of ////////////////


}); /////////// 로딩구역 /////////////////////