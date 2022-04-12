// 제이쿼리 기본 JS - main.js 
$(() => { ///////// jQB /////////////////////////

    console.log("로딩완료!");

    /**************************************** 
                1. 대상선정 변수할당
    ****************************************/
    // 대상1 : 버튼들 - .btns>button
    let btns = $(".btns>button");
    //    console.log("버튼개수:",btns.length);

    // 대상2 : 미니언즈 - .mi
    let mi = $(".mi");

    // 대상3 : 빌딩각방 - .building li
    let bd = $(".building li");
    //    console.log("방수:",bd.length);

    // 대상4 : 메시지 박스 - .msg
    let msg = $(".msg");

    // 삽입이미지 변수 셋팅 //////
    // 좀비 이미지 태그
    let mz1 = 
        `<img src="images/mz1.png" alt="좀비1" class="mz">`;
    let mz2 = 
        `<img src="images/mz2.png" alt="좀비2" class="mz">`;
    let zom = 
        `<img src="images/zom.png" alt="좀비들" class="mz">`;
    // 주사기 이미지
    let inj =
        `<img src="images/inj.png" alt="주사기" class="inj">`;

}); ///////////// jQB /////////////////////////