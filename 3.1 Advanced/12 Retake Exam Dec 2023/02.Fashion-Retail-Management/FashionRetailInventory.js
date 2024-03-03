class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {

        const existProdIndex = this.productStock.findIndex((prod) => prod.productName === productName && prod.size === size);

        if (existProdIndex !== -1) {
            this.productStock[existProdIndex].quantity += quantity;
            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        } else {
            this.productStock.push({ productName, size, quantity, price });
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
    }

    sendProduct(productName, size) {

        const prodIndex = this.productStock.findIndex((prod) => prod.productName === productName && prod.size === size);

        if (prodIndex === -1) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }
        else {
            const removedProduct = this.productStock.splice(prodIndex, 1)[0];
            return `The product ${removedProduct.productName}, size ${removedProduct.size} was successfully removed from the inventory`;
        }
    }

    findProductsBySize(size) {

        const matchProducts = this.productStock.filter((prod) => prod.size === size);

        if (matchProducts.length === 0) {
            return "There are no products available in that size";
        }
        else {
            const result = matchProducts.map((prod) => `${prod.productName}-${prod.quantity} pieces`);
            return result.join(", ");
        }
    }

    listProducts() {
        if (this.productStock.length === 0) return `${this.storehouse} storehouse is empty`;
        else
        {
            const title = `${this.storehouse} storehouse in ${this.location} available products:`;
            const prodInfo = this.productStock
                .sort((a, b) => a.productName.localeCompare(b.productName))
                .map((prod) => `${prod.productName}/Size:${prod.size}/Quantity:${prod.quantity}/Price:${prod.price}$`
                );
            return [title].concat(prodInfo).join('\n');
        }
    }

}

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());
