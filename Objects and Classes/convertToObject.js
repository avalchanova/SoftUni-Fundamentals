function convertToObject(text) {

    let obj = JSON.parse(text);
    //console.log(obj);

    for (let key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]} `);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');