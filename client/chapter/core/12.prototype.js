/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우
// 세터, 게터는 객체에서 set, get 키워드로 쓸 수 있음. 그러나 함수처럼 쓸 수 없고, 객체에 키, 밸류 설정하는 것 처럼 쓸 수 있다.

/* 
const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food) {
    this.stomach.push(food); // this는 animal (컨사이스메서드 씀)
  },
  get eat() {
    return this.stomach;
  },
}

animal.eat = '과자' // setter
animal.eat // ['과자'] // getter

const tiger = {
  pattern: '호랑이무늬',
  prey: '',
  hunt(target) {
    this.prey = tiger;
    return `${target}에게 조용히 접근한다.`
  },
  __proto__ : animal
}
*/

/* 
const animal = {
  legs:4,
  tail:true,
  stomach:[],
  set eat(food){
    this.stomach.push(food);
  },
  get eat(){
    return this.stomach;
  }
}

const tiger = {
  
  pattern: '호랑이무늬',
  prey:'',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  },
  __proto__ : animal
}

const fox = {
  prey: '',
}

fox.__proto__ = animal; // fox에게 hunt의 능력은 없음
tiger.__proto__ = animal;
 */



// 객체 생성 : new Object(), 생성자 함수, {}, 일반함수

// 함수는 두가지 일을 할 수 있다. (양면의 얼굴을 가지고 있다)
// 일반 함수
// 생성자 함수 : 객체를 리턴함
// 함수 이름 앞에 대문자로 시작하면 암묵적으로 생성자 함수다? 알지?

function User (name,age,email) {
  this.name = name;
  this.age = age;
  this.email = email
}

function button(){

}

const a = button()

const person1 = new User('선범',32,'tiger@naver.com');



// function Button(name) {
//   this.name = name; // this는 객체 자신을 가리킴 (b = {})
// }

// function button() {

// }

// const a = button() // 일반 함수

// const b = new Button('버튼') // 생성자 함수



// 생성자 함수

function Animal() {
  this.stomach = [];
  this.legs = 4;
  this.tail = true,

  this.eat = function (food) {
    this.stomach.push(food);
  }
  this.printEat = function (food) {
    return this.stomach;
  }
}

const tiger = new Animal(); // animal 생성자 함수가 tiger 객체를 만듦

tiger.pattern = '호랑이 무늬';

tiger.hunt = function (target) {
  this.prey = target,
  console.log(`${target}에게 슬금슬급 접근합니다.`);
}


const cat = new Animal();

cat.say = () => '냐아아아옹';


const fox = new Animal();
const wolf = new Animal();
const dog = new Animal();



// const str = new String('a');
// const num = new Number(1);



const user = {
  sayHi(){
    console.log(this);
  },
  sayBye:()=>{
    console.log(this);
  }
}