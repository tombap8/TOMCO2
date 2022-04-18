<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>갤러리 | 보그 코리아 (Vogue Korea)</title>
    <!-- 탭메뉴 아이콘(favicon:favorite icon) -->
    <link rel="shortcut icon" href="images/icon.jpg" type="image/x-icon">
    <!-- 폰티스토 sns아이콘 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css">
    <link rel="stylesheet" href="css/swiper-bundle.min.css">
    <link rel="stylesheet" href="css/gallery.css">
    <!-- 미디어쿼리는 본css아래에 넣음! -->
    <link rel="stylesheet" href="css/media.css">
    <script src="js/smoothScroll20.js"></script>
    
    <!-- 제이쿼리 라이브러리 + 제이쿼리UI -->
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    
    <script src="js/linksys.js"></script>
    <script src="js/swiper-bundle.min.js"></script>
    <script src="js/gallery.js"></script>
    <script src="js/common.js"></script>
</head>

<body>
    <!-- 로그인 세션처리 인클루드 -->
    <?php include "inc/login_session.inc" ?>

    <!-- 1. 상단영역 인클루드 -->
    <?php include "inc/top.inc" ?>

    <!-- 2. 메인영역 -->
    <div class="bgc">
        <main class="cont ibx disel">
            <!-- 1. 로그인 페이지 탑영역 -->
            <header class="ctop">
                <!-- 1-1.서브타이틀 -->
                <h2 class="stit">Gallery</h2>
            </header>

            <!-- 2. 로그인 페이지 컨텐츠 박스 -->
            <section class="scont">
                <!-- Swiper -->
                <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="images/people/cont2-1a.jpg" alt="보그갤러리이미지"></div>
                        <div class="swiper-slide"><img src="images/fashion/cont1-2b.jpg" alt="보그갤러리이미지"></div>
                        <div class="swiper-slide"><img src="images/people/cont2-3a.jpg" alt="보그갤러리이미지"></div>
                        <div class="swiper-slide"><img src="images/fashion/cont2-1b.jpg" alt="보그갤러리이미지"></div>
                        <div class="swiper-slide"><img src="images/fashion/cont2-2b.jpg" alt="보그갤러리이미지"></div>
                        <div class="swiper-slide"><img src="images/fashion/cont2-3b.jpg" alt="보그갤러리이미지"></div>
                        <div class="swiper-slide"><img src="images/beauty/cont1-2a.jpg" alt="보그갤러리이미지"></div>
                        <div class="swiper-slide"><img src="images/beauty/cont2-3b.jpg" alt="보그갤러리이미지"></div>
                        <div class="swiper-slide"><img src="images/beauty/cont1-1b.jpg" alt="보그갤러리이미지"></div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                </div>
            </section>

        </main>
    </div>

    <!-- 3. 하단영역 인클루드 -->
    <?php include "inc/info.inc" ?>

</body>

</html>