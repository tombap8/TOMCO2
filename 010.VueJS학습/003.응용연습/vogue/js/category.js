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
    new Vue({
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
        } ////// mounted //////
    }); ////////////// Vue //////////////


}); ///////////// 로딩구역 ////////////////////////
//////////////////////////////////////////////////