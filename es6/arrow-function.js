// 함수 선언문
function sum(a,b){
  return a+b;
}
// 함수 표현식
var sum = function(a,b){
  return a + b;
}

// 둘은 es5

// es6sms 아래처럼
var sum2 = (a,b) => {
  return a + b;
}

var sum3 = (a,b) => a + b;

// 위 둘은 같은겨

//화살표 함수 in 타입스크립트
var sum = (a:Number, b:number):number => {
  return a + b;
}