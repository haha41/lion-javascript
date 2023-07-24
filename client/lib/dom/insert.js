
import { getNode } from "./getNode.js";

export function insertBefore(node,text){
  if(typeof node === 'string') node = getNode(node);
  
  if(node.nodeType !== document.ELEMENT_NODE){
    throw new ReferenceError('insertBefore 함수의 첫 번째 인수는 ELEMENT NODE 이어야 합니다.');
  }
  node.insertAdjacentHTML('beforebegin',text);
}

export function insertFirst(node,text){
  if(typeof node === 'string') node = getNode(node);
  
  if(node.nodeType !== document.ELEMENT_NODE){
    throw new ReferenceError('insertFirst 함수의 첫 번째 인수는 ELEMENT NODE 이어야 합니다.');
  }
  node.insertAdjacentHTML('afterbegin',text);
}

export function insertLast(node,text){
  if(typeof node === 'string') node = getNode(node); // 실제 DOM 요소 노드로 변환
  
  if(node.nodeType !== document.ELEMENT_NODE){
    throw new ReferenceError('insertLast 함수의 첫 번째 인수는 ELEMENT NODE 이어야 합니다.');
  }
  node.insertAdjacentHTML('beforeend',text); // 첫번째 if문 실행 후 실행됨
}

export function insertAfter(node,text){
  if(typeof node === 'string') node = getNode(node);
  
  if(node.nodeType !== document.ELEMENT_NODE){
    throw new ReferenceError('insertAfter 함수의 첫 번째 인수는 ELEMENT NODE 이어야 합니다.');
  }
  node.insertAdjacentHTML('afterend',text);
}


// TDD



// beforebegin => insertBefore
// afterbegin  => insertFirst
// beforeend   => insertLast
// afterend    => insertAfter