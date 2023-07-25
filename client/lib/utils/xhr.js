

/* 

[readystate]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/

/* const xhr = new XMLHttpRequest(); // 비동기 통신에 필요한 xhr을 가져오겠다. 객체 생성

// console.log(xhr.readyState); // 0


xhr.open('GET', 'https://jsonplaceholder.typicode.com/users') // open 메서드 : 통신 시작하겠다.

// console.log(xhr.readyState); // 1

xhr.addEventListener('readystatechange',()=>{

  const {status, readyState, response} = xhr;

  if(status >= 200 && status < 400){

    if(readyState === 4){
      console.log(JSON.parse(response));
    }

  }else{
    console.log('실패');
  }
  // console.log(xhr.status); // 200
  // console.log(xhr.readyState); // 2, 3, 4
})

xhr.send(); */

/* callback --------------------------------------------- */

// 객체 구조 분해 할당
export function xhr(
  {
    method = 'GET', 
    url = '', 
    onSuccess = null, 
    onFail = null, 
    body = null, 
    headers = {
      'Content-Type':'application.json',
      'Access-Control-Allow-Origin':'*'
    }
  } = {}) { // ={} : 전달받은 객체가 없을 때의 기본값은 객체로 하겠다

  const xhr = new XMLHttpRequest(); 
  xhr.open(method, url)

  // headers 자체가 객체임, entries : 키와 밸류를 반환, forEach를 통해 구조분해할당 가능
  Object.entries(headers).forEach(([key, value])=>{
    xhr.setRequestHeader(key, value);
  })
  // xhr.setRequestHeader('Content-Type', 'application/json'); // 키와 밸류


  xhr.addEventListener('readystatechange',()=>{
    const {status, readyState, response} = xhr; // 구조분해할당
    if(readyState === 4){
      if(status >= 200 && status < 400){
          onSuccess(JSON.parse(response)) // 서버로부터 가져온 값
        }else{
          onFail('실패');
      }
    }
  });

  xhr.send(JSON.stringify(body)); // 문자화 시켜서 전송 (일반 데이터는 서버에 넘길 수 없음)
}

// method, url, onSuccess, onFail, body, headers

// xhr({
//   url: 'https://jsonplaceholder.typicode.com/users',
//   onSuccess:(result)=>{
//     console.log(result);
//   },
//   onFail(err){
//     console.log(err);
//   }, // 객체니까 컨사이스 메서드 가능
//   body:{
//     name:'tiger'
//   },
// });



// xhr.get()
// xhr.post()
// xhr.put()
// xhr.delete()

// 1. 자바스크립트의 합수는 객체다.
// 2. 사용자(협업개발자) 입장 : 쉽게 쓰자
// 3. 설계자 -> 함수 안에 메서드(객체)를 넣어 버리자!



/**
 * 
 * @param {string} url 서버와 통신할 주소 
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백 함수 
 * @param {function} onFail 서버와의 통신 실패시 시행될 콜백 함수
 * @return sever data 
 */


// shorhand property
xhr.get = (url, onSuccess, onFail)=>{
  // xhr 전달해주자!
  xhr({
    url,
    onSuccess,
    onFail
  })
}

xhr.post = (url, body, onSuccess, onFail)=>{
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhr.put = (url, body, onSuccess, onFail)=>{
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhr.delete = (url, onSuccess, onFail)=>{
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail
  })
}



// xhr.get(
//   'https://jsonplaceholder.typicode.com/users',
//   (result)=>{
//   console.log(result);
//   },
//   (err)=>{
//     console.log(err);
//   }
// )



// 유저랜더링(data)
