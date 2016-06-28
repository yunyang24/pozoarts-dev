/**
 * Created by hujingang on 16/6/28.
 */
var express = require("express");
var app = express();

app.get("/",function (req, res) {
    res.send("Hello World!");
});

var server = app.listen(3000,function () {
    var post = server.address().port;

    console.log("Express server listening at:" + post + " start...");
});