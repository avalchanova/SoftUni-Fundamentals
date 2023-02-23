function requiredReading(bookPages, pagesPerHour, daysToFinish) {
    let totalHours = bookPages / pagesPerHour;
    let requiredHoursPerDay = totalHours / daysToFinish;
    console.log(requiredHoursPerDay);
}
requiredReading(212, 20, 2);