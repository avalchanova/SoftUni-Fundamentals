function piccolo(input) {
    let parking = new Set;

    for (let i = 0; i < input.length; i++) {
        let [command, number] = input[i].split(", ");
        //console.log(command);
        switch (command) {
            case "IN": parking.add(number);
                break;
            case "OUT": parking.delete(number);
                break;
        }
    }
    if (parking.size === 0) {
        return console.log("Parking Lot is Empty");
    }
    let arr = Array.from(parking).sort();
    console.log(arr.join("\n"));
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);
console.log("---");
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);