// 보그 PJ : 링크 시스템 JS - linksys.js

$(()=>{ //////////// jQB /////////////////////////

    console.log("로딩완료!");

    // 메인 로고 클릭시 첫페이지로 이동하기
    $(".logo a").click(()=>location.href="index.html");

    // GNB메뉴 a요소 클릭시 링크 연결하기
    // 그룹선택으로 모바일 메뉴도 동시에 처리!
    // .gnb a  + .mognb a

    $(".gnb a,.mognb a").click(function(e){

        // a요소 기본이동기능 막기
        e.preventDefault();

        let txt = $(this).text().trim().toLowerCase();
        // trim() - 앞뒤공백 제거!
        // toLowerCase() - 소문자로 변환!
        // 참고) toUpperCase() - 대문자로 변환
        console.log("메뉴글자:",txt);

        // "search" 만 아니면 카테고리 페이지로 보냄
        if(txt!=="search")
            location.href = "category.html?cat="+txt;

    }); /////////// click /////////////

}); //////////////// jQB /////////////////////////