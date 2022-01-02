// 탕비 호환 - 특정 타입이 다른 타입에 잘 맞는지 확인하는 것을 의미

//인터페이스
interface Devloper {
  name: string;
  skill: string;
}

interface Person{
  name: string;
}

var devloper: Devloper;
var person: Person;
devloper = person;