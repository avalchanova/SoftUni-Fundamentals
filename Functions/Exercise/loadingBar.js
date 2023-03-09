function loadingBar(num) {
    let str = "..........";
    let arr = str.split("");
    let times = num / 10;

    if (num === 100) {
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    } else {
        for (let i = 0; i < times; i++) {
            let spliced = arr.splice(i, 1, "%");
        }
        let res = arr.join('');
        console.log(`${num}% [${res}]`);
        console.log("Still loading...");
    }
}
loadingBar(30);
console.log('-----');
loadingBar(50);
console.log('-----');
loadingBar(100);