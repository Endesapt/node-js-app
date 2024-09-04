const express = require('express');
const port = 2021;

const app = express();
app.get('/', (req, res) => {
    console.log(req.url)
    res.send('A Simple Node.js Server')
})
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
});
