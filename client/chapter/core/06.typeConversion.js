/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log(String(YEAR)); // 명시적 형 변환
console.log(typeof String(YEAR));
console.log(YEAR + ' '); // 암시적 형 변환
console.log(typeof (YEAR + ' '));

// undefined, null
let days = null;
console.log(String(null));
console.log(typeof String(null));
console.log(null + '');

let undef = undefined;
console.log(typeof String(undefined));
console.log(undefined + '');

// boolean
let isClicked = true;
console.log(isClicked);
console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend)); //NaN

// null
let bankbook = null;
console.log(Number(bankbook)); // 0

// boolean
let cutie = false;
console.log(Number(cutie)); // false라서 0, true이면 1

// string
let num = '250'; // 숫자형 문자
console.log(num);
console.log(Number(num)); // 숫자는 파란색으로 보임
console.log( +num );
console.log(num * 1);
console.log(num / 1);

// numeric string
let width = '105.3px';
console.log(Number(width));

let w = window.parseFloat(width, 10); // paseFloat - 뒤에 있는 문자 절삭(숫자만 반환)
console.log(w); // 105.3
let win = window.parseInt(width, 10); // 정수로만 나타냄(소수점 X) - 지수는 안됨(예: 52e3.33px -> 52000 아니고 52로 나옴)
console.log(win); // 105


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 
console.log(Boolean(friend));
console.log(Boolean(bankbook));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));


console.log('암시적 형 변환 : ' + !false); // true
console.log('암시적 형 변환 : ' + !!false); // false