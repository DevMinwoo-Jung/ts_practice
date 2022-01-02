// 함수의 파라미터에 타입을 정의하는 방식
function sum (a: number,b: number) {
  return a + b;
}
console.log(sum(10,20));

// 함수의 반환 값에 타입을 정의하는 방식
function add():number{
  
  return 10;
}

// 두개 합친거 쓰자 ㅎ
function sum2 (a: number,b: number):number {
  return a + b;
}

 // sum2(10,20,30,40);

// optional parameter
function log(a: string, b?: string, c?: string) {

}

// ?는 optional로 없어도 된다!
log('hi');
log('hi2', 'gigi');
// 둘다 ok

