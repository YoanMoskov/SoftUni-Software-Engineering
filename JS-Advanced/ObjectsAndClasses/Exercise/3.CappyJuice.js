function solve(array) {
    let juices = [];
    for (let i = 0; i < array.length; i++) {
        let currJuice = {};
        let juiceTokens = array[i].split(' => ');
        currJuice.name = juiceTokens[0];
        currJuice.quantity = Number(juiceTokens[1]);
        currJuice.bottles = 0;
        if (juices.some(x => x.name == currJuice.name)) {
            juice = juices.find(x => x.name == currJuice.name)
            juice.quantity += currJuice.quantity;
            if (juice.quantity >= 1000 && juice.bottles == 0) {
                let resultedQB = getQuantityAndBottles(juice.quantity, juice.bottles)
                juice.quantity = resultedQB[0];
                juice.bottles = resultedQB[1];
                let index = juices.indexOf(juice);
                juices.splice(index, 1);
                juices.push(juice);
            }
            else if (juice.quantity >= 1000 & juice.bottles > 0) {
                let resultedQB = getQuantityAndBottles(juice.quantity, juice.bottles)
                juice.quantity = resultedQB[0];
                juice.bottles = resultedQB[1];
            }
        }
        else{
            let resultedQB = getQuantityAndBottles(currJuice.quantity, currJuice.bottles)
            currJuice.quantity = resultedQB[0];
            currJuice.bottles = resultedQB[1];
            juices.push(currJuice);
        }
    }
    juices.forEach(juice => {
        if (juice.bottles > 0) {
            console.log(`${juice.name} => ${juice.bottles}`);
        }
    });
    function getQuantityAndBottles(quantity, bottles) {
        while (quantity >= 1000) {
            quantity -= 1000;
            bottles += 1;
        }
        return [quantity, bottles];
    }

}
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);