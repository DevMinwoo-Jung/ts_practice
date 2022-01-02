interface Email {
  value: string;
  selected: boolean;
}


const emails: Email[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

interface ProductNumber {
  value: number;
  selected: boolean;
}

// interface를 여러개 정의하면 코드는 그럭저럭 굴러가지만
// type이 추가될때마다 추가해야 하기 때문에 코드의 유지보수, 가독성이 구려진다
// 그렇다면 generic을 쓰면 되겠지!

const numberOfProducts: ProductNumber[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: Email | ProductNumber) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag && selectTag.appendChild(item);
});

numberOfProducts.forEach((prodruct) => {
  const itme = createDropdownItem(prodruct)
})