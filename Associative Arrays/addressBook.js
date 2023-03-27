function addressBook(input) {
    let book = {};
    for (let line of input) {
        let [name, address] = line.split(":");
        book[name] = address;
    }

    let entries = Object.entries(book);
    let sortedEntries = entries.sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB);
    });
    for (let [name, address] of sortedEntries) {
        console.log(`${name} -> ${address}`);
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Raya:Apple St',
    'Bill:Ornery Rd']);