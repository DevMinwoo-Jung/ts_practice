{
interface User {
  age: number;
  name: string;
}

// seho는 age와 name을 무조건 정의 해줘야함!

// 변수에 활용한 인터페이스
let seho: User = {
  age:33,
  name: '세호',
}

// 함수에 인터페이스 활용
// 파라미터의 타입을 인터페이스로 정의!
function getUser(user: User) {
  console.log(user);
}

const badex = {
  name: '캡틴',
}

// getUser(badex);
// user형식에 맞지 않기 떄문에 오류 발생!

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;

sum = (a:number,b:number):number => {
  return a + b;
}
// 인덱싱
interface StringArray {
  [index:number]: string;
}

var arr: StringArray = ['a','b','c'];
arr[0] = '10';
// arr[0] = 10;


// 인터페이스 딕셔너리
interface StringRegexDictionary {
  [key:string]: RegExp,
}

var obj: StringRegexDictionary = {
  sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
//  cssFile: 'css' value가 정규표현식이 와야하는데 안왔잖슴~
}
//
Object.keys(obj).forEach(value => value);

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

// interface Developer {
//   name: string;
//   age: number;
//   lageguage: string; 
// } 이렇게 써도 되지만 귀찮잖슴

interface Developer extends Person {
  language: string;
}

// let capt: Developer = {
//   language: 'hi';
// }  langugag만 써서 에러

let capt: Developer = {
  name: 'minwoo',
  age: 29,
  language: 'hi',
}


}
