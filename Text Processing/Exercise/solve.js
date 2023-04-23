function solve(text) {
    let arr = text.split("");
    console.log(arr);
    let end = text.length;
    let index = 1;

    while (index < end) {
        if (arr[index] === arr[index - 1]) {
            arr = arr.splice(index, 0);
            console.log(arr);
        }
    }

    console.log(text);
}
solve('aaaaabbbbbcdddeeeedssaa');