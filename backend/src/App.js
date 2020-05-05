const express = require('express');
const app = express();
//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//importing route
const todoListRouters = require('./routers/TodoListRouter')
//Route
app.use('/todoList',todoListRouters)


app.use('/',(req,res)=>{
  
      res.send("NodeJS Application is Started Successfully");
 });


app.listen(app.get('port'),()=>{
  console.log("Start server on port "+app.get('port'))
})