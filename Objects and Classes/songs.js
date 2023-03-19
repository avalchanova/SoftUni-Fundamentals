function songs(inputArr) {
    class Songs { }
    let num = inputArr.shift();
    let type = inputArr.pop();

    for (let el of inputArr) {
        let command = el.split("_");
        //console.log(command);
        let typeList = command[0];
        let name = command[1];
        let time = command[2];
        //console.log(typeList, name, time);

        if (type === "all") {
            console.log(name);
        } else if (type === typeList) {
            console.log(name);
        }
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);