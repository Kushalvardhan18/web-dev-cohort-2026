import fs from 'fs'

setTimeout(() => console.log("Hello from setTimeout"), 1000*20)
setImmediate(()=>console.log("Hello from immediate"))
console.log("Top level code")


/* 
Priority --
1. top level code
2. event loop - expired callbacks
3. setImmediate fns (this fn available only in node JS)
*/