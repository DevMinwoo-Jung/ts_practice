
  let a;
  // 아무것도 할당하지 않아 any로 추론
  let str = 'asd';
  // string으로 추론

  function getB(b = 10){
    let c = 'hi';
    return b + c;
  }
  // b(number기본값)과 c(string)의 덧셈이라 string으로 추론


  // 인터페이스와 제네릭을 이용한 타입 추론 방식
  interface Dropdown<T> {
    value: T;
    title: string;
  }

  let shoppingItemss: Dropdown<string> = {
    value: 'condom',
    title: 'sagami',
  }

  //복잡한 구조에서의 타입 추론 방식
  interface DetailDropDown<K> extends Dropdown<K> {
    description: string;
    tag: K;
    /**
     * value
     * key
     * 가 들어오는데 여기서 값은 DetailDropDown의 제너릭으로 된다
     */
  }

  var detailedItem: DetailDropDown<Number> = {
    title: 'book',
    description: 'ab',
    value: 10000,
    tag: 12345,
  }

  // Best Common Type 추론 방식 - 가장 적절한 타입
  var arr = [1,2,true, 'ㄴ'];
  // (string | number | boolean)[] -> 교집합으로 된다(union으로 묶어 나간다 라고 생각하자)
