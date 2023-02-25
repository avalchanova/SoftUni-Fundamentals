function gladiator(lostFights, helmetP, swordP, shieldP, armourP) {

    let expenses = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            expenses += helmetP;
        }
        if (i % 3 === 0) {
            expenses += swordP;
        }
        if (i % 6 === 0) {
            expenses += shieldP;
        }
        if (i % 12 === 0) {
            expenses += armourP;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiator(7, 2, 3, 4, 5);