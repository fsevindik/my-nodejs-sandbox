// import math from './math.js';

// console.log(math.div(313,3))

 
const { error } = require('console');
const fs = require ('fs');


//sync.   blocking
// fs.writeFileSync("log.txt","log file  test")


//async  non-blocking
// fs.writeFile("log.txt","log test2", (error) => {});


// you see buffer .....
// const readFs=  fs.readFileSync("log.txt")
// console.log(readFs)


//you see now string guys
// const readFs=  fs.readFileSync("log.txt","utf-8")
// console.log(readFs)

// thi will give error because function is ascync 
// const readFs=  fs.readFile("log.txt")
// console.log(readFs)


//but this iwll work properly
// fs.readFile("log.txt","utf-8", (err, html)=>{console.log(html)
 //})


// example of Sync functions
//console.log("1")
//const readFs = fs.readFileSync("log.txt","utf-8");
//console.log(readFs)
// console.log("2")


// example of async functions
// console.log("1")
// fs.readFile("log.txt", "utf-8",(err, html)=> {
  //  console.log("test2")
// })
// console.log("2")


//append file
// fs.appendFileSync("log.txt","appended test");

//dleting file
//fs.unlinkSync("log.txt")

//creating directory
//fs.mkdirSync("test/test2");

