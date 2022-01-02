type Heros = 'Hulk' | 'Capt' | 'Thor'

type HeroAges = {[K in Heros]:number}
// Hulk, Cpat, Thor키에 number가 들어간다!

const ages: HeroAges = {
  Hulk: 100,
  Capt: 1000,
  Thor: 100000,
}

// for in 반복문같음!
var arr = ['a','b','c'];
for(var key in arr){
  console.log(key);
}