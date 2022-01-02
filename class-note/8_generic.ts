{
  // function logText(text){
  //   console.log(text);
  //   return text;
  // }

  // logText(10); // 숫자 10
  // logText('asd'); // 문자열 하이
  // logText(true); // 진위값 true

  // function logText<T>(text : T): T{
  //   console.log(text);
  //   return text;
  // }

  // // logText<string>(10);
  // logText<string>('ya');


  // 기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복 선언의 단점
  // function logText(text){
  //   console.log(text);
  //   return text;
  // }

  //위처험 하면 아래가 다 된다
  // 근데 만약 함수 내에서 split같은걸 쓰고 싶다면
  // 인자를 string으로 고정해야한다.
  // 또한 같은 로직을 가진 함수이지만 다른 타입을 받고 싶다면
  // 아래처럼 해야한다.
  function logNumber(number:number){
    console.log(number);
    return number;
  }
  // 근데 이렇게 써도 작동은 잘 하지만 유지보수 측면에서는 개구리다.

  logText(10);
  logText('1');


  // 기존 문법과 제네릭의 차이점 - 유니온 타입을 이용한 선언 방식의 문제점

  // function logText(text: string | number){
  //   console.log(text);
  //   return text;
  // }

  // 이렇게 하면 문자열과 숫자는 받을 수 있으나
  // 함수 내부에서 string과 number가 공통적으로 가지는 api만 자동완성
  // a는 문자열 임에도 불구하고 string 혹은 number이다 
  const a = logText('a');
  

  // 제네릭의 장점과 타입 추론에서의 이점

  function logText<T>(text: T): T{
    console.log(text);
    return text;
  }

  // 함수를 호출할 때 타입을 지정
  const str = logText<string>('abc');
  str.split('');

  const login = logText<boolean>(true);
  logText(10);
  logText('1');

  // 인터페이스 제네릭 선언
  interface Dropdown {
    value: string;
    selected: boolean;
  }

  // const obj: Dropdown = {value:10, selected: false};
  // value에는 string을 선언해야하는데 num을 넣어서 오류

  // 선언하는 시점에 타입을 선언!
  interface DropdownGeneric<T> {
    value: T;
    selected: boolean;
  }

  const objGeneric: DropdownGeneric<string> ={value: 'abc', selected: false};
  // objGeneric을 선언하면서 type을 정의!


  // 제네릭의 타입 제한
  function logTextLength<T>(text: T[]): T[]{
    console.log(text.length);
    // 어떤 타입이 들어오는지 모르모르 type error가 난다
    // 그런데 여기서 T[]을 해주면
    // string 등의 []타입이 온다는 것을 ts가 알기 때문에
    // 에러가 안난다
    text.forEach((text) => {
      console.log(text);
    });
    return text;
  }

  logTextLength<string>(['hi']);

  //정의된 타입으로 타입을 제한하기
  interface LengthType {
    length: number;
  }

  // 이렇게하면 T는 LengthType을 상속하기 대문에
  // number가 가지고있는 length를 사용할 수 있다.
  // 생각해보면 union으로 할때도 string | number를
  // 했다면 둘 다 포함하는 api를 썻던 것을 생각해보자
  function logTextLength2<T extends LengthType>(text: T):T{
    text.length;
    return text;
  }


  logTextLength2('a');
  a.length;
  // logTextLength2(10);
  //10(num)은 length가 없기 때문에 오류

  // keyof로 제네릭의 타입 제한하기
  
  interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
  }

  function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T):T{
    return itemOption;
  }

  // getShoppingItemOption();
  // getShoppingItemOption<string>('a');
  getShoppingItemOption('name')
  /**
   * 여기서 generic은 key값을 제한하는거지 value를 제한하는 것이 아니다!
   * 그러니까 string이나 number를 쓸 수 있다는게 아니라
   * name,price,stock만 올 수 있는건데
   * 여기에 큰 의미를 두지 말고 type을 제한할 수 있다 정도만 생각하자
   */
  
}