function Person(name,age){
  this.name = name;
  this.age = age;
}
var capt = new Person('캡친', 100);

// 위랑 아래는 완전 같다.
// 그럼 왜 쓰냐 syntatic sugar임


class Person {
  //클래스 로직
  constructor(name, age){
    this.name = name;
    this.age = age;
    console.log("생성 됨");
  }
}

let sayho = new Person('sayho', 30); // 생성 되었습니다.
console.log(sayho);