// nodejs workshop
// 1. Create a simple HTTP server using Node.js

import http from 'http';
import fs from 'fs';
import e from 'express';


const server = http.createServer((req, res) => {


    // guys imagine how computers can save ur all acitons ...):
fs.appendFile("log.txt", req.url, (err, html)=> {
    if(err) {
        throw new Error(err);
    } else {
        switch (req.url) {
            case "/":
                res.end("home page")
                break;
        
            case "/about":
                res.end("about page")
                break;
    
            default:
                res.end("404- page not found")
              
        }
    }
})

   
   

});

server.listen(7000,() => {
    console.log('Server is running on port 7000');
})


 //dk 44