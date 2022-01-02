{
// function logMessage(value: string){
//   console.log(value);
// }

logMessage('hello');
// logMessage(100); int니까 오류가 나잖슴~
// 근데 int도 string도 아니면 다른것도 쓰고 싶다면??
// unionType

function logMessage(value: string | number){
  if(typeof value === 'number'){
    value.toLocaleString();
  }
  if(typeof value === 'string'){
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

logMessage(12);
//오류 해결!

let sayho: string | number | boolean;
let min: string & number & boolean;
// 스트링이면서 숫자면서 불리언이 될 수는 없으니까 never가 나옴

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person){
  // someone.name만 나오는데
  // 그 이유가 둘 다 만족하는 name만 자동완성이 된다
  // someone.name = 'minwoo';
  //someone.skill
  // dev와 person 둘 다 만족하지 못하기 때문에 에러 발생
}

askSomeone({name:"디벨로퍼", skill:"웹 개발"});
askSomeone({name:"디벨로퍼", age: 12});
// 


function askSomeone2(someone: Developer & Person){
  // dev와 person의 모든 속성을 포함 하는 것 이기 때문에 dev와 person을 둘 다 쓸 수 있다.
  someone.name = 'minwoo';
  someone.age = 0;
}
askSomeone2({name:'asd', skill:'none', age:12});

// union과 intersection은 합집합을 하느냐 교집합을 하느냐의 차이다.
// 그렇기 때문에 합집합을 하는 intersection은 비교적 잘 쓰이지 않게 된다.

}