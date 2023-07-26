

const URL = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method:'GET',
  body: null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}

export const tiger = async (options) => {
  
  // const config = {...defaultOptions, ...options} // 객체 합성(오버라이드)
  // const {} = {...defaultOptions, ...options}
  // 그런데 url을 제외한 나머지 객체가 option 이다.
  // const {url, ...restOptions} = {{...defaultOptions, ...options}}

  const {url, ...restOptions} = {
    ...defaultOptions, 
    ...options,
    headers:{ // headers도 깊은 복사 해야 함
      ...defaultOptions.headers,
      ...options.headers
    }
  } // 객체 합성 (url만 따로 빼고 나머지는 객체로)

  const response = await fetch(url, restOptions);

  // console.log( response );

  if(response.ok){
    response.data = await response.json();
  }
  return response;
}

// const response = await tiger({
//   url:URL,
//   method:'POST'
// });

// const userData = response.data;

// console.log(userData);



tiger.get = (url, options)=>{
  return tiger({
    url,
    ...options // url과 options의 값은 객체로 들어오기 때문에 전개해서 작성
  })
}

tiger.post = (url, body, options)=>{
  return tiger({
    method:'POST',
    url,
    body:JSON.stringify(body),
    ...options // options에 있는 것을 전개해서 객체로 넣겠다. (options의 모든 값들이 객체 안에 들어감)
  })
}

// const user = {
//   name:'tiger',
//   age:33,
//   kindness:true
// }

// tiger.post(
//   URL,
//   user
//   )

tiger.delete = (url, options)=>{
  return tiger({
    method:'DELETE',
    url,
    ...options
  })
}

tiger.put = (url, body, options)=>{
  return tiger({
    method:'PUT',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

// userData.forEach((item)=>{
//   console.log( item );
// })



// const reponse = await fetch('https://pokeapi.co/api/v2/pokemon/7')

// console.log(reponse);


// if(reponse.ok){
//   const data = await reponse.json();
//   console.log(data);
// }