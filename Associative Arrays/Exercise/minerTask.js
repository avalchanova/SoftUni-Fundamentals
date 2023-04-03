function minerTask(input) {
    let obj = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (!obj.hasOwnProperty(resource)) {
            obj[resource] = 0;
        }
        obj[resource] += quantity;
    }
    for (let item in obj) {
        console.log(`${item} -> ${obj[item]}`);
    }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);
console.log("------");
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);