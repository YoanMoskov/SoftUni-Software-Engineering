function solve(array) {
    let objects = [];
    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(' | ');
        let obj = {};
        obj.townName = tokens[0];
        obj.productName = tokens[1];
        obj.productPrice = Number(tokens[2]);
        if (objects.some(x => (x.townName == tokens[0] && x.productName == tokens[1]))) {
            obj = objects.find(x => (x.townName == tokens[0] && x.productName == tokens[1]));
            obj.productPrice = Number(tokens[2]);
        } else{
            objects.push(obj);
        }
    }
    let productsList = [];
    let minPrice = Number.MAX_SAFE_INTEGER;
    objects.forEach(element => {
        if (!productsList.includes(element.productName)) {
            productsList.push(element.productName);
        };
    });
    productsList.forEach(product => {
        let prodObjects = [];
        let cheapestObj;
        prodObjects = objects.filter(x => (x.productName == product))
        prodObjects.forEach(element => {
            if(element.productPrice < minPrice){
                cheapestObj = element;
                minPrice = element.productPrice;
            }
        });
        console.log(`${cheapestObj.productName} -> ${minPrice} (${cheapestObj.townName})`);
        minPrice = Number.MAX_SAFE_INTEGER;
    });
}
solve(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'New York City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Mexico City | Audi | 100000',
'Washington City | Mercedes | 1000']);