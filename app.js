//first server
const http= require("http");

const server= http.createServer(requestListener);

function  requestListener(req,res){
    console.log("my first server")
res.send({
    msg:"server created",
})
}

server.listen(7000,()=>{
    console.log("server is running")
})