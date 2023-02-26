function reverse(n, array) {

    let newArr = [];
    for (let i = n - 1; i >= 0; i--) {
        newArr.push(array[i]);
    }
    console.log(newArr.join(" "));

}
reverse(3, [10, 20, 30, 40, 50]);