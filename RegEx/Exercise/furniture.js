function furniture(input) {
    let pattern = /[>]{2}(?<furniture>[A-Z]+[a-z]{0,})[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/g;
    let text = input.join(" "); // преобразуваме в стринг, защото методите на регекс работят само със стринг

    let furnitureArr = [];
    let totalSum = 0;
    let sum = 0;
    let valid = pattern.exec(text); // при липса на съвпадения връща null
    //console.log(valid); //при липса на съвпадения връща null
    console.log("Bought furniture:");


    while (valid !== null) {
        let name = valid[1];
        furnitureArr.push(name);
        let price = Number(valid[2]);
        let quantity = Number(valid[3]);
        let sum = (price * quantity);
        totalSum += sum;
        console.log(name);
        valid = pattern.exec(text);
    }

    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
);