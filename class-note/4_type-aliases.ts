interface PersonInterface {
  name: string;
  age:number;
}

type PersonType = {
  name: string;
  age: number;
}

// 차이??
// 타입은 확장이 되지 않는다!
// 그렇기 때문에 extends 같은 키워드를 쓰지 못한다. 그러므로 interface를 가급적 써라
// 또한 interface의 경우 같은 식별자 사용이 가능하나 type은 불가능하다.
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases

// 타입 별칭의 장점 -> 가독성, 코드 재사용성

var seho2: PersonInterface = {
  name: '세호',
  age: 30,
}

var seho3: PersonType = {
  name: '새호',
  age: 30,
}

type MyString = string;
var str: MyString = 'hi';

type Todo = { id: string; title: string; done: boolean};
function getTodo(todo: Todo){

}