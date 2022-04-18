//로그인 페이지 JS  - login.js

$(()=>{ ///////// jQB ////////////////////////

    console.log("로딩완료!");

    // 대상1: 아이디 입력요소
    let mid = $("#mid");
    // 대상2: 비밀번호 입력요소
    let mpw = $("#mpw");

    // 로그인 버튼 클릭시 ///////
    $("#sbtn").click(function(e){
        // 1. 기본이동막기
        e.preventDefault();

        // 2. 아이디/비번 빈값 여부 확인
        // val() 입력된 값 읽어오기
        // trim() 앞뒤공백 제거
        if(mid.val().trim() === "" || 
        mpw.val().trim() === ""){
            alert("아이디와 비밀번호 모두 입력해 주세요!");
            mid.val("").focus();// 아이디 지우고 포커스감
            mpw.val("");//비번 지우기
        } //////// if ////////////
        else{
            // 실제 서버로 가서 아이디/비번 확인후
            // 아이디가 없으면 "없는 아이디입니다"
            // 아이디가 있으나 비번이 틀리면 "비밀번호를 확인하세요"
            // 그리고 일치하면 성공메시지를 첫페이지로 로그인한후
            // 화면에 표시할 수 있다!

            // Ajax의 post방식으로 로그인처리페이지 호출!
            // $.post(URL,data,callback)
            $.post(
                // 1. 전송할 페이지
                "process/loginSet.php",
                // 2. 보낼 데이터
                {
                    "mid":mid.val(), // 아이디
                    "mpw":mpw.val() // 비밀번호
                },
                // 3. 처리후 함수
                function(res){
                    console.log("결과:",res);
                    // 3-1. 로그인 성공시
                    if(res==="ok"){
                        // alert("로그인에 성공하였습니다!");

                        // 첫페이지로 이동하기!
                        location.href = "index.php";
                        
                    } ////// if //////

                    // 3-2. 아이디가 없는 경우
                    else if(res==="no"){
                        alert("사용가능한 ID가 아닙니다!");
                        mid.val("").focus();
                        mpw.val("");
                    } /////// else if //////

                    // 3-3. 비밀번호  불일치일 경우
                    else if(res==="again"){
                        alert("비밀번호가 일치하지 않습니다!");
                        mpw.val("").focus();
                    } /////// else if //////

                } ////// callback //////

            ); ///////////// post ///////////////



        } ////////// else ////////////


    }); ///////// click /////////////



}); ///////////// jQB ///////////////////////