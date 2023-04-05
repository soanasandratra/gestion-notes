const express = require("express")
const bodyParser = require("body-parser")
const route = require("./routeAPI").route
// the server
const server = express()

// body parser configuration
server.use(bodyParser.urlencoded({extended : true}))
server.use(bodyParser.json())

// configure route
server.use(route)


// launch the server
server.listen(8080, ()=>{
    console.log("server launched");
})
