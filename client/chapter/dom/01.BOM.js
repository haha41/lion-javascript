/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


/* Window 객체 ----------------------------------------------------------- */

// 객체 구조분해할당으로 API(alert, confirm, prompt, setTimeout, setInterval) 나타냄
// 객체 구조분해할당은 confirm() 이런식으로 바로 쓸 수 있음
const { alert, confirm, prompt, setTimeout, setInterval } = window;

console.log(1);


// callback, debounce 

// console.log(3);

const cancelInterval = setInterval(()=>{
  // console.log('이 코드는 1초마다 실행되는 코드입니다.');
},100)


const timer = setTimeout(()=>{
  // console.log('몇초 뒤에 해당 코드가 작동합니다.'); 
  // console.log(2);
  // clearInterval(cancelInterval)
  
},5000)

/* Location 객체 --------------------------------------------------------- */
// http://localhost:8080/index.html?type=listing&page=2#title
// 쿼리문 : ? 뒤의 내용, 서버에서 오는 정보임
// http: 프로토콜 (protocol)
// http://localhost 호스트 (host)
// http://localhost:8000 포트넘버 (port)
// http://localhost:8080/index.html 경로명 (pathname)
// http://localhost:8080/index.html?type=listing&page=2 검색 (search)
// http://localhost:8080/index.html?type=listing&page=2#title 해시 (hash)

const { href, protocol, host, port, search, hash, replace, reload } = location;

const urlParams = new URLSearchParams(location.search);

for (const [key,value] of urlParams) {
  console.log( key,value ); // type listing, page 2
}


/* Navigator 객체 -------------------------------------------------------- */

// platform : 브라우저가 실행되는 플랫폼 정보를 반환
// userAgent : 브라우저와 운영체제 정보를 반환
// language : 브라우저에서 사용되는 언어를 반환
// onLine : 브라우저가 온라인인지 여부를 반환
// geolocation : 

// 네비게이터의 유저에이전트를 소문자로 바꾸고, 그 안에 크롬이 있어? -> 있으면 인덱스 값, 없으면 -1, 
// if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1){
  
  // }
  
const { platform, userAgent, language, onLine, geolocation } = navigator;

// 어떤 브라우저 쓰는지
function browserName() {
  const agent = userAgent.toLowerCase();
  let browserName;
  switch (true) {
    case agent.indexOf('edge') > -1:
      browserName = 'MS edge';
      break;
    case agent.indexOf('opr') > -1:
      browserName = 'Opera';
      break;
    case agent.indexOf('chrome') > -1:
      browserName = 'Chrome';
      break;
    case agent.indexOf('trident') > -1:
      browserName = '🤬IE ?';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Mozilla Firefox';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;

    default:
      browserName = 'other';
      break;
  }
  return browserName;
}

// console.log(browserName()); // Chrome
browserName();


function getLocationPosition(){

  return new Promise((resolve, reject) => {
    geolocation.getCurrentPosition((data)=>{

      if(!data){
        reject({message:'위치 서비스를 활성화 해주세요.'})
      }else{
        const {latitude,longitude} = data.coords;
        console.log(2);
        resolve({latitude,longitude})
      }
    })
  })
}



// geolocation.getCurrentPosition((data) => {
//   // console.log(data);
//   console.log(data.coords.latitude); // 위도
//   console.log(data.coords.longitude); // 경도
// })

/* Screen 객체 ----------------------------------------------------------- */
// height: 모니터 사이즈
// availHeight : 브라우저의 크기
// innerHeight : 브라우저 해상도 크기

const { width, height, availWidth, availHeight, orientation } = screen;


/* History 객체 ---------------------------------------------------------- */
// history.back : 뒤로 가기
// history.forward : 앞으로 가기
// history.go(3) : 앞으로 3번 이동
// history.length

const { back, forward, go, length, pushState, replaceState } = history;

// navigator.mediaDevices.getUserMedia({video:true}) // 브라우저가 카메라 허용할건지 팝업 뜸


// 눈동자 위치 추적
// navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{
  
//   document.querySelector('#videoElement').srcObject = stream;
  
// })



// ssr
// csr