function cardGame(input) {

    let players = new Map();

    let cardTypeObj = {
        "C": 1,
        "D": 2,
        "H": 3,
        "S": 4
    };
    let cardPowerObj = {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    };
    for (let line of (input)) {
        let split = line.split(": ");
        let name = split.shift();
        let hand = split[0].split(", ");
        if (!players.has(name)) {
            players.set(name, new Set);
        }
        for (let card of hand) {
            players.get(name).add(card);
        }
    }
    for (let [key, value] of players) {
        let sum = 0;
        for (let card of value) {
            let cardInfo = card.split("");
            let cardType = cardInfo.pop();
            let cardPower = cardInfo.join("");
            let cardPowerAsNum = cardPowerObj[cardPower];
            let cardTypeAsNum = cardTypeObj[cardType];
            sum += cardPowerAsNum * cardTypeAsNum;
        }
        console.log(`${key}: ${sum}`);
    }

}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);