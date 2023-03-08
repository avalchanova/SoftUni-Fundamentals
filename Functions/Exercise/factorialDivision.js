function factorialDivision(a, b) {
    let resA = 1;
    let resB = 1;
    for (let i = 1; i <= a; i++) {
        resA *= i;
    }
    for (let k = 1; k <= b; k++) {
        resB *= k;
    }
    console.log((resA / resB).toFixed(2));
}
factorialDivision(0, 2);
console.log("-----");
factorialDivision(6, 2);

// factorial 5! = 5*4*3*2*1 = 120