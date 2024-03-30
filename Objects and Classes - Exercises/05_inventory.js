function registerForHeroes(input) {
    let heroes = [];

    for (let line of input) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items.split(',  ');
        let hero = { name, level, items };

        heroes.push(hero);
    }
    heroes.sort((a, b) => a.level - b.level);
    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    } 
}
console.log(registerForHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])
)