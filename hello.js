var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req, res){ 

var count = 0;
  var handler = function(error, content){
    count++;
    if (error){
      console.log(error);
    }
    else{
      res.write(content);
    }

    if (count == 2) {
      res.end();
    }
  }
  if(req.url != "/favicon.ico"){
    aURL = (req.url=="/")?"":req.url;
    var doc = "."+aURL+"/index.html";
    fs.readFile("./shared/menu.html", handler);
    fs.readFile(doc,handler);
  }
}).listen(8080);