
  function getAttr(node, prop){
  // 0. 넘어온 대상이 문자인지를 체크
  // 1. 체크 후 element node로 변경해 줘야함!

  // const node = '.first';
  // const prop = 'id';
  // '.first'.getAttribute('id'); // 문자형은 getAttribute 속성을 갖고 있지않음. getAttribute 메서드는 DOM 객체의 속성이기 때문에 제일 앞에 DOM을 명시해줘야 함

  if(typeof node === 'string'){
    // node = document.querySelector(node);
    node = getNode(node); // getNode : 문자를 실제 element node로 반환
  }

  return node.getAttribute(prop);
}



// first.setAttribute('title', '메세지');

//             '.first','title','인사멘트'
function setAttr(node, prop, value) {

  if(typeof node === 'string'){
    node = getNode(node);
  }

  // 전달받은 prop의 타입이 string이 아니라면 Error!
  // !(typeof prop === 'string') 또는
  if(typeof prop !== 'string'){
    throw new TypeError('setAttr 함수의 두 번째 인수는 문자 타입이어야 합니다.'); // 에러가 난 함수 이름 써주기
  }

  // 비표준으로 받았을 때의 데이터 처리
  // first['title']=>'인사멘트'
  // title을 설정했을 때는 왜 data-title로 되는지?
  // title이 빈문자이면 false이기 때문에 형변환 되서
  if(!node[prop] && prop !== 'class' && prop !== 'title') {
    node.dataset[prop] = value;
    return; // 리턴문 만나면 함수는 더이상 실행하지 않는다. node.setAttribute(prop, value) 실행 X
  }

  node.setAttribute(prop, value); // return 안쓰는 이유 : setting만 하고 끝나는 거기 때문에 값을 내뱉을 필요가 없음

  // return 'sucess' // 굳이 리턴을 쓰고 싶다면...성공 메시지 정도?
}


// 작은 함수를 만들고 보다 큰 함수로 (getter와 setter를 하나의 함수로)
const arrowAttr = (node, prop, value) => !value ?getAttr(node, prop) :setAttr(node, prop, value);

function attr(node, prop, value){

  // if(!value){
  //   return getAttr(node, prop);
  // }else{
  //   setAttr(node, prop, value);
  // }

  return !value ?getAttr(node, prop) :setAttr(node, prop, value); // setAttr이 값 내뱉어도 상관없음. 세팅하는게 목적이니까
}