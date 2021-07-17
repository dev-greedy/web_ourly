const express = require('express');
const dotenv = require('dotenv'); // 코드 공유 기능이 많은 모듈인가봄. 확인 필요.
const morgan = require('morgan'); 
const bodyparser = require("body-parser");
const path = require('path'); // 얘는 기본적으로 node에 깔려있는 모듈이다. npm으로 받을 필요 없다.

const app = express();

dotenv.config({path:'config.env'}) 
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny')); // morgan을 통해 콘솔에 log가 나온다.

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

// set view engine
app.set("view engine", "ejs"); // 예를 통해서 ejs 파일은 별도의 설정 없이 템플릿에 다 들어가는 거 같다.

// load assets
// 이게 뭔가 디렉토리 path를 virtual로 표현하는 거 같다. 
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

app.get('/',(req,res)=>{
	res.send("Crud Application");
})

app.listen(PORT, ()=>{console.log(`Server is running on http://localhost:${PORT}`)});