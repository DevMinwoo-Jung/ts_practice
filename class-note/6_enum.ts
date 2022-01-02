{
  // enums 특정 값들의 집합
  enum Shoes {
    Nike = '나이키이',
    Adidas = '아디다스',
  }

  var myShoes = Shoes.Nike;
  // 별도의 값을 지정하지 않으면 숫자가 할당된다 그리고 1씩 증가.

  enum Answer {
    Yes = "Y",
    No = 'N',
  }

  // 예제
  function askQ(answer: Answer) {
    if(answer === Answer.Yes) {
      console.log("정답");
    }
    if(answer === Answer.No){
      console.log("노");
    }
  }
  // 이렇게하면 문자열이 정확히 yes이거나 no여야 정상적으로 작동한다.
  // 그런데 enum을 쓰면 enum.property로 하면 되니 사용하기가 더 쉬워지겠지?
  askQ(Answer.Yes);
}