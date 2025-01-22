import express from 'express';
const app = express()

app.use('/',(req,res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
    next()
})
app.use(express.json());

app.get('/get',(req, res) => {
    res.send("Hello World!");
})
app.post('/post',(req, res) => {
    console.log(req.body)
    res.send("Hello Post! "+ req.body);
})
app.listen(3000);