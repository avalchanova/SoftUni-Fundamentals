function week(day) {

    if (day < 1 || day > 7) {
        console.log("Invalid day!");
    } else {
        let myArray = ["Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"];
        console.log(myArray[day - 1]);
    }

}
week(8);