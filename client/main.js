

import { tiger } from "./lib/index.js";


const data = await tiger.get('https://jsonplaceholder.typicode.com/users')

console.log(data);