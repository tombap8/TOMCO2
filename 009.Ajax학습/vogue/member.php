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
    <!-- 1. 상단영역 인클루드 -->
    <?php include "inc/top.inc" ?>

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

    <!-- 3. 하단영역 인클루드 -->
    <?php include "inc/info.inc" ?>

</body>

</html>