// 보그 PJ : 링크 시스템 JS - linksys.js

$(()=>{ //////////// jQB /////////////////////////

    console.log("로딩완료!");

    // GNB메뉴 a요소 클릭시 링크 연결하기

    $(".gnb a").click(function(){
        let txt = $(this).text().trim().toLowerCase();
        // trim() - 앞뒤공백 제거!
        // toLowerCase() - 소문자로 변환!
        // 참고) toUpperCase() - 대문자로 변환
        console.log("메뉴글자:",txt);
    }); /////////// click /////////////

}); //////////////// jQB /////////////////////////