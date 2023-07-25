import { getNode } from "../dom/getNode.js"


export const memo = (()=>{
  


  const cache = {}

  return (key, callback)=>{
    if(!callback) return cache[key]; // 콜백이 없을 때 해당 키의 밸류를 리턴 (getter)

    // console.log(cache);
  
    if(cache[key]){
      console.warn(`${key}는 이미 캐시된 값이 존재합니다.`);
      return cache[key]
    }
  
    cache[key] = callback();
  }
  // console.log(cache); // {cube: div#cube} {cube: 123}
})()

// memo('cube',()=>getNode('#cube'))
// memo('cube',()=>123) // 동일한 변수 넣었을 때 덮어쓰지 않도록 
// 이미 이전 호출 때 {cube: div#cube}가 캐시에 저장되었으므로, 조건문(!callback)에 의해 이번에는 콜백을 실행하지 않고 바로 저장된 값을 반환합니다. 따라서 {cube: 123}은 출력되지 않고, 그저 이전에 저장된 {cube: div#cube}만 출력됩니다.



// console.log(memo('cube'));


// memo('cube') // div#cube

// 객체를 만들어서 key:value 쌍으로 저장

// {
//   cube: <div id="cube"></div>
// }