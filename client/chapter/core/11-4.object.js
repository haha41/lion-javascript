/* --------------------------- */
/* Object Methods and This     */
/* --------------------------- */

// 객체 안의 메서드는 무조권 consise method
// method 안의 함수는 무조권 arrow function

// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
const shopOrder = {
  total: 0,
  date: '2023. 7. 11',
  tableIndex: 5,
  menu: [
    { name: '통 새우 돈까스', price: 13000, count: 2 },
    { name: '치즈 돈까스', price: 10000, count: 1 },
    { name: '곰곰 삼계탕', price: 20000, count: 5 },
    { name: '곰곰 해장국', price: 8000, count: 10 },
  ],
  // totalPrice: function() {
  //   console.log(this); //shopOrder
  // }
  //   totalPrice: () => {
  //   console.log(this); // window
  // }
  totalPrice() {
    // console.log(this.menu); //shopOrder
    // let total = 0;
    // this.menu.forEach(function(item) {
    //   total += item.price * item.count;
    // })
    // this.menu.forEach((item) => {
    //   this.total += item.price * item.count;
    // })
    // return total;
    
    // reduce : total이 필요 없음. acc가 해준다.
    // reduce : 값(acc)을 반환해줘야 함 -> 리턴 필수!
    /// reduce의 callback 함수
    // this.menu.reduce((acc, item) => {
    //   return acc + (item.price * item.count)
    // },0)
    return this.menu.reduce((acc,item) => acc + (item.price * item.count) ,0)
  }
};

shopOrder.totalPrice() // => 36000

// let total = 0;

// //forEach : 배열을 순서대로 돌면서 다 찍어줌
// shopOrder.menu.forEach((item) => {
//   total += (item.price * item.count);
//   // console.log(item.price); // 13000, 1000
// })

// console.log(total);



// function totalPrice(...args){

  
//   // args.reduce

//   return total;

// }

// totalPrice(1,2,3,45,6)



// (shopOrder.menu[0].price * shopOrder.menu[0].count) + (shopOrder.menu[1].price * shopOrder.menu[1].count) // 36000



// 메서드와 this 
// ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
// ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
//   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
//   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
//   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만, 
//   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.


// 메서드 단축 구문


// 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this

const navigationMenu = {
  name: '글로벌 내비게이션',
  items: [
    { id: 'link-g', text: 'Google', link: 'https://google.com' },
    { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
  ],
  getItem(index) {
    return this.items[index]; // this는 navigationMenu
  },
  // addItem: (newItem) => {
  //   this.items.push(newItem); // 화살표 함수라서 this는 window이기 때문에 에러남
  // },
  addItem (newItem) {
    this.items.push(newItem); // 컨사이스 메서드
    // console.log(this);
  },
};

// 네비게이션메뉴의 아이템 조회
// navigationMenu.getItem()

navigationMenu.addItem()


// navigationMenu.addItem({
//   id: 'link-l',
//   text: 'Lycos',
//   link: 'http://lycos.co.kr'
// })