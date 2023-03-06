function repeatString(string, n) {
    let res = "";

    for (let i = 0; i < n; i++) {
        res += string;
    }
    console.log(res);
}
repeatString("abc", 4);