function race(input) {

    let map = new Map();
    let nameArr = input.shift().split(", ");

    nameArr.forEach(person => {
        map.set(person, 0);
    });

    let letterPattern = /[A-za-z]+/gm;
    let digitsPattern = /\d+/gm;

    for (let i = 0; i < input.length; i++) {

        let text = input[i];

        if (text === "end of race") {
            break;
        }

        let name = text.match(letterPattern).join("");
        let distance = (text.match(digitsPattern)).reduce((a, b) => {
            return Number(a) + Number(b);
        }, 0);

        if (map.has(name)) {
            let prevDistance = map.get(name);
        }

    }
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);