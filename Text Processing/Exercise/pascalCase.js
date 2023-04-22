function pascalCase(input) {
    let arr = [];
    index = 1;
    end = input.length;
    cut = 0;

    while (index < end) {
        if (input.charCodeAt(index) > 64 && input.charCodeAt(index) < 91) {
            arr.push(input.slice(cut, end));
            cut = index;
        }
        index++;
    }
    arr.push(input.slice(cut, end));

    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i - 1].replace(arr[i], "");
    }
    console.log(arr.join(", "));
}
pascalCase('HoldTheDoor');