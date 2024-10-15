// express 불러오기
const express = require('express');
const app = express();
const PORT = 8000;

// EJS 설정하기
app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', (req, res) => {
  console.log(req.query);
  res.render('index');
}); 

app.get('/login', (req,res) => {
  console.log(req.query);
  res.render('result', {userInfo : req.query});
});

app.post('/login', (req,res) => {
  console.log(req.query);
  res.render('result', {userInfo : req.query});
});

app.listen (PORT, () => {
  console.log(`${PORT} Service on`);
})
