// 보그 PJ 공통 JS - common.js

// 현재 페이지 이름 알아내기
let pgnm = $(location).attr("pathname");
// 슬래쉬로 자르기
pgnm = pgnm.split("/");
// 마지막 배열값 읽기(페이지이름)
pgnm = pgnm[pgnm.length-1];
console.log(pgnm);
// JS방식: window.location.pathname -> host제외한 경로

// 인덱스 페이지와 카테고리 페이지에서만 슬림스라이드 클래스 넣기위한 코드
let slim = 0;
if(pgnm==="index.php" || 
pgnm==="category.php" ||
pgnm.indexOf(".")===-1) slim = 1; // 인덱스페이지면 1로변경!

$(() => { //////////// jQB /////////////////////////

    // 햄버거 버튼 클릭시 모바일 메뉴 보이기
    // 햄버거 버튼 -> .hbtn
    // 모바일 메뉴 -> #mobx
    $(".hbtn").click(
        () => $("#mobx").slideToggle(300));

    // 검색 버튼 클릭시 검색창 보이기
    // 검색 버튼 -> .sbtn
    // 검색창 -> .mos
    $(".sbtn").click(
        () => $(".mos").slideToggle(300));

    // 로그인, 회원가입, 갤러리 html코드 /////////////
    let htcode = `
        <a href="#" class="fi fi-laptop" title="로그인">
            <span class="ir">
                로그인
            </span>
        </a>
        <a href="#" class="fi fi-user-secret" title="회원가입">
            <span class="ir">
                회원가입
            </span>
        </a>
        <a href="#" class="fi fi-camera" title="갤러리">
            <span class="ir">
                갤러리
            </span>
        </a>
    `; 

    // 로그인, 회원가입, 갤러리 아이콘 넣기
    // 대상: .sns a:last-child 
    // 변경: 대상요소 앞에 a요소 삽입하기
    // 메서드: before(요소) -> 선택요소 앞에 형제삽입
    // -> 참고비교) after(요소) -> 선택요소 뒤에 형제삽입
    $(".sns a")
    .each(function(){
        // a요소 각각에 title로 내부글자를 넣어준다!
        $(this).attr("title",$(this).text().trim());
    }) ///// each //////
    .last().before(htcode);
    // 마지막a요소 앞에 코드삽입함!

    // 모바일에 요소 추가!
    $(".mosns a").last().before(htcode)
    // 선택자.마지막().이전요소추가(코드)
    .parent().find("a").eq(3).after("<br>");
    // .부모().찾기("a").순번(4번째).다음요소추가("<br>")

    // 로그인, 회원가입, 갤러리 클릭시 페이지이동하기
    // 클릭시 구조가 동일한 모바일도 그룹셋팅!
    // .sns a + .mosns a
    $(".sns a, .mosns a").click(function(e){
        // 1. 기본기능막기
        e.preventDefault();

        // 2. 내부 텍스트 읽어오기
        let txt = $(this).text().trim();
        // console.log("sns텍스트:",txt);

        // 3. 분기하기
        let url;
        switch(txt){
            case "로그인": url="login"; break;
            case "회원가입": url="member"; break;
            case "갤러리": url="gallery"; break;
            default: url="esc";
        } ////////// switch case /////////

        // 4. 페이지 이동하기
        if(url!=="esc")
            location.href = url+".php";


    }); ///////// click ////////////


}); ///////////////// jQB ////////////////////////


///////////////// 로드구역 ///////////////////////
window.addEventListener("DOMContentLoaded", () => {

    // console.log("로딩완료");

    /// 부드러운 스크롤 호출!
    startSS();


    // 스크롤값 변수
    let scTop;
    // 상단영역 - #top
    let topA = document.querySelector("#top");
    // 위로가기버튼 - .tbtn
    let tbtn = document.querySelector(".tbtn");

    /// 위로가기버튼 클릭시 맨위로 이동하기 ////
    // 모바일에서 스크롤없이 스와이퍼 이동시 무작동해결!
    $(".tbtn").click(() => {
        // 제이쿼리 스크롤 애니메이션
        $("html,body").animate({
            scrollTop: "0"
        }, 300);
        // 스크롤 위치값 업데이트
        pos = 0;
    }); /////// click ////////////


    // 부드러운 스크롤 위치변수 pos값을 0주면됨!
    // tbtn.onclick = () => {
    //     pos = 0; // 맨위로 가기!
    //     return false; 
    //     // a요소 기본이동 막기
    // }; /////// click //////////

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
        // console.log("스위:", scTop);

        ////////////////////////////////
        ////// 상단메뉴 슬림변경하기 ////
        ///////////////////////////////

        // 1. 스크롤 위치가 100px 이상일때 
        // 변경사항: #top에 클래스 on넣기
        // 조건추가: slim 이 true일때 즉, 1일때
        if (scTop >= 100 && slim) topA.classList.add("on");

        // 2. 스크롤 위치가 100px 미만일때(else)
        // 변경사항: #top에 클래스 on제거
        else topA.classList.remove("on");

        ////////////////////////////////
        ////// 위로가기 버튼 보이기  ////
        ///////////////////////////////

        // 1. 스크롤 위치가 200px 초과일때 
        // 변경사항: #top에 클래스 on넣기
        if (scTop > 200) tbtn.classList.add("on");

        // 2. 스크롤 위치가 100px 미만일때(else)
        // 변경사항: #top에 클래스 on제거
        else tbtn.classList.remove("on");


        ////////////////////////////////////
        //////// 등장액션 클래스 주기 ///////
        ////////////////////////////////////

        // 현재 스크롤위치가 등장할 요소의 위치범위에
        // 있다면 등장해라!

        // 등장요소 위치값 배열만큼 체크함수 호출!
        scPos.forEach((val, idx) => scAction(idx));



    }); ////////////// scroll //////////////


    /******************************************** 
        원리:
        1. scAct 변수에 .scAct 클래스요소를 담고
        요소의 개수만큼 scPos 배열변수에 위치값을
        셋팅한다!
        
        2. 등장요소의 위치보다 이전부터 위치값 사이범위에
        스크롤이 통과할때 등장할 요소를 나타나도록
        함수로 체크한다!

    ********************************************/
    // 스크롤 등장 대상요소
    let scAct = document.querySelectorAll(".scAct");
    // 스크롤 등장 대상위치 배열
    const scPos = [];
    // 대상요소만큼 for문 돌기
    for (let i = 0; i < scAct.length; i++) {
        scPos[i] = scAct[i].offsetTop;
    } //////////// for ///////////////

    // console.log(scPos);

    // 스크롤 등장위치 조정값 : 윈도우화면크기의 2 / 3
    const winH = (window.innerHeight / 3) * 2;
    // console.log("윈도우높이2/3:", winH);

    /******************************************** 
        함수명: scAction
        기능: 스크롤 위치값이 설정범위에 들어가면
            해당순번의 요소가 등장한다!
    ********************************************/
    const scAction = seq => { // seq는 순번
        // console.log("순번:",seq);

        // 조건: 스크롤위치가 포지션위치이전 보다 크고
        // 스크롤위치가 포지션위치보다 작으면 실행!
        if (scTop > scPos[seq] - winH &&
            scTop < scPos[seq]) {
            // 해당순번요소에 클래스 on넣기!
            scAct[seq].classList.add("on");
        } ///////////// if //////////////////

    }; ////////// scAction 함수 ///////////////////



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