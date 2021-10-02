// hambuger 버튼을 누르면 메뉴 나타나기
const hambuger = document.querySelector(".hambuger");
const gnb = document.querySelector(".gnb");
const close = document.querySelector(".close");
hambuger.addEventListener("click", function () {
  gnb.classList.add("on"); //gnb.on 붙이기 -> 햄버거 누르면 메뉴오픈
  close.classList.add("on"); //close.on 붙이기 -> x버튼 메뉴에 나타나기
});

// x버튼 누르면 열린 메뉴 닫기
close.addEventListener("click", function () {
  gnb.classList.remove("on");
  close.classList.remove("on");
});

// rolling , active class를 시간이 지나면서 다음 컨텐츠로 이동
// 시간의 개념이 포함된 반복 실행함수
// setInterval(함수,시간)
// 일정 시간이 지난 후 실행하는 함수 (반복실행 X, 한번만 실행)
// setTimeout(함수,시간)
// 시간 매개변수 값의 단위 : ms : 1000ms = 1s
let currentIndex = 0;
let nextIndex = 1;
const slide = document.querySelectorAll(".slide");

setInterval(function () {
  if (nextIndex > 2) {
    nextIndex = 0;
  }

  slide[currentIndex].classList.remove("active");
  slide[nextIndex].classList.add("active");

  slide[currentIndex] = nextIndex;
  nextIndex++;
}, 3000);
