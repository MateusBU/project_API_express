const sequence = {
    _id: 1,
    get id() {return this._id++}
};

const products = {};  //key is Id, value is the product

function saveProducts(product){
    if(!product.id) 
    {
        product.id = sequence.id;
    }
    products[product.id] = product;
    return product;
}

function getProductbyId(id){
    return products[id] || {};
}

function deleteProductbyId(id){
    if(!products[id])
    {
        return
    }
    const produto = products[id];
    delete products[id];
    return produto;
}

function getAllPorducts(){
    return Object.values(products);
}

module.exports = {saveProducts, getProductbyId, getAllPorducts, deleteProductbyId};