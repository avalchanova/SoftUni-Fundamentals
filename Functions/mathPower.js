function mathPower(a, b) {
    let res = 1;
    for (let i = 0; i < b; i++) {
        res = res * a;
    }
    console.log(res);
    //console.log(a ** b);
}
mathPower(2, 8);