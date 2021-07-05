var http = require('http');
var fs = require('fs'); //fs는 파일을 로드하는 객체
var server = http.createServer(function(request,response){ //request는 클라이언트에서 서버로, response는 서버에서 클라이언트로 보내진다. 둘다 객체
	var url = request.url;
	if(request.url == '/'){
		url = '/index.html'; //첫 html 화면
	}
	if(request.url == '/favicon.ico'){
		return response.writeHead(404);
	}
	response.writeHead(200); //200은 상태코드 OK 
	response.end(fs.readFileSync(__dirname + url));
});
server.listen(8080);