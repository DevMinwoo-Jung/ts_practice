// interface Dev {
//   name :string;
//   skill: string;
// }

// interface Person {
//   name: string;
//   age: number;
// }

// function introduce(): Dev | Person {
//   return { name: 'Tony', age: 33, skill: "Iron Man"}
// }
// var tony = introduce();
// // tony에서 skill을 찍고 싶은데 tony. 자동완성을 보니 skill이 없다
// // uion type이라 둘 다 해당하는 name만 가능하기때문!
// // console.log(tony.)

// if((tony as Dev).skill){
//   var skill = (tony as Dev).skill;
//   console.log(skill);
// } else if ((tony as Person).age){
//   var age = (tony as Person).age;
//   console.log(age);
// }

// // 타입 단언으로만 하면 뭔가 존내 복잡하다.


// // 타입가드의 정의. 타입 가드는 is Something으로 한다
// function isDev(target: Dev | Person): target is Dev{
//   return(target as Dev).skill !== undefined;

// }

// if(isDev(tony)){
//   console.log(tony.skill);
// } else {
//   console.log(tony.age)
//   //age도 자동완성이 되는데 이유는 idDev가 Dev 아니면 Person인데 if가 아니면 dev의 타입은 person이기 떄문!!
  
// }