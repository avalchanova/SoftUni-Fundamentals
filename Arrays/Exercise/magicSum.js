function magicSum(array, n) {
    for (let i = 0; i < array.length; i++) {
        for (let k = i + 1; k < array.length; k++) {
            if (array[i] + array[k] === n) {
                console.log(`${array[i]} ${array[k]}`);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8);