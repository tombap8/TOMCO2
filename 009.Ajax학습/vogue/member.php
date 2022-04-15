<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입 | 보그 코리아 (Vogue Korea)</title>
    <!-- 탭메뉴 아이콘(favicon:favorite icon) -->
    <link rel="shortcut icon" href="images/icon.jpg" type="image/x-icon">
    <!-- 폰티스토 sns아이콘 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css">
    <link rel="stylesheet" href="css/member.css">
    <!-- 미디어쿼리는 본css아래에 넣음! -->
    <link rel="stylesheet" href="css/media.css">
    <script src="js/smoothScroll20.js"></script>
    
    <!-- 제이쿼리 라이브러리 + 제이쿼리UI -->
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    
    <script src="js/linksys.js"></script>
    <script src="js/member.js"></script>
    <script src="js/common.js"></script>
</head>

<body>
    <!-- 1. 상단영역 -->
    <div id="top">
        <header class="top ibx">
            <!-- 1-1. 상단메뉴 -->
            <div class="tmenu">
                <!-- 1-1-1. sns박스 -->
                <div class="sns">
                    <a href="#" class="fi fi-instagram">
                        <span class="ir">
                            인스타그램
                        </span>
                    </a>
                    <a href="#" class="fi fi-facebook">
                        <span class="ir">
                            페이스북
                        </span>
                    </a>
                    <a href="#" class="fi fi-twitter">
                        <span class="ir">
                            트위터
                        </span>
                    </a>
                    <a href="#" class="fi fi-youtube-play">
                        <span class="ir">
                            유튜브
                        </span>
                    </a>
                    <a href="#" class="fi">
                        <span class="ir">
                            카카오스토리
                        </span>
                    </a>
                </div>
                <!-- 1-1-2. 사이드메뉴 -->
                <div class="sideMenu">
                    <ul class="smbx">
                        <li>
                            <a href="#">
                                SIDE MENU
                            </a>
                            <!-- 서브메뉴 -->
                            <ol class="smsub">
                                <li>
                                    <a href="#">회사 소개</a>
                                </li>
                                <li>
                                    <a href="#">광고 및 제휴</a>
                                </li>
                                <li>
                                    <a href="#">개인정보 처리방침</a>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <a href="#">
                                SUBSCRIBE
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 1-2. 로고박스 -->
            <h1 class="logo">
                <a href="#">
                    <img src="images/mlogo.png" alt="메인로고">
                </a>
            </h1>
            <!-- 1-3. GNB박스 -->
            <nav class="gnb">
                <ul>
                    <li>
                        <a href="#">FASHION</a>
                    </li>
                    <li>
                        <a href="#">BEAUTY</a>
                    </li>
                    <li>
                        <a href="#">LIVING</a>
                    </li>
                    <li>
                        <a href="#">PEOPLE</a>
                    </li>
                    <li>
                        <a href="#">VIDEO</a>
                    </li>
                    <li>
                        <a href="#">RUNWAY</a>
                    </li>
                    <li>
                        <a href="#">SHOPPING</a>
                    </li>
                    <li>
                        <a href="#" class="fi fi-search">
                            <span class="ir">search</span>
                        </a>
                    </li>
                </ul>
            </nav>
            
            <!-- 모바일용 햄버거버튼 -->
            <a href="#" class="mobtn hbtn fi fi-nav-icon">
                <span class="ir">GNB button</span>
            </a>
            <!-- 모바일용 검색버튼 -->
            <a href="#" class="mobtn sbtn fi fi-search">
                <span class="ir">search</span>
            </a>
        </header><!-- .top -->
        <!-- 1-4.모바일 검색박스 -->
        <div class="mos">
            <div class="mwrap">
                <!-- 입력창박스 -->
                <div id="search">
                    <input type="text" class="search">
                </div>
                <!-- 검색버튼 -->
                <button class="scbtn fi fi-search">
                    <span class="ir">돋보기검색아이콘</span>
                </button>
            </div>
        </div>

        <!-- 1-5.모바일 전체메뉴 -->
        <div id="mobx">
            <!-- 1.5-1.모바일 GNB 메뉴 -->
            <nav class="mognb">
                <ul>
                    <li>
                        <a href="#">FASHION</a>
                    </li>
                    <li>
                        <a href="#">BEAUTY</a>
                    </li>
                    <li>
                        <a href="#">LIVING</a>
                    </li>
                    <li>
                        <a href="#">PEOPLE</a>
                    </li>
                    <li>
                        <a href="#">VIDEO</a>
                    </li>
                    <li>
                        <a href="#">RUNWAY</a>
                    </li>
                    <li>
                        <a href="#">SHOPPING</a>
                    </li>
                </ul>
            </nav>
            <!-- 1.5-2.모바일 sns 메뉴 -->
            <div class="mosns">
                <a href="#" class="fi fi-instagram">
                    <span class="ir">인스타그램</span>
                </a>
                <a href="#" class="fi fi-facebook">
                    <span class="ir">페이스북</span>
                </a>
                <a href="#" class="fi fi-twitter">
                    <span class="ir">트위터</span>
                </a>
                <a href="#" class="fi fi-youtube-play">
                    <span class="ir">유튜브</span>
                </a>
                <a href="#">
                    <span class="ir">카카오스토리</span>
                </a>

            </div>
            <!-- 1.5-3.매거진박스 -->
            <figure class="magbox">
                <!-- 잡지커버이미지 -->
                <a class="mcover" href="#">
                    <img src="./images/cover.jpg" alt="보그표지">
                </a>
                <!-- 잡지설명 -->
                <figcaption>
                    정기구독을 신청하면 최대 30% 할인혜택을 드립니다!
                </figcaption>
                <!-- 정기구독버튼 -->
                <button class="magbtn">정기구독 신청</button>
            </figure>

            <!-- 하단링크박스 -->
            <ul class="moblink">
                <li>
                    <a href="#">회사소개 /</a>
                </li>
                <li>
                    <a href="#">광고 및 제휴 /</a>
                </li>
                <li>
                    <a href="#">
                        <strong>개인정보 처리방침</strong>
                    </a>
                </li>
            </ul>
        </div>
    </div><!-- #top -->
    <!-- 2. 메인영역 -->
    <div class="bgc">
        <main class="cont ibx">
            <!-- 1. 로그인 페이지 탑영역 -->
            <header class="ctop">
                <!-- 1-1.서브타이틀 -->
                <h2 class="stit">Member</h2>
            </header>

            <!-- 2. 로그인 페이지 컨텐츠 박스 -->
            <section class="scont">
                <div id="meminfo">
                    <form action="process.php" method="POST">
                        <ul>
                            <li>
                                <label for="mid">아이디</label>
                                <input type="text" id="mid" name="mid" maxlength="25" placeholder="영문자로 시작하는 6~20글자 영문자/숫자">
                                <span class="msg"></span>
                            </li>
                            <li>
                                <label for="mpw">비밀번호</label>
                                <input type="password" id="mpw" name="mpw" maxlength="20" placeholder="특수문자,문자,숫자포함 형태의 5~15자리">
                                <span class="msg"></span>
                            </li>
                            <li>
                                <label for="mpw2">비밀번호확인</label>
                                <input type="password" id="mpw2" name="mpw2" maxlength="20" placeholder="비밀번호 확인을 입력해 주세요">
                                <span class="msg"></span>
                            </li>
                            <li>
                                <label for="mnm">이름</label>
                                <input type="text" id="mnm" name="mnm" maxlength="20" placeholder="이름을 입력해 주세요">
                                <span class="msg"></span>
                            </li>
                            <li>
                                <label for="gen1">성별</label>
                                남성
                                <input type="radio" name="gen" id="gen1" value="m">
                                여성
                                <input type="radio" name="gen" id="gen2" checked value="w">
                                <!-- 라디오버튼은 name속성값을 같은
                                이름으로 하면 하나만 선택되는
                                 그룹핑이된다. 
                                 checked속성은 미리선택되게 함
                                 ※중요!!! -> value 값을 넣어야
                                 선택된 값을 DB에 전송할 수 있다!
                                 남성은 "m", 여성은 "w"
                                -->
                            </li>
                            <li>
                                <label for="email1">이메일</label>
                                <input type="text" id="email1" name="email1" placeholder="이메일앞주소">
                                @
                                <select name="seleml" id="seleml">
                                    <option value="init">선택해주세요</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="daum.net">daum.net</option>
                                    <option value="hotmail.com">hotmail.com</option>
                                    <option value="hanmail.net">hanmail.net</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="free">직접입력</option>
                                </select>
                                <span class="msg"></span>
                            </li>
                            <li>
                                <label for="email2"></label>
                                <input type="text" id="email2" name="email2" placeholder="이메일뒷주소">
                            </li>
                            <li>
                                <!-- 서브밋버튼 -->
                                <input type="submit" value="가입하기" id="btnj">
                            </li>
                        </ul>
                    </form>
                </div>
            </section>
            
        </main>
    </div>

    <!-- 3. 하단영역 -->
    <div class="bgc">
        <footer class="info ibx">
            <!-- 3-1.하단로고 -->
            <div class="blogo">
                <img src="images/footer_logo.png" alt="하단로고">
            </div>
            <!-- 3-2.회사주소 -->
            <address class="addr">
                WWW.VOGUE.COM Ⓒ CONDÉNAST ASIA PACIFIC. INC. ALL RIGHTS RESERVED. VOGUE.COM KOREA IS OPERATED BY DOOSAN
                MAGAZINE.
            </address>
            <!-- 3-3.하단링크 -->
            <ul class="blink">
                <li>
                    <a href="#">정기구독</a>
                </li>
                <li>
                    <a href="#">회사소개</a>
                </li>
                <li>
                    <a href="#">광고 및 제휴</a>
                </li>
                <li>
                    <a href="#">개인정보 처리방침</a>
                </li>
            </ul>
        </footer>
    </div>

    <!-- 위로가기버튼 -->
    <a href="#" class="tbtn fi fi-angle-up">
        <span class="ir">위로가기버튼</span>
    </a>

</body>

</html>