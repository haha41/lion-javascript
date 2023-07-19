/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');


section.addEventListener('click',()=>{
  console.log('%c section','color:orange');
},true)

article.addEventListener('click',(e)=>{
  // e.stopPropagation()
  console.log('%c article','color:dodgerblue');
},true)

// e : 이벤트 객체
p.addEventListener('click',(e)=>{
  // P야 너의 번식을 멈춰
  // e.stopPropagation()
  console.log('%c p','color:hotpink');
},true)


/* 캡처링 ----------------------------------------------------------------- */