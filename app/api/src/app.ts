const express = require('express');

const app = express();

const PORT = 5000;

 app.use(express.json());

 app.get('/health', (res , req) =>{
  res.send('sucess')
 });

 app.listen((`console.log('app runing on port${PORT})`));

