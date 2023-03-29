function storage(input) {
    let res = new Map();

    for (let line of input) {
        let [product, quantity] = line.split(" ");
        //console.log(product, quantity);

        if (res.has(product)) {
            let oldQuantity = res.get(product);
            res.set(product, oldQuantity + Number(quantity));
        } else {
            res.set(product, Number(quantity));
        }
    }
    for (let [key, value] of res) {
        console.log(`${key} -> ${value}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);