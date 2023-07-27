
import { insertLast, tiger } from "./lib/index.js";



const response = await fetch(URL);
const data = await response.json();

console.log( data );

// fetch(URL).then((result)=>{

//     result // response object
//     return result.json()
// })
// .then((result)=>{
//   console.log( result );
// })