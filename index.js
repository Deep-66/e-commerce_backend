//import json server
const jsonserver=require("json-server");

//import cors
const cors=require("cors")

//create a server uding json server
const server=jsonserver.create();


const middleware=jsonserver.defaults();

//setup routes
const route=jsonserver.router("db.json"); 

//Implementing Use
server.use(cors())
server.use(middleware)
server.use(route)

//create a port
const PORT=process.env.PORT || 3000

//start server
server.listen(PORT,()=>{
    console.log("Server is running on port" ,PORT);
})


