// 카테고리 페이지 JS  - category.js

// Get 방식으로 넘어온 값 받기!
let pm = location.href;

// 에러방지를 위해 물음표 체크!!!
if (pm.indexOf("?") === -1) {
    alert("비정상적인 접근입니다!");
    location.href = "index.html";
} /////////// if ////////////////

// 물음표와 이퀄로 자르고 값만 가져오기
pm = pm.split("?")[1].split("=")[1];
console.log("카테고리:", pm);


//////////// 로딩구역 /////////////////////
window.addEventListener("DOMContentLoaded", () => {

    console.log("로딩완료");

    //// 데이터 바인딩 Vue 인스턴스 생성하기 ///
    let db = new Vue({
        el: "#cont", 
        // 바인딩할 대상(변경요소를 포함하는 부모요소)->아이디만 적용됨!
        data: {
            vals: {},
            // json 데이터가 객체임!
            catName: pm
            // 파라미터로 넘어온 값을 Vue 데이터변수에 넣기!
        }, //// data ///////
        mounted: function () {
            axios // 엑시오스 객체
            .get("js/real.json") // 파일읽기
            .then(x => this.vals = x); // 할당(x변수로 전달!)
        }, ////// mounted //////
        methods: {
            // 탭 타이틀 변경 메서드
            chgTit: function(tit){ // tit - 제목전달!
                // document.querySelector("title").innerText=
                // tit+" | 보그 코리아 (Vogue Korea)";
                $("title").text(tit+" | 보그 코리아 (Vogue Korea)")
            } ////// chgTit 메서드 ////
        } ///////// methods //////////

    }); ////////////// Vue //////////////

    /////// 뷰JS 체험존 GNB메뉴 클릭시 셋팅 /////
    $(".VueGnb a").click(function(e){

        // 기본기능막기
        e.preventDefault();

        let txt = $(this).text().toLowerCase();
        // toLowerCase() 소문자변환
        console.log("체험존:",txt);

        // 파라미터 변수값 업데이트
        pm = txt;
        console.log("체험존pm업뎃:",pm);
        // pm 값이 뷰JS 인스턴스안에 catName 변수로
        // 셋팅되어 있지만 이 값을 업데이트 해도
        // 페이지가 업데이트 되지 않는다!
        // 왜? 이것은 뷰JS의 변수가 아니기 때문!!!

        // 뷰JS의 대표특징인 양방향바인딩 즉,
        // 뷰JS를 업데이트하면 화면이 업데이트되는 기능!
        // 뷰JS의 데이터인 catName을 업데이트 하면된다!!!

        // 뷰JS의 변수 접근법:
        // 뷰JS 인스턴스를 변수에 담는다 -> db
        // 변수.$data.변수명 = 값
        db.$data.catName = txt;


    }); /////////// click ///////////////


}); ///////////// 로딩구역 ////////////////////////
//////////////////////////////////////////////////