const sequence = {
    _id: 1,
    get if() {return this._id++}
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

function getAllPorducts(){
    return Object.values(products);
}

module.exports = {saveProducts, getProductbyId, getAllPorducts};