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

        // 방금 블러발생한 요소의 id는?
        let cid = $(this).attr("id");
        // cid 는 current id 즉, 현재 아이디
        // attr(속성명) -> 해당속성값을 읽어옴!

        // 블러발생한 요소의 입력값은?
        let cv = $(this).val();
        // cv 는 current value 즉, 현재값
        // val() -> 선택요소의 입력값을 읽어옴!

        console.log("블러발생!",cid,cv);

   }); /////////////// blur //////////////////////////



}); //////////////// jQB /////////////////////////