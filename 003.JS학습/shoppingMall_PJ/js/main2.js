// 쇼핑몰 배너 JS - 세로방향 //
// 로드구역 ////////////
window.addEventListener("load", () => {

    console.log("로딩완료!");

    /************************************ 
        [ 슬라이드 이동 기능정의 ]
        1. 이벤트 종류: 클릭
        2. 이벤트 대상: 이동버튼(.abtn)
        3. 변경 대상: 슬라이드 박스(#slide)
        4. 기능흐름: 

        (1) 오른쪽버튼 클릭시 다음슬라이드가
            나타나도록 슬라이드박스의 left값을
            -100%로 이동시킨다!
        -> 이때 바깥에 나가있는 첫번째 슬라이드li를 잘라서
        맨뒤로 보낸다! 동시에 left값을 0으로 변경함!

        (2) 왼쪽버튼 클릭시 
            먼저 맨뒤의 슬라이드 li를 맨앞으로 이동시킨다!
            이때 left -100%로 변경한다!
            이후 left값을 0으로 변경하며 애니메이션함


        5. 추가기능: 슬라이드 위치표시 블릿
        - 블릿대상 : .indic li
        - 변경내용 : 슬라이드 순번과 같은 순번의
        li에 클래스 "on"주기(나머진 빼기-초기화)

    ************************************/


        // 이벤트 대상: .abtn
        let abtn = document.querySelectorAll(".abtn");
        // 변경 대상: 슬라이드 -> #slide
        let slide = document.querySelector("#slide");
        // 변경 대상: 블릿 -> .indic li
        let indic = document.querySelectorAll(".indic li");
        console.log("블릿개수:",indic.length);

        // 슬라이드 li에 순번 속성 주기! //////
        // 주는 이유: li가 잘려서 이동하므로 순서가 항상 바뀌므로
        // 고유한 순서를 지정하기 위함!
        // 지정방법: li에 data-속성명 으로 사용자 정의 속성을 준다!
        // (사용자정의 속성은 data-로 시작하는 속성명이다!)
        // 한번만 실행하는 재귀호출 함수 -> (함수)()
        (()=>{ ///////////////////////////////////////
            // 대상: #slide li
            let tg = slide.querySelectorAll("li");
            for(let i = 0; i<tg.length; i++){
                tg[i].setAttribute("data-seq",i);
            } //////////// for /////////////////
        })(); ////////////////////////////////////////

        // 광클금지 상태값
        let prot = 0; // 1-금지, 0-허용

        /************************************** 
            함수명: goSlide
            기능: 슬라이드를 왼쪽/오른쪽 이동함
        **************************************/
       const goSlide = dir => { // dir - 이동방향(1:오른쪽,0:왼쪽)

            // console.log("잠금상태:",prot);
            
            // 0. 광클금지 //////////
            if(prot) return; // 돌아가!
            prot = 1; // 잠금!
            setTimeout(()=>prot=0,600);
            // 0.6초후 잠금해제! //////

            // 1. 전달값 및 호출확인
            console.log("이동!",dir);

            // 1.5. 슬라이드 li요소들 변수할당!
            let sli = slide.querySelectorAll("li");

            // 2. 방향분기   /////////////

            // 2-1. 오른쪽버튼 ///////////
            if(dir){ // dir===1 이면 true

                // (1) 슬라이드박스의 left값을 -100%로 이동
                slide.style.left = "-100%";
                slide.style.transition = ".6s ease-out";

                // 슬라이드 이동 후 (2),(3) 실행함!
                // 일정시간 후 한번실행하는 타이밍함수는? setTimeout
                setTimeout(()=>{
                    // (2) 첫번째 슬라이드li를 잘라서 맨뒤로 보낸다!
                    slide.appendChild(sli[0]);
                    // appendChild(요소) - 선택요소 맨뒤이동

                    // (3) 동시에 left값을 0으로 변경함!
                    slide.style.left = "0";
                    slide.style.transition = "none";
                    // 트랜지션 없어야 애니메이션 안보임!

                },600); /// 타임아웃 ///



            } //////////// if ///////////

            // 2-2. 왼쪽버튼 //////////////
            else {
                // li요소 대상
                // (1) 먼저 맨뒤의 슬라이드 li를 맨앞으로 이동
                slide.insertBefore(sli[sli.length-1],sli[0]);
                // insertBefore(넣을놈,넣을놈전놈)
                // sli.length-1 -> 컬렉션 마지막번호는 [개수-1]

                // (2) 이때 left -100%로 변경한다!(트랜지션없음!)
                slide.style.left = "-100%";
                slide.style.transition = "none";

                // (3) 이후 left값을 0으로 변경하며 애니메이션함
                // 주의: 위의 설정코드와 분리를 위해 setTimeout으로
                // 약간의 시차를 줌!
                setTimeout(()=>{
                    slide.style.left = "0";
                    slide.style.transition = ".6s ease-out";
                },10); /// 0.01초 시차! ////

            } /////////// else //////////

            // 3. 슬라이드 순번과 동일한 순번의 블릿변경하기
            // 변경방법: 슬라이드 li의 data-seq의 숫자를 읽어서
            // 블릿li의 나머지 블릿은 모두 on을 없애고
            // 해당순번에 class="on"을 준다!

            // 초기화!(class="on"지우기)
            for(let x of indic) x.classList.remove("on");

            // 갱신된 li읽어오기!(오른쪽,왼쪽이동후)
            sli = slide.querySelectorAll("li");

            // 슬라이드의 data-seq의 값을 읽어옴!
            // 오른쪽버튼이동일 경우 두번째 슬라이드[1]
            // 왼쪽버튼이동일 경우 첫번째 슬라이드[0]
            // 버튼 구분번호가 오른쪽 1, 왼쪽 0 -> dir변수
            let seq = sli[dir].getAttribute("data-seq");
            // getAttribute(속성명) -> 속성값읽어오기
            // setAttribute(속성명,속성값) -> 속성값 넣기

            // 해당순번에 class="on" 넣기
            indic[seq].classList.add("on");

             
       }; ////////////// goSlide함수 ///////////////


        // 오른쪽버튼 클릭시
        abtn[1].onclick = () => goSlide(1);

        // 왼쪽버튼 클릭시
        abtn[0].onclick = () => goSlide(0);



}); ///////////// load //////////////////////