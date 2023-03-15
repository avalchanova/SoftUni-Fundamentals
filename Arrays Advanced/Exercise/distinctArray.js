function distinctArray(arr) {

    let newArr = [];

    for (let el of arr) {
        if (newArr.includes(el)) {
            continue;
        } else {
            newArr.push(el);
        }
    }
    console.log(newArr.join(' '));

}
distinctArray([1, 2, 1, 3, 4]);