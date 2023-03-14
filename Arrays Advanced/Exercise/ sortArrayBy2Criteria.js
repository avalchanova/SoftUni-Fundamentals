function sortArrayBy2Criteria(arr) {
    arr.sort(function (a, b) {
        if (a.length > b.length) return 1; // ако дължината на a>b измества а с 1 позиция към края на arr
        if (a.length < b.length) return -1;

        if (a.toLowerCase() > b.toLowerCase()) return 1; // case=insensitive
        if (a.toLowerCase() < b.toLowerCase()) return -1; // порежда по азбучен ред
    });

    console.log(arr.join("\n"));
}
sortArrayBy2Criteria(['beta', "alpha", "gamma"]);
console.log("----");
sortArrayBy2Criteria(["test", "Deny", "omen", "Default"]);