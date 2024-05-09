//Require module
const express = require('express');
// Express Initialize
const app = express();

const port = 8000;
app.listen(port,()=> {
  console.log('listen port ' + port);
})

//create api
app.get('/hello_world', (req,res)=>{
  var datetime = new Date();
  res.send('Hello World, from port ' + port + ' at ' + datetime);
})

