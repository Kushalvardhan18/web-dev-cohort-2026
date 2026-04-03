import fs from 'fs'

setTimeout(() => console.log("Hello from setTimeout"), 1000 )

setImmediate(() => console.log("Hello from immediate"))

fs.readFile('sample.txt', 'utf-8', function (err, data) {
    console.log(`File Reading Complete...`);
});
console.log("Top level code")


/* 
Priority --
1. top level code
2. event loop - expired callbacks
3. IO pooling (CPU intensive tasks give to the thread pool, event loop will pooling again and again and look for the completion of this.)
4. setImmediate fns (this fn available only in node JS)
*/