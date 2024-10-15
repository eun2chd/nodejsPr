const express = require('express');
const app = express();
const PORT = 8000;

//views
app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.urlencoded( {extends : true }));
app.use(express.json());

app.get('/' , (req, res) => {
  res.render('join');
})

// ajax get
app.get('/ajax', (req,res) => {
  console.log(req.query);
  res.send(req.query);
});
// ajax post
app.post('/ajax', (req,res) => {
  console.log(req.body);
  res.send(req.body);
});

// axios get
app.get('/axios', (req,res) => {
  console.log(req.query);
  // res.send(req.query);
  res.json(req.query);
});

// fetch get
app.get('/fetch', (req,res) => {
  console.log(req.query);
  // res.send(req.query);
  res.json(req.query);
});


// fetch post
app.post('/fetch', (req,res) => {
  console.log(req.body);
  // res.send(req.query);
  res.json(req.body);
});


// axios post
app.post('/axios', (req,res) => {
  console.log(req.body);
  const id = 'tdc2428';
  const pw = "1234";

  if (req.body.id === id && req.body.pw === pw){
    res.send(req.body);
  } else {
    res.status(401).send('fail');
    console.log('fail')
  }
});



app.listen(PORT, () => {
  console.log(`${PORT} IS ON`);
});
