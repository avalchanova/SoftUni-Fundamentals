function addressBook(arr) {
    let book = {};

    for (let line of arr) {
        let [name, address] = line.split(":");
        book[name] = address;
    }
    let entries = Object.entries(book);
    let sorted = entries.sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB);
    });
    for (let [name, address] of sorted) {
        console.log(`${name} -> ${address}`);
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);