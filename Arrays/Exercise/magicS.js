function magicS(array, n) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === n) {
                console.log(`${array[i]} ${array[j]}`);
            }
        }
    }

}
magicS([1, 7, 6, 2, 19, 23], 8);