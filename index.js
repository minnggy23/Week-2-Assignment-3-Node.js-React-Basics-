const http = require("http");

const fs = require("fs").promises;

const requestListener = function(req,res){
    console.log(req.url);

    if(req.url == "/"){
        fs.readFile(__dirnam + "/home.html")
            .then(
                contents => {
                    res.setHeader("Content-Type", "text/html; charset=UTF-8");
                    res.writeHeader(200); 
                    res.end(contents);
                }
            )
    } else{
        fs.readFile(__dirnam + "/links.json")
            .then(contents =>{
                res.setHeader("Content-Type", "application/json; charset=UTF-8");
                    res.writeHeader(200); 
                    res.end(contents);
            });
    }
};

const server = http.createSever(requestListener);

const host = "127.0.0.1";
const port = "3000";

server.listen(
    port,
    host,
    ()=>{
        console.log('Server is running');
    }
);