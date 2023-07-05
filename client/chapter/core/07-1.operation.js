/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

const a = '10';
const b = '30';

// 단항 연산자
let unary = +a;

// 이항 연산자
let binary = a + b;

// 삼항 연산자
// a가 10이랑 같으면 true 반환하고 같지않으면 false를 반환해라
let ternary = a === 10 ? true : false;

console.log(ternary); // false (a는 문자 10이다.)

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 10 - 2;

// 산술 연산자: 곱셈
let multiplication = 30 * 2;

// 산술 연산자: 나눗셈
let division = 14 / 2;

// 산술 연산자: 나머지
let remainder = 10 % 3;

console.log(remainder); //1

// 산술 연산자: 거듭 제곱
// let power = 2 **53 - 1; // 아래와 동일함
let power = Math.pow(2, 53) -1;

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3'; // 27

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6]; // []은 배열이다. 
console.log(onlyWorkDefaultValues); // 1,2,34,5,6
console.log(typeof onlyWorkDefaultValues); // string

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

// 배열을 합칠 때 쓰는 명령어 concat
// prototype 열어보면 쓸 수 있는 능력을 확인 할 수 있음
const newArray = firstArray.concat(secondArray); // 올드한 방식
console.log(newArray); // [1, 2, 3, 4, 5, 6]

//spread syntax (최신 문법)
console.log( ... firstArray); // 1 2 3 (안의 내용물을 촥 풀어헤침)
console.log( ... firstArray, ... secondArray); // 1 2 3 4 5 6 (전개만 된 상태, 배열은 아님)
console.log( [... firstArray, ... secondArray] ); // [1, 2, 3, 4, 5, 6] (배열 완성)


// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --
let counter = 0;
counter++ // 0 (++counter는 1)
counter // 1

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
// let total = (count % 4) * (count /= 2) + count ** 3; // ?
// 10 % 4 = 2
// 5 = 10 / 2
// 5 *** 3 = 125
// 2 + 5 + 125 = 135

let total = count % 4;
count = count / 2;
let pow = count ** 3; 

total = total * count + pow;

console.log(total); //135