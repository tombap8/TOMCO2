//회원가입 페이지 JS  - member.js

$(()=>{ //////////// jQB /////////////////////////

    console.log("로딩완료!");

    /************************************************ 
        [ 사용자 입력폼 유효성 검사하기 ]
        - 이벤트 종류: blur (포커스가 빠질때 발생)
        - 제이쿼리 이벤트 메서드: blur()
        - 이벤트 대상: 

        -> id가 "email2"가 아니고 class가 "search"가
        아닌 type이 "text"인 입력요소 input

        >>> 제이쿼리 선택표현법:
        input[type=text][id!=email2][class!=search]
        >>> 대괄호[]는 속성선택, != 같지않다(제이쿼리전용)

        -> type이 "password"인 입력요소 input

        >>> 제이쿼리 선택 표현법:
        input[type=password]

    ************************************************/
   $(`input[type=text][id!=email2][class!=search],
   input[type=password]`)
   .blur(function(){ /////// blur ////////////////////

        // 모든공백 제거함수
        const groSpace = cv => cv.replace(/\s/g,"");
        // cv => {return cv.replace(/\s/g,"");}
        // 중괄호와 리턴 키워드가 생략됨!

        // groSpace는 get rid of Space 즉, 공백제거라는 말!
        // replace(바꿀값,바뀔값)
        // 정규식: 슬래쉬 사이에 씀 
        // 공백문자: \s
        // g -> global 즉, 모두 찾아라!

        // 방금 블러발생한 요소의 id는?
        let cid = $(this).attr("id");
        // cid 는 current id 즉, 현재 아이디
        // attr(속성명) -> 해당속성값을 읽어옴!

        // 블러발생한 요소의 입력값은?
        let cv = $(this).val();
        // cv 는 current value 즉, 현재값
        // val() -> 선택요소의 입력값을 읽어옴!

        // "이름"입력인 경우 앞뒤공백만 제거 : trim()
        if(cid==="mnm") cv = cv.trim();
        // 기타인 경우 모든 공백제거처리! : groSpace()
        else cv = groSpace(cv);

        // 공백제거된 cv값을 다시 입력창에 넣기!
        $(this).val(cv);

        console.log("블러발생!",cid,cv);

        /****************************************** 
                1. 빈값 여부 체크하기
        ******************************************/
       if(cv === ""){
           // 메시지 출력
           $(this).siblings(".msg").text("필수입력!")
           // .msg 박스는 형제요소임
           // siblings(요소) 다른 형제요소 중 특정요소 선택
           // siblings() 아무값도 안쓰면 다른형제요소 모두선택

       } //////////////// if : 빈값체크 //////////////

       /////// 만약 통과시 메시지 지우기 ////////////
       else {
            // 메시지 지우기
            $(this).siblings(".msg").empty();
            // empty() 내용지우기
       } ////////////// else : 통과시 ////////////////

   }); /////////////// blur //////////////////////////



}); //////////////// jQB /////////////////////////