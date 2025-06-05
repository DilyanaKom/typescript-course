class Product {
    private static _productCount: number = 0;
    readonly id: number;
    _name!: string;
    _price!: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        Product._productCount++;
        this.id = Product._productCount;
    }

    static get productCount() {
        return Product._productCount;

    }

    get name() {
        return this._name;
    }
    set name(nameInput) {
        if (nameInput.length < 1) {
            throw new Error('Name should be at least 1 character long!');
        }
        this._name = nameInput;
    }

    get price() {
        return this._price;
    }
    set price(amount) {
        if (amount <= 0) {
            throw new Error('Price should be more than 0!');
        }
        this._price = amount;
    }

    getDetails(): string{
        return `"ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`
    }
}

class Inventory{
    private products: Product[];

    constructor(){
        this.products = [];
    }

    addProduct(product: Product): void{
        this.products.push(product);
    }

    listProducts(): string{
        return `Total products created: ${Product.productCount}`
    }
}

// const inventory = new Inventory();

// const product1 = new Product("Laptop", 1200);

// const product2 = new Product("Phone", 800);


// inventory.addProduct(product1);

// inventory.addProduct(product2)
// console.log(inventory.listProducts());

Product.productCount = 10;

const product = new Product("", 800);

const product2 = new Product("Phone", 0);

product.id = 5;