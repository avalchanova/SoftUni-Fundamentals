function towns(input) {

    let town = {};

    for (let el of input) {
        let data = el.split(" | ");
        //console.log(data);

        let name = data[0];
        let latitude = Number(data[1]).toFixed(2);
        let longitude = Number(data[2]).toFixed(2);

        town.town = name;
        town["latitude"] = latitude;
        town.longitude = longitude;

        console.log(town);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);