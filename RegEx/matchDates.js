function matchDates(data) {
    let pattern = /\b(?<day>[0-9]{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>[0-9]{4})\b/g;
    let validDate = pattern.exec(data);

    while (validDate !== null) {
        let day = validDate.groups["day"];
        let month = validDate.groups["month"];
        let year = validDate.groups["year"];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        validDate = pattern.exec(data);
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);