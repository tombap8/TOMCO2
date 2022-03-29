// 도깨비 PJ 링크 시스템 JS - linksys.js

/////////// 로드구역 ///////////////////////
// DOMContentLoaded - html코드가 모두 로딩되면 실행
window.addEventListener("DOMContentLoaded", () => {

    console.log("로딩완료!");

    // 로고 클릭시 홈으로!
    // 대상: #logo img
    let logo = document.querySelector("#logo img");
    // 손가락표시 + z-index + 포지션(z-index때문)
    logo.style.cursor = "pointer";
    logo.style.zIndex = "10";
    logo.style.position = "relative";
    // 클릭이동설정
    logo.onclick = () => location.href = "index.html";
    // ()=>{} 화살표함수에서 코드가 하나면 중괄호생략가능

    // 링크 대상: .top a
    let alink = document.querySelectorAll(".top a");
    console.log("링크개수:", alink.length);

    for (let i = 0; i < alink.length; i++) {
        alink[i].onclick = function () {
            // this는 클릭걸린 요소자신!
            console.log("버튼명:", this.innerText);

            // a요소 텍스트
            let atxt = this.innerText;

            // 이동주소
            let url;

            // 분기문
            switch (atxt) {
                case "로그인":
                    url = "login";
                    break;
                case "회원가입":
                    url = "member";
                    break;
                case "인물관계도":
                    url = "cat";
                    break;

                default:
                    url = "esc";
            } /////// switch case /////

            // url값이 "esc"가 아니면 페이지 이동
            if (url !== "esc") location.href = url + ".html";
            // location.href = 이동할 페이지주소
            // -> 페이지를 이동함!
            // 원래 window.location.href 이지만
            // window객체명은 생략할 수 있다!
            else location.href = "cat.html";
            // 만약 서브페이지가 없는 경우 무조건 한페이지로
            // 가도록 몰아주자!(포폴대책!)

        }; ////// click ///////
    } ////////// for /////////////

}); //////////////// 로드구역 ////////////////////