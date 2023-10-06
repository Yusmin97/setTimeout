//* 1번
setTimeout(function () {
  console.log('첫번째 소사');
  //* 3번
  setTimeout(function () {
    console.log('두번째 뭉기');
    //* 5번
    setTimeout(function () {
      console.log('세번째 밍구');
      //* 6번
    }, 1000);
    //* 4번
  }, 2000);
  //* 2번
}, 3000);
