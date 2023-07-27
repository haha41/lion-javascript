import { getNode, getStorage, setStorage } from "./lib/index.js";



const textField = getNode('#textField');

// 글자 적으면 localStorage에 저장
function handleTextField(){
  const value = this.value;

  //  Promise 객체를 반환하지만, handleTextField() 함수는 반환 값을 사용하거나 Promise 체인을 이어가는 것 같은 동작을 하지 않습니다
  setStorage('text',value);
}

// 페이지가 로드되면 로컬 스토리지에서 'text' 키로 저장된 데이터를 가져와서 텍스트 필드에 설정하는 초기화 작업이 수행됨
// 즉, 사용자가 이전에 입력한 내용을 계속 유지
function init(){
  
  // getStorage 함수는 promise 객체를 반환함
  getStorage('text').then((res)=>{
    textField.value = res;
  })
}

textField.addEventListener('input',handleTextField)
window.addEventListener('DOMContentLoaded',init)