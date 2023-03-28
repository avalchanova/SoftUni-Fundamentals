function mapp() {
    let myMap = new Map();
    myMap.set("name", "Alex");
    myMap.set("age", 23);

    for (let [key, value] of myMap) {
        console.log(key, value);
    }
}
mapp();