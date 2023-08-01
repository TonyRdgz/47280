class Productmanager{
    constructor(){
        this.products = [];
    }
//Para retorna todos los productos
    getProducts(){
        return this.products;
    }
    getProductbyId(id){
    let product = this.products.find(prod = prod.id == id); 
        if(product){
            return product;
        }
        return "Not found"
    }
}

class Product{
    constructor(title, description, price, tumbnail, code, stock){

        this.title = title;
        this.description = description;
        this.price = price;
        this.tumbnail = tumbnail;
        this.code = code;
        this.stok = stock;
    }

    static incrementarID(){
        if(this.idIncrement){
            this.idIncrement++
        }else{
            idIncrement = 1;
        }
        return this.idIncrement
    }
}
addProduct(product){
    if(this.products.fine(prod= prod.code == product.code))
    {
        return "Producto ya presente con este código" 

    }if (product.code =! "" || product.stock = 0){
        this.products.push(product)
    }else{
        return "No puedo cargar un archivo active"
    }
}

const product1 = new Product("Arroz","Rico",1000,"","1,2,3",20);
const product2 = new Product("Arroz","Rico",1000,"","1,2,3",20);

console.log(product1)
censole.log(product2)