{
  class Person {

    private name:string;
    public age:number;
    readonly log: string;
    // readonly는 접근만 가능하고 바꾸는거 불가능!

    // 위에 안쓰면 에러남! 이게 자바스크립트와의 차이
    constructor(name:string, age:number) {
      this.name = name;
      this.age = age;
  
    }
    
  }
}