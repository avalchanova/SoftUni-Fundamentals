function houseParty(input) {
    let guestList = [];

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        let arr = [1, 2, 3];
        // console.log(command);
        let name = command.shift();
        if (command.join(" ") === "is going!") {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        } else if (guestList.includes(name)) {
            guestList.pop(name);
        } else {
            console.log(`${name} is not in the list!`);
        }
    }
    console.log(guestList.join("\n"));
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);