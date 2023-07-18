/* -------------------------------------------------------------------------- */
/*                                    class                                   */
/* -------------------------------------------------------------------------- */

function addClass (node, className) {
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입이어야 합니다.');
  }
  node.classList.add(className); // class를 추가하는 셋팅만 필요하므로 return이 필요없음!
}

function removeClass (node, className) {
  if(typeof node === 'string') node = getNode(node);

  if(!className) {
    node.className = '';
    return; // 함수 종료까지 해야 아래 읽지않음!!
  }

  if(typeof className !== 'string'){
    throw new TypeError('removeClass 함수의 두 번째 인수는 문자 타입이어야 합니다.');
  }

  node.classList.remove(className); // 반환값 필요 없음.
}

const toggleClass = (node, className) => {
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string'){
    throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입이어야 합니다.');
  }

    return node.classList.toggle(className); // toggle이 true, false를 내보내니까 똑같이 맞춰서 설정해주는거라고 함.
}

/* -------------------------------------------------------------------------- */
/*                                     css                                    */
/* -------------------------------------------------------------------------- */

function setCss(node,prop,value){

  if(typeof node === 'string') node = getNode(node);
  
  if(!(prop in document.body.style)){
    throw new SyntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }
  
  if(!value) throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값 입니다.');

  node.style[prop] = value; // [ ] 사용. 변수에는 대괄호!
}

function getCss(node,prop){
  if(typeof node === 'string') node = getNode(node);
  
  if(!(prop in document.body.style)){
    throw new SyntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }

  return getComputedStyle(node).getPropertyPriority(prop);
}

const css = (node, prop, value) => {
  return !value ? getCss(node, prop) : setCss(node, prop, value);
}