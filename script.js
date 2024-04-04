//모바일 네비

let openss = document.querySelector("#opens");
openss.addEventListener("click", function () {
    document.querySelector("#opens").style.display = "none";
    document.querySelector("#navs").style.width = "100%";
});

let closess = document.querySelector("#closes");
closess.addEventListener("click", function () {
    document.querySelector("#navs").style.width = "0%";
    document.querySelector("#opens").style.display = "block";
});



//프로덕트 슬라이드

// const slider = document.querySelector('.produts-slider');
// let currentIndex = 0;

// function nextSlide() {
//     currentIndex = (currentIndex + 1) % slider.children.length;
//     updateSlider();
// }

// function updateSlider() {
//     const translateValue = -currentIndex * 100 + '%';
//     slider.style.transform = 'translateX(' + translateValue + ')';
// }

// // 매 3초마다 슬라이드 변경
// setInterval(nextSlide, 3000);
