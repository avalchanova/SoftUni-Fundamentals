function spice(dailyYield) {

    let totalSpices = 0;
    let days = 0;

    while (dailyYield >= 100) {
        days++;
        totalSpices += dailyYield - 26;
        dailyYield -= 10;
    }
    console.log(days);
    if (days !== 0) {
        console.log(totalSpices - 26);
    } else {
        console.log(totalSpices);
    }

}
spice(111);