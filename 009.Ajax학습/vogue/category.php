<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> | 보그 코리아 (Vogue Korea)</title>
    <!-- 탭메뉴 아이콘(favicon:favorite icon) -->
    <link rel="shortcut icon" href="images/icon.jpg" type="image/x-icon">
    <!-- 폰티스토 sns아이콘 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css">
    <link rel="stylesheet" href="css/category.css">
    <!-- 미디어쿼리는 본css아래에 넣음! -->
    <link rel="stylesheet" href="css/media.css">
    <script src="js/smoothScroll20.js"></script>
    
    <!-- 제이쿼리 라이브러리 + 제이쿼리UI -->
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    
    <script src="js/linksys.js"></script>
    <script src="js/category.js"></script>
    <script src="js/common.js"></script>
</head>

<body>
    <!-- 로그인 세션처리 인클루드 -->
    <?php include "inc/login_session.inc" ?>

    <!-- 1. 상단영역 인클루드 -->
    <?php include "inc/top.inc" ?>

    <!-- 2. 메인영역 -->
    <div class="bgc">
        <main class="cont ibx">
            <!-- 1. 카테고리 페이지 탑영역 -->
            <header class="ctop">
                <!-- 1-1.서브타이틀 -->
                <h2 class="stit"></h2>
                <!-- 1-2.서브메뉴
                    (LNB-Local Navigation Bar) -->
                <nav class="lnb"></nav>
            </header>

            <!-- 컨텐츠 유형2 -->
            <div class="pt3 rbx">
                <div class="rbxIn fbx">
                    <div class="cbx bgi bg1-1">
                        <h2></h2>
                    </div>
                    <div class="cbx bgi bg1-2">
                        <h2></h2>
                    </div>
                    <div class="cbx bgi bg1-3">
                        <h2></h2>
                    </div>
                </div>
            </div>
            <!-- 컨텐츠 유형2 -->
            <div class="pt3 rbx">
                <div class="rbxIn fbx">
                    <div class="cbx bgi bg2-1">
                        <h2></h2>
                    </div>
                    <div class="cbx bgi bg2-2">
                        <h2></h2>
                    </div>
                    <div class="cbx bgi bg2-3">
                        <h2></h2>
                    </div>
                </div>
            </div>
        </main>
    </div>
    
    <!-- 3. 하단영역 인클루드 -->
    <?php include "inc/info.inc" ?>

</body>

</html>