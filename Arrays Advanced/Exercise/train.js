function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let maxCapacity = +arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        if (command[0] === "Add") {
            wagons.push(Number(command[1]));
        } else {
            for (let a = 0; a < wagons.length; a++) {
                if (Number(command) + wagons[a] <= maxCapacity) {
                    wagons[a] += Number(command[0]);
                    break;
                }
            }
        }
        wagons.push();
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);