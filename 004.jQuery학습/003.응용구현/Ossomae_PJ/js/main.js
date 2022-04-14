// 옷소매 갤러리 JS - main.js

$(()=>{ /////////////// jQB ///////////////////////

    console.log("로딩완료!");

    // 변경대상: .gbx -> 갤러리 부모박스
    let gbx = $(".gbx");  
    
    // 광클금지 상태변수
    let prot = 0;//0-허용,1-막기

    // 양쪽 이동버튼 클릭시 //////
    // 대상: .abtn
    $(".abtn").click(function(){

        //////// 광클금지 //////////
        if(prot) return;
        prot = 1;//잠금!
        setTimeout(()=>prot=0,400);
        ////////////////////////////

        console.log("오른쪽이냐?",$(this).is(".rb"));

        // 1. 오른쪽 버튼 클릭시
        // 선택자.is(".rb") -> 클래스가 "rb"면 true
        if($(this).is(".rb")){
            // 오른쪽이동은 맨앞div요소를 맨뒤로 이동!
            // 대상: .gbx -> gbx변수
            gbx.append(gbx.find("div").first());
            // append(첫번째div)

        } //////// if ///////////////
        // 2. 왼쪽버튼 클릭시 ////////
        else{ 
            // 왼쪽이동은 맨뒤div를 맨앞으로 이동
            // 대상: .gbx -> gbx변수
            gbx.prepend(gbx.find("div").last());
            // prepend(맨뒤div)
        } ////////// else ////////////

        // 자동넘김 지우기
        clearInterval(autoI);
        clearTimeout(autoT);//쓰나미실행방지!
        // 일정시간후 자동호출!
        autoT = setTimeout(autoCall,4000);
        // 4초후 자동넘김함수 호출!

    }); /////////// click //////////////


    // 인터발용 변수
    let autoI;
    // 타임아웃용 변수
    let autoT;

    // 자동넘김 함수 /////
    const autoCall = ()=>{
        autoI = setInterval(()=>{
            gbx.append(gbx.find("div").first());
        },2000);

        // $(".rb").trigger("click");
        // trigger(이벤트)->이벤트강제발생!

    }; ///////// autoCall함수 //////

    // 자동넘김함수 최초호출!
    autoCall();



}); /////////////////// jQB ///////////////////////