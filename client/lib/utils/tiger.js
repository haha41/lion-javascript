

const URL = 'https://jsonplaceholder.typicode.com/users';


const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}


export const tiger = async (options) => {

  const {url,...restOptions} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }
  const response = await fetch(url,restOptions); // response 객체를 반환(그 안에 ok:true)
  if(response.ok){
     response.data = await response.json(); // response 객체의 JSON 데이터를 파싱하여 response 객체의 data 속성에 할당
  }
  return response;
}


tiger.get = (url,options)=>{
  return tiger({
    url,
    ...options
  })
}

// 생성
tiger.post = (url,body,options)=>{
  return tiger({
    method:'POST',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

tiger.delete = (url,options)=>{
  return tiger({
    method:'DELETE',
    url,
    ...options
  })
}

// 수정
tiger.put = (url,body,options)=>{
  return tiger({
    method:'PUT',
    url,
    body:JSON.stringify(body),
    ...options
  })
}



