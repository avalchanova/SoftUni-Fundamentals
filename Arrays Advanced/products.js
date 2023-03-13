function products(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num++;
        console.log(`${num}.${arr[i]}`);
    }
}
products(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);