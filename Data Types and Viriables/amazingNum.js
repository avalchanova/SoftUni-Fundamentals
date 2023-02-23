function amazingNum(a) {

    a = a.toString();
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
        sum += Number(a[i]);
    }

    let res = sum.toString();

    if (res.includes(9)) {
        console.log(`${a} Amazing? True`);
    } else {
        console.log(`${a} Amazing? False`);
    }
}
amazingNum(999);