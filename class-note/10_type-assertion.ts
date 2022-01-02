// 타입 단언
var a;
var b = a as string;

// DOM API 조작
//<div id="app">hi</div>

var div = document.querySelector('div') as HTMLDivElement;

// 타입 단언은 개발자가 typescript보다 타입을 더 잘 경우 사용한다
// 위에서 as HTMLDivElement가 없다면
/**
 * if(div){
  div.innerText
  }
  이렇게 해주거나
  div?.innerText
  이렇게 해줘야한다.
 */