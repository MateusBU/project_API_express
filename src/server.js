const port = 3003;

const express = require('express');
const app = express();
const db = require('./DB');

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/products', (req, res, next) => {
    res.send(db.getAllPorducts()) //gets all products and converts to json
});

// :id is the ID of the product. Example: (/products/3)
app.get('/products/:id',(req, res, next) => {
    res.send(db.getProductbyId(req.params.id)) //to get the id, it uses req.params.id
});

app.post('/products', (req, res, next) => { 
    //callback
    const product = db.saveProducts({
        name_prod: req.body.name_prod,
        price_prod: req.body.price_prod
    });
    res.send(product); //JSON
});

app.put('/products/:id', (req, res, next) => { 
    //callback
    const product = db.saveProducts({
        id: req.params.id,
        name_prod: req.body.name_prod,
        price_prod: req.body.price_prod
    });
    res.send(product); //JSON
});

app.delete('/products/:id', (req, res, next) => { 
    //callback
    const product = db.deleteProductbyId(req.params.id);
    res.send(product); //JSON
});

//when I start (npm start)
app.listen(port, () => {
    console.log(`Server running on port ${port}.`)   //callback
});