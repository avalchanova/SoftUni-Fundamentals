function mergeArr(firstArr, secondArr) {
    let newArr = [];
    let lengthArr = firstArr.length;
    let newString = 0;

    for (let i = 0; i < lengthArr; i++) {
        if (i % 2 === 0) {
            newString = Number(firstArr[i]) + Number(secondArr[i]);
        } else {
            newString = firstArr[i] + secondArr[i];
        }
        newArr.push(newString);
    }
    console.log(newArr.join(' - '));

}
mergeArr(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);