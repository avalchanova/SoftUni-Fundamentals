function number(input) {
    let pattern = /\+359([ |-])2\1[0-9]{3}\1[0-9]{4}\b/g;
    let phoneNums = input[0];
    let match = pattern.exec(phoneNums);
    let res = [];

    while (match !== null) {
        res.push(match[0]);
        //console.log(match[1]);
        match = pattern.exec(phoneNums);
    }
    console.log(res.join(", "));
}
number(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);