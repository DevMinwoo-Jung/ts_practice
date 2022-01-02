interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  strock: number;
}

// 상품 목록을 받아오기 위한 api 함수
// function fetchProducts():Promise<Product[]>{
//   // ...
// }

// 프로덕트의 일부만 가져옴
interface ProductDetail {
  id: number;
  name: string;
  price: number;
}



// 프로덕트에서 특정 값만 가져오기
//
function displayProductDetail(shoppingItem: {id: number; name; string; price: number}){

}

// 이렇게하면 중복된 코드들이 생기게 된다
// function displayProductDetail2(shoppingItem: ProductDetail){

// }

// 하지만 아래처럼 Pick을 쓰면 코드의 중복도 줄이고 보기도 좋아짐!

type ShoppingItem =  Pick<Product, 'id' | 'name' | 'price'>

// 특정 상품의 상세 페이지 나타내기 위한 함수
function displayProductDetail2(shoppingItem: ShoppingItem){

}

// 유틸리티 타입 사례 - Partial
// 특정 상품 정보 업데이트(갱신)하는 함수

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   strock?: number;
// }
// 근데 이렇게하면 또 코드 중복이다

// function updateProductItem(productItem: UpdateProduct){

// }

type UpdateProduct = Partial<Product>;
function updateProductItem(productItem: UpdateProduct){

}

// 유틸리티 타입 구현 
interface UserProfile{
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1
type UserProfileUpdate = {
  username?: UserProfile['username'];
  email?: UserProfile['email'];
  profilePhotoUrl?: UserProfile['profilePhotoUrl'];
}

// #2 mapped type
// in이 for in과 같은 일을 하는겨
// type UserProfileUpdate2 = {
//   [p in 'username' | 'emial' | 'profilePhotoUrl']?: UserProfile[p]
// }

// #3
type UserProfileUpdate3 = {
  [p in keyof UserProfile]?: UserProfile[p]
}

// #4 최종 Partial
type Subset<T> = {
  [p in keyof T]?: T[p]
}