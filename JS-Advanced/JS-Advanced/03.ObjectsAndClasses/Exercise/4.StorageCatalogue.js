function solve(array) {
    let products = [];
    for (let i = 0; i < array.length; i++) {
        let currProduct = {};
        let productTokens = array[i].split(' : ');
        currProduct.name = productTokens[0];
        currProduct.price = Number(productTokens[1]);
        products.push(currProduct);
    }
    products.sort((a, b) => (a.name > b.name) ? 1 : -1);
    let currChar = products[0].name[0];
    console.log(currChar);
    for (let j = 0; j < products.length; j++) {
        if (currChar == products[j].name[0]) {
            console.log(`  ${products[j].name}: ${products[j].price}`);   
        }
        else{
            currChar = products[j].name[0];
            console.log(currChar);
            console.log(`  ${products[j].name}: ${products[j].price}`);   
        }
        let lastChar = products[j].name[0];
    }
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);