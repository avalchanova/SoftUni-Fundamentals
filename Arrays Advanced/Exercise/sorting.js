function sorting(arr) {
    let res = [];

    let sortedMin = arr.sort((a, b) => a - b);
    let l = sortedMin.length;
    let sortedMax = sortedMin.splice(l / 2, l).reverse();
    let newL = sortedMax.length;
    // console.log(sortedMax);
    // console.log(sortedMin);
    // console.log("----");

    for (let i = 0; i < newL; i++) {
        // console.log(i);
        res.push(sortedMax.shift());
        res.push(sortedMin.shift());
    }
    console.log(res.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log("-----");
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);