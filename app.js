const express = require('express');
const path  = require('path')

//init app
const app = express();
//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

//home Route
app.get('/', function(req, res){
  let articles = [
    {
      id:1,
      title:'article one',
      author:'kolin jacobs',
      body:'this is aticle one'
    },
    {
      id:2,
      title:'article two',
      author:'kolin jacobs',
      body:'this is aticle two'
    },
    {
      id:3,
      title:'article three',
      author:'kolin jacobs',
      body:'this is aticle three'
    },
  ];
  res.render('index', {
    title:'Articles',
    articles: articles
  })
});
//add Route
app.get('/articles/add', function(req, res){
  res.render('add_article', {
    title:'add article'
  })
});

//start server
app.listen(3000, function(){
  console.log('server started');
});
