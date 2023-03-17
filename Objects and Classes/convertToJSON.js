function convertToJSON(name, lastName, hairColor) {
    let obj = { name: name, lastName: lastName, hairColor: hairColor };
    //console.log(obj);

    let jsonString = JSON.stringify(obj);
    console.log(jsonString);
}
convertToJSON('George',
    'Jones', 'Brown');