const port = 3003;

const express = require('express');
const app = express();
const db = require('./DB');

 //for any url, it responds
// app.use((req, answer, next) => {
//     console.log('Middleware 1...')
//     next() //next is necessay to respond correctly
// })

app.get('/products', (req, answer, next) => {
    console.log('Middleware 1...')
    next() //next is necessay to respond correctly
})

app.get('/products', (req, answer, next) => {
    answer.send({name: 'Notebook', price: 123.45}) //convert to json
})

//when I start (npm start)
app.listen(port, () =>{
    console.log(`Server running on port ${port}.`)   //callback
});