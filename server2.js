// lets make a server but this time do it by express

// before do that commands :  npm init -y
// npm i express and npm i ejs
// "start": "node server2.js" {inside scripts}  do that changes on package.json

// console.log("server2 is on line")

import express from 'express'; 

const app = express();
const port = 7000;

app.set("view engine", "ejs") // this is used to set the view engine to ejs
app.use(express.static("public")) // this is used to serve static files from the public directory

const products =[
    {
        name: "phone",
        id: 0,
        price: 1000,
    },
    {
        name: "laptopp",
        id: 1,
        price: 2000,
    },
    {
        name: "tablet",
        id: 2,
        price: 3000,
    },
    {
        name: "watch",
        id: 3,
        price: 750,
    }
]

//here we are using the ejs file to render the data and route dynamically
app.use("/detail/:id",(req, res) => {
    // res.send("here is   home  page created by express")
 
    const detailProduct = products.find((pr)=> pr.id == req.params.id)
    res.render("detail", {detailProduct })
 })
 

 app.use("/",(req,res,next)=> {
    console.log("this is a middleware")
    //next()  if u comment here u gonna see that page status is pending..... :)
    next()
 })

 
app.use("/",(req, res) => {
  //  res.send("here  is about  page  created by express")
  res.render("products", {products:products }) // this is used to render the ejs file
})



app.listen(port,()=> {
    console.log(`server is running on port ${port}`)
})


// dk 1.10