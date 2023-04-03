function oddOccurences(input) {
    let str = input.toLowerCase();
    console.log(str);

    let arr = str.split(" ");
    console.log(arr);

    let map = new Map();

    for (let el of arr) {
        if (!map.has(el)) {
            map.set(el, 1);
        } else if (map.has(el)) {
            let oldValue = map.get(el);
            map.set(el, oldValue++);
        }
    }
    console.log(map);

}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');