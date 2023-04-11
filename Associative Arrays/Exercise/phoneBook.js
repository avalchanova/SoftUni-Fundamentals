function solve(arr) {
    let obj = {};

    for (let el of arr) {
        let command = el.split(" ");
        let name = command[0];
        let number = command[1];
        obj[name] = number; //това е начинът за изписване на key-value в случая
    }

    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key} -> ${value}`);
    }

}
solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);