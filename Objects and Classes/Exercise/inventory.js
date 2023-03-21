function inventory(arr) {

    let heroes = [];

    for (let heroInfo of arr) {
        let [name, level, items] = heroInfo.split(" / ");

        let currentHero = {
            name: name,
            level: +level, //  =  Number(level)
            items: items
        };
        heroes.push(currentHero);
    }
    let sortedByLev = heroes.sort((a, b) => { // new sorted array
        return a.level - b.level;
    });
    // console.log(heroes);
    // console.table(sortedByLev);

    for (let hero of sortedByLev) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);