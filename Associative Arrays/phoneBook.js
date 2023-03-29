function phoneBook(input) {
    let res = {};
    for (let line of input) {
        let [name, phone] = line.split(" ");
        res[name] = phone;
    }

    for (let k in res) {
        console.log(`${k} -> ${res[k]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);