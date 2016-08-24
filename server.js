 const express =require('express');
 const app = express();
 const rules = require('./app/index.js');
 app.use(rules);
 const port = process.env.PORT|| "8080";
 const host = process.env.HOST|| "0.0.0.0";
 app.listen(port,host);

 console.log("Listening on 0.0.0.0:8080...");