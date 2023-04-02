function meetings(arr) {
    let agenda = {};

    for (let line of arr) {
        let [day, name] = line.split(" ");
        if (!agenda.hasOwnProperty(day)) {
            agenda[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }
    for (let [key, value] of Object.entries(agenda)) {
        console.log(`${key} -> ${value}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);