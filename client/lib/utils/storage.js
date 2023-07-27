import { typeError } from "../error/typeError.js";
import { isString } from "./typeOf.js";


// 브라우저 환경과 Node.js 환경 모두에서 전역 객체의 localStorage를 storage 변수에 할당
const {localStorage:storage} = globalThis; // 구조 분해 할당 후 리네임


// setItem
export function setStorage(key, value) {

  return new Promise((resolve, reject) => {
    if(isString(key)){
      resolve()
      storage.setItem.apply(key, JSON.stringify(value));
    } else {
      reject({message: 'key는 문자 타입이어야 합니다.'})
    }
  })
}

  // if(isString(key) !== 'string'){
  //   typeError('key는 문자 타입이어야 합니다.')
  // }
  //   storage.setItem(key, JSON.stringify(value));



  export function getStorage(key){
    return new Promise((resolve, reject) => {
      if(isString(key)){
        resolve(JSON.parse(storage.getItem(key)))
      }else{
        reject({message:'key는 문자 타입 이어야 합니다.'});
      }
    })
  }
  
  export function deleteStorage(key){
    return new Promise((resolve, reject) => {
      !key ? storage.clear() : storage.removeItem(key); // 성공만,,,key가 없으면 모두 지우고, 키가 있으면 해당을 삭제
      resolve(); // 해당 Promise를 성공 상태로 만들 것이며, 호출한 곳에서는 .then()을 사용하여 성공 처리를 할 수 있음
    })
  }



// getStorage('user'); // => {}

// storage.setItem('user', {name:'tiger'});
