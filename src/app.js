const express = require('express');
const app = express();

app.use(express.static('pubic'));

app.listen(8080, () =>{
    console.log('host running on 8080');
});