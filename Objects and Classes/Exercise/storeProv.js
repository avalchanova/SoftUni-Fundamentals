function store(arrCurrent, arrDelivery) {

    let products = {};

    for (let i = 0; i < arrCurrent.length; i += 2) {
        let currentProduct = arrCurrent[i];
        let quantity = Number(arrCurrent[i + 1]);
        products[currentProduct] = quantity;
    }
    for (let i = 0; i < arrDelivery.length; i += 2) {
        let deliveryProduct = arrDelivery[i];
        if (!products.hasOwnProperty(deliveryProduct)) {
            products[deliveryProduct] = 0;
        }
        products[deliveryProduct] += Number(arrDelivery[i + 1]);
    }
    for (let el in products) {
        console.log(`${el} -> ${products[el]}`);
    }
}
store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);