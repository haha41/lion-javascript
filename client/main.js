

import { xhr } from "./lib/index.js";

xhr.get('https://jsonplaceholder.typicode.com/users',
  (res)=>{
    console.log(res);
  }
)

// promise
// xhr.get('http://www.naver.com')
// .then((res)=>{

// })
// .catch((err)=>{

// })

// xhr.get()
// xhr.get(
//   'https://jsonplaceholder.typicode.com/users',
//   (res)=>{
//     console.log(res);
//   }
// )

