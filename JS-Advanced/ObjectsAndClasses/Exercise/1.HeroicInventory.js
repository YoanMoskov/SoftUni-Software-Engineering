function solve(arrayHeroes) {
    let heroes = [];
    for (let i = 0; i < arrayHeroes.length; i++) {
        let hero = {};
        let heroTokens = splitByDelimiter(arrayHeroes[i]);
        hero.name = heroTokens.shift();
        hero.level = Number(heroTokens.shift());
        hero.items = [];
        heroTokens.forEach(element => {
            hero.items.push(element);
        });
        heroes.push(hero);
    }


    function splitByDelimiter(array) {
        let initialArray = array;
        let tempArray = [];
        let resultArray = [];
        initialArray = initialArray.split(' / ');
        if (initialArray.length > 2) {
            tempArray = initialArray[2].split(', ');
            initialArray.pop();
            resultArray = initialArray.concat(tempArray);
        }
        else{
            resultArray = initialArray;
        }
        return resultArray;
    }
    console.log(JSON.stringify(heroes));
}
solve(['Isacc / 25',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);