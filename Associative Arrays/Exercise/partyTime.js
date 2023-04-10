function partyTime(input) {
    let vip = [];
    let regular = [];
    let isParty = false;

    for (let line of input) {
        if (line === "PARTY") {
            isParty = true;
            continue;
        }

        if (!isParty) {
            if (isNaN(line[0])) {
                regular.push(line);

            } else {
                vip.push(line);
            }
        } else {
            if (isNaN(line[0])) {
                let index = regular.indexOf(line);
                regular.splice(index, 1);

            } else {
                let index = vip.indexOf(line);
                vip.splice(index, 1);
            }
        }

    }
    let sum = vip.length + regular.length;
    console.log(sum);

    for (let el of vip) {
        console.log(el);
    }
    for (let el of regular) {
        console.log(el);
    }
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);