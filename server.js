const http = require("http");
const express = require("express");
const app = express()

app.get("/", function(req, res){
    res.send("<h1>servidor rodando com Express</h1>")
})
http.createServer(express).listen(3000, () => console.log("servidor rodando na porta 3000"));