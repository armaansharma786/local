

   

//Required Packages
const express     = require('express');
const app         = express();
const login       = require('./routes/login');
const post        = require('./routes/post');


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
//require routes
app.use('/', login);
app.use('/post', post);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send('Route not found');
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send('Something broke!');
});

const port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`listening on port ${port}...`));

module.exports = app;