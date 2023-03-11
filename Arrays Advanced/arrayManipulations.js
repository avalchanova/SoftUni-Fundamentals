function arrayManipulations(input) {
    let arr = input[0].split(' ').map(Number);

    for (let i = 1; i < input.length; i++) {
        let command = input[i].split(' ');

        switch (command[0]) {
            case "Add": arr.push(command[1]); break; // not okay
            case "Remove": // okay
                let num = command[1];
                arr.splice(arr.indexOf(num), 1); break; // not okay; filter
            case "RemoveAt": arr.splice(command[1], 1); break; // not okay
            case "Insert": arr.splice(command[2], 0, command[1]); break; // okay
        }
    }
    console.log(arr.join(' ')); // 4 53 6 8 43 3
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);