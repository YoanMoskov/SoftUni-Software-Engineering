function solve(array) {
    let carsInfo = [];
    for (let i = 0; i < array.length; i++) {
        let[carBrand, carModel, producedCars] = array[i].split(' | ');
        if (!carsInfo[carBrand]) {
            carsInfo[carBrand] = {};
        }
        if(!carsInfo[carBrand][carModel]){
            carsInfo[carBrand][carModel] = 0;
        }
        carsInfo[carBrand][carModel] += (Number(producedCars));
    }
    let keys = Object.keys(carsInfo);
    keys.forEach(car => {
        console.log(car);
        for (const model in carsInfo[car]) {
            console.log(`###${model} -> ${carsInfo[car][model]}`);
        }
    });
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);