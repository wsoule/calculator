const express = require('express');
const app = express();
 
app.use(express.static('src/public'));
 
app.listen(3001);