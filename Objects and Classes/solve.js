function solve(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
                this.name = name;
            this.time = time;
        }
    }
    let n = arr.shift();
    // console.log(n);
    let criteria = arr.pop();

    let songs = [];
    for (let command of arr) {
        let info = command.split("_");
        let typeList = info[0];
        let name = info[1];
        let time = info[2];
        if (criteria === "all") {
            console.log(name);
        } else if (criteria === typeList) {
            console.log(name);
        }
    }
}
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);
