const express =require("express");
const app = express();
const port = 3000;
let library =[{
    Name:"Three idots",
    Author:"Chetan Bhagat",
    Language:"English",
    Genre:"One",
    Price:"200",   
},
{
    Name:"Two states",
    Author:"Chetan Bhagat",
    Language:"English",
    Genre:"Two",
    Price:"500",
   
},
];
//get list
app.get("/library" ,(req, res) =>{
    res.json(library);
} );

//insert
app.post("/library" ,(req, res) => {
    const library1=req.body;
    console.log(library1) ;
    library.push(library1);
    res.send("book inserted");
});




//lsten port
app.listen(port, () => console.log(`server listenng at the port ${port}`));