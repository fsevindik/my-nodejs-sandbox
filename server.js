// nodejs workshop
// 1. Create a simple HTTP server using Node.js

import http from 'http';


const server = http.createServer((req, res) => {
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
   

});

server.listen(7000,() => {
    console.log('Server is running on port 7000');
})


 //dk 44