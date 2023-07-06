/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value; // b가 false


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy: false};
//Boolean([]) -> true, 빈 객체도 true
// 전부 다 true여서 마지막께 튀어나옴


// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || {thisIsTruthy: true};
// [2, 3].length -> 배열의 개수: 2 -> 2는 true
// 따라서 2가 나옴