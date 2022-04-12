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

    // 미니언즈 가로위치 보정값
    // 윈도우 가로크기의 5%
    let win5 = $(window).width() * 0.05;
    // console.log("가로크기의 5%:",win5);
    // width() 가로크기, height() 세로크기
    // -> 단위없는 px 숫자값 리턴함!

    /***************************************** 
                2. 초기화 셋팅
    *****************************************/
    // 2-1. 버튼셋팅 : 모든버튼 숨기고 첫번째만 보이게함
    // btns.hide().first().show();
    // 버튼들.숨겨().첫번째().보여()

    // 중간 테스트를 위한 버튼 보이기셋팅
    btns.hide().eq(0).show();

    // 2-2. 빌딩숫자셋팅 :
    // -> 모든 빌딩 li를 순서대로 돌면서 
    // 순번넣기 + 좀비넣기
    // 대상: 빌딩 li -> bd변수
    bd.each((idx, ele) => {
        // console.log(idx);

        // 1. 각 li요소에 글자넣기(순번)
        $(ele).text(idx);

        // 2. 좀비 + 주사기 넣기
        // append(요소) - 선택요소 내부에 맨뒤추가
        if (idx === 9) $(ele).append(mz1);
        else if (idx === 7) $(ele).append(mz2);
        else if (idx === 1) $(ele).append(zom);
        else if (idx === 2) $(ele).append(inj);

    }); ///////////// each ///////////////

    /* 
        [ for문을 사용하지 않고 돌게해주는 
            제이쿼리 메서드 ]
        >>> each(function(idx,ele){구현부});
        >>> each((idx,ele)=>{구현부});

        - 선택요소를 순서대로 돌면서 구현부를 실행함
        - idx 첫번째 전달변수는 순번이 전달됨(0부터)
        - ele 두번째 전달변수는 요소자신
        (this키워드와 동일 - 단, 화살표함수가 아닐때)
        - 전달변수는 순서와 개수가 중요함!
        - 이 메서드를 사용하면 for문을 안써도 됨!
    */

    // 2-3. 모든 좀비 숨기기
    $(".mz").hide();
    // 선택요소가 여러개이면 for문을 돌듯이 모두 셋티됨!

    /********************************************** 
            3. 버튼별 클릭 이벤트 함수 만들기
    **********************************************/

    /////////////////////////////////////////////        
    //////// 버튼 클릭시 공통 기능함수 ///////////
    /////////////////////////////////////////////
    const miniAct = (ele, seq, call) => {
        // ele - 호출하는 버튼 자신(this키워드보냄)
        // seq - 이동할 빌딩 li순번
        // call - 이동후 콜백함수

        // 1. 클릭된 버튼 자신 없애기
        $(ele).slideUp(300);
        // slideUp(시간,이징,함수)
        // -> height값이 0되며 애니메이션
        // 애니메이션 후 display:none됨
        // 반대는 slideDown(시간,이징,함수)

        // 2. 메시지 지우기
        msg.fadeOut(200);
        // fadeOut(시간,이징,함수)
        // -> opacity가 0이 되며 애니메이션
        // 애니메이션 후 display:none됨
        // 반대는 fadeIn(시간,이징,함수)

        // 3. 이동위치정보 : 
        // 이동할 빌딩li의 위치를 알아내기
        // 이동할 li 타겟 -> bd변수
        let tg = bd.eq(seq); // seq순번방
        // eq(순번) -> 선택요소들 중 몇번째 요소를 선택
        // eq는 seqence(순서)라는 단어에서 나온말

        // 화면에서의 top값
        let tgtop = tg.offset().top;
        // 화면에서의 left값
        let tgleft = tg.offset().left + win5;
        // 화면에서 left값 + 미니언즈 위치보정값

        // console.log(`top:${tgtop} / left:${tgleft}`);

        /* 
            offset() 메서드:
            - 기준: 윈도우화면
            - 요소의 위치나 크기정보를 담고 있음
            offset().top -> 요소의 top값
            offset().left -> 요소의 left값
            _______________________________

            position() 메서드:
            - 기준: 포지션이 있는 부모박스
            - 요소의 위치나 크기정보를 담고 있음
            position().top -> 요소의 top값
            position().left -> 요소의 left값
        */

        // 4. 미니언즈 이동하기
        // 대상: .mi -> mi변수
        mi.animate({
            top: tgtop + "px",
            left: tgleft + "px"
        }, 800, "easeOutBounce", call);
        // 시간, 이징, 함수 
        /////////// animate ////////////

        // animate({CSS설정},시간,이징,함수)
        // -> CSS변경을 애니메이션 해주는 메서드
        // -> 트랜지션 설정 불필요!

    }; ///////////// miniAct 함수 /////////////////


    // 3-1. "들어가기" 버튼 클릭 시작 /////////
    btns.first() // 버튼들.첫번째()
        .click(function () {

            // 콜백함수 : 이동후 실행함수 //
            let callFn = () => {

                // 1. 메시지 변경
                msg
                    .text("와~! 아늑하다! 옆방으로 가보자!")
                    .fadeIn(200); // 메시지 나타나기

                // 2. 다음버튼 보이기
                $(this).next() // 클릭된버튼 다음버튼
                    .delay(500).slideDown(300);
                // delay(시간) 
                // -> 애니메이션 메서드 앞에 사용!

            }; /////// 콜백함수 끝 ///////

            // 공통기능함수 호출!
            miniAct(this, 8, callFn);


        }) // 3-1. "들어가기" 버튼 클릭 끝 ///

        // 앞에 세미콜론없이 다음버튼 셋팅이 이어짐!
        // next() 다음 버튼!
        // 3-2. "옆방으로!" 버튼 클릭 시작 /////////
        .next().click(function () {

            // 콜백함수 : 이동후 실행함수 //
            let callFn = () => {

                // 1. 좀비등장 
                bd.eq(9).find(".mz")
                    .delay(1000).fadeIn(400, () => {

                        // 2. 메시지 변경
                        msg
                            .html("악!;;; 좀비!<br>어서피하자!")
                            .fadeIn(200) // 메시지 나타나기
                            .css({
                                left: "-120%"
                            }); // 박스위치변경

                        // 3. 다음버튼 보이기
                        $(this).next() // 클릭된버튼 다음버튼
                            .delay(500).slideDown(300);
                        // delay(시간) 
                        // -> 애니메이션 메서드 앞에 사용!

                    }); ////// fadeIn /////////



            }; /////// 콜백함수 끝 ///////

            // 공통기능함수 호출!
            miniAct(this, 9, callFn);

        }) // 3-2. "옆방으로!" 버튼 클릭 끝   /////

        // 3-3. "윗층으로 도망가!" 버튼 클릭 시작 /////////
        .next().click(function () {

            // 콜백함수 : 이동후 실행함수 //
            let callFn = () => {

                // 1. 메시지 변경
                msg
                    .text("여긴 없겠지?")
                    .fadeIn(200); // 메시지 나타나기

                // 2. 좀비 보이기 : 7번방
                bd.eq(7).find(".mz")
                    .delay(500).fadeIn(500, "easeInExpo",
                        () => {
                            // 3. 메시지 수정하기
                            msg.text("악! 여기도!!!");

                            // 4. 다음버튼 보이기
                            $(this).next() // 클릭된버튼 다음버튼
                                .delay(1000).slideDown(300);
                            // delay(시간) 
                            // -> 애니메이션 메서드 앞에 사용!

                        }); //////// fadeIn ////////


            }; /////// 콜백함수 끝 ///////

            // 공통기능함수 호출!
            miniAct(this, 7, callFn);

        }) // 3-3. "윗층으로 도망가!" 버튼 클릭 끝   /////

        // 3-4. "다시옆방으로!" 버튼 클릭 시작 /////////
        .next().click(function () {

            // 콜백함수 : 이동후 실행함수 //
            let callFn = () => {

                // 1. 메시지 변경
                msg
                    .text("여긴 없겠지?...")
                    .fadeIn(200) // 메시지 나타나기
                    .delay(1000)
                    .fadeOut(100, () => {

                        // 2. 메시지 다시 변경
                        msg
                            .html("그래도 무서우니까<br>윗층으로 가자!")
                            .fadeIn(200);

                        // 3. 다음버튼 보이기
                        $(this).next() // 클릭된버튼 다음버튼
                            .delay(1000).slideDown(300);
                        // delay(시간) 
                        // -> 애니메이션 메서드 앞에 사용!

                    }); //////// fadeOut ////////



            }; /////// 콜백함수 끝 ///////

            // 공통기능함수 호출!
            miniAct(this, 6, callFn);

        }) // 3-4. "다시옆방으로!" 버튼 클릭 끝   /////

        // 3-5. "무서우니 윗층으로!" 버튼 클릭 시작 /////////
        .next().click(function () {

            // 콜백함수 : 이동후 실행함수 //
            let callFn = () => {

                // 1. 메시지 변경
                msg
                    .empty() // 선택요소 텍스트 지우기
                    .fadeIn(200, () => {
                        msg.text("무")
                    })
                    .delay(500)
                    .fadeIn(200, () => {
                        msg.text("무.")
                    })
                    .delay(500)
                    .fadeIn(200, () => {
                        msg.text("무.서")
                    })
                    .delay(500)
                    .fadeIn(200, () => {
                        msg.text("무.서.")
                    })
                    .delay(500)
                    .fadeIn(200, () => {
                        msg.text("무.서.워")
                    })
                    .delay(500)
                    .fadeIn(200, () => {
                        msg.text("무.서.워.")
                    })
                    .delay(500)
                    .fadeIn(200, () => {
                        msg.text("무.서.워..")
                    })
                    .delay(500)
                    .fadeIn(200, () => {
                        msg.text("무.서.워...")
                    })
                    .delay(500)
                    .fadeIn(200, () => {
                        // 2. 좀비 달려오기
                        // -> 7번방 좀비: bd.eq(7).find(".mz")
                        let tg = bd.eq(7);
                        // 2-1. 윗층으로 올라오기
                        tg.find(".mz").animate({
                                bottom: tg.height() + "px"
                            }, 500, "easeOutElastic")
                            // 2-2. 주인공에게 달려오기
                            .animate({
                                    right: tg.width() * 1.2 + "px"
                                },
                                2000, "easeOutBounce",
                                () => { // 콜백함수 - 물린후...
                                    // 3. 주인공 사색되기(흑백처리)
                                    mi.css({
                                        filter: "grayscale(100%)"
                                    });
                                    // 4. 메시지 지우기
                                    msg.hide();

                                    // 5. 2초뒤에 좀비되기
                                    setTimeout(() => {
                                        // 5-1. 좀비 이미지변경
                                        mi.find("img")
                                            .attr("src", "images/mz1.png");
                                        // attr(속성명, 속성값)
                                        // -> 속성값 변경 메서드
                                        // 비교) JS의 setAttribute()
                                        // 참고) 속성값 가져오기는
                                        // -> attr(속성명)
                                        // 비교) JS의 getAttribute()

                                        // 5-2. 좀비 메시지
                                        msg.html("나도좀비!;;;<br>어서치료주사를!")
                                            .css({
                                                left: "100%"
                                            }) // 위치변경
                                            .fadeIn(400); // 메시지보이기

                                        // 6. 다음버튼 보이기
                                        $(this).next() // 클릭된버튼 다음버튼
                                            .delay(1000).slideDown(300);
                                        // delay(시간) 
                                        // -> 애니메이션 메서드 앞에 사용!

                                    }, 2000); //// setTimout ///
                                }); ////// animate ///////
                    }); ///////// fadeIn /////////////


            }; /////// 콜백함수 끝 ///////

            // 공통기능함수 호출!
            miniAct(this, 4, callFn);

        }) // 3-5. "무서우니 윗층으로!" 버튼 클릭 끝   /////

        // 3-6. "치료주사방으로!" 버튼 클릭 시작 /////////
        .next().click(function () {

            // 콜백함수 : 이동후 실행함수 //
            let callFn = () => {

                // 1. 메시지 변경
                msg
                    .text("어쩌구")
                    .fadeIn(200); // 메시지 나타나기

                // 2. 다음버튼 보이기
                $(this).next() // 클릭된버튼 다음버튼
                    .delay(1000).slideDown(300);
                // delay(시간) 
                // -> 애니메이션 메서드 앞에 사용!


            }; /////// 콜백함수 끝 ///////

            // 공통기능함수 호출!
            miniAct(this, 2, callFn);

        }) // 3-6. "치료주사방으로!" 버튼 클릭 끝   /////

        // 3-7. "3번방으로!" 버튼 클릭 시작 /////////
        .next().click(function () {

            // 콜백함수 : 이동후 실행함수 //
            let callFn = () => {

                // 1. 메시지 변경
                msg
                    .text("어쩌구")
                    .fadeIn(200); // 메시지 나타나기

                // 2. 다음버튼 보이기
                $(this).next() // 클릭된버튼 다음버튼
                    .delay(1000).slideDown(300);
                // delay(시간) 
                // -> 애니메이션 메서드 앞에 사용!


            }; /////// 콜백함수 끝 ///////

            // 공통기능함수 호출!
            miniAct(this, 3, callFn);

        }) // 3-7. "3번방으로!" 버튼 클릭 끝   /////

        // 3-8. "1번방으로!" 버튼 클릭 시작 /////////
        .next().click(function () {

            // 콜백함수 : 이동후 실행함수 //
            let callFn = () => {

                // 1. 메시지 변경
                msg
                    .text("어쩌구")
                    .fadeIn(200); // 메시지 나타나기

                // 2. 다음버튼 보이기
                $(this).next() // 클릭된버튼 다음버튼
                    .delay(1000).slideDown(300);
                // delay(시간) 
                // -> 애니메이션 메서드 앞에 사용!


            }; /////// 콜백함수 끝 ///////

            // 공통기능함수 호출!
            miniAct(this, 1, callFn);

        }) // 3-8. "1번방으로!" 버튼 클릭 끝   /////

        // 3-9. "헬기를 호출!" 버튼 클릭 시작 /////////
        .next().click(function () {

            // 콜백함수 : 이동후 실행함수 //
            let callFn = () => {

                // 1. 메시지 변경
                msg
                    .text("어쩌구")
                    .fadeIn(200); // 메시지 나타나기

                // 2. 다음버튼 보이기
                $(this).next() // 클릭된버튼 다음버튼
                    .delay(1000).slideDown(300);
                // delay(시간) 
                // -> 애니메이션 메서드 앞에 사용!


            }; /////// 콜백함수 끝 ///////

            // 공통기능함수 호출!
            miniAct(this, 0, callFn);

        }) // 3-9. "헬기를 호출!" 버튼 클릭 끝   /////


}); ///////////////// jQB /////////////////////////