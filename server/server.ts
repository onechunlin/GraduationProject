
import express from 'express';
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//设置跨域访问
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","POST");
    next();
})
//路由
app.post('/bar', (req, res) => {
    let options = req.body.option;
    // console.log(options);
    res.send(options)
})

app.listen(process.env.PORT || 3000, () => {
    console.log("服务器已开启...");
})