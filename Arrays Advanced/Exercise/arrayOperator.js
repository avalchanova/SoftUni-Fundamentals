function arrayOperator(nums, commands) {
    for (let i = 0; i < commands.length; i++) {
        let currentValues = commands[i].split(" ");
        let currentCommand = currentValues.shift();

        currentValues = currentValues.map(Number);
        let sumPairs = 0;
        let arraySumPairs = [];

        switch (currentCommand) {
            case "add":
                let indexToAdd = currentValues[0];
                let valueToAdd = currentValues[1];
                nums.splice(indexToAdd, 0, valueToAdd);
                break;
            case "addMany":
                let indexToAddMany = currentValues.shift();
                let valueToAddMany = currentValues;
                nums.splice(indexToAddMany, 0, valueToAddMany);
                break;
            case "contains": console.log(nums.indexOf(currentValues[0]));
                break;
            case "remove":
                let removeIndex = currentValues[0];
                nums.splice(removeIndex, 1);
                break;
            case "shift":
                for (let i = 0; i < currentValues[0]; i++) {
                    nums.push(nums.shift());
                }
                break;
            case "sumPairs":
                if (nums.length % 2 !== 0) {
                    nums.push(0);
                }
                for (let i = 0; i < nums.length; i += 2) {
                    sumPairs = nums[i] + nums[i + 1];
                    arraySumPairs.push(sumPairs);
                }
                break;
            case "print":
                console.log(`[ ${nums.join(', ')} ]`);
        }
    }
}
arrayOperator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);