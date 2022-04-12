// 카테고리 페이지 JS  - category.js

// Get 방식으로 넘어온 값 받기!
let pm = location.href;
// 물음표와 이퀄로 자르고 값만 가져오기
pm = pm.split("?")[1].split("=")[1];
console.log("카테고리:",pm);