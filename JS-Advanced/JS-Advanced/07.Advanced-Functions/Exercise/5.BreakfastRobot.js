function solution() {
    let orders = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    }
    let ingridients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0, 
        restock: function(type, qty) {
            Object.keys(ingridients).forEach(el => {
                if (el == type) {
                    ingridients[el] += Number(qty);
                }
            });
            return 'Success';
        },
        prepeare: function(type, qty) {
            let isValid = true;
            let output = 'Success';
            let propMissing = '';
            Object.keys(orders).forEach(el => {
                if (el == type) {
                    Object.keys(orders[el]).forEach(prop => {
                        if (orders[el][prop] * qty <= ingridients[prop]) {
                            
                        }
                        else{
                            if (propMissing == '') {
                                propMissing = prop;
                            }
                            isValid = false;
                        }
                    });
                }
                if (isValid == true && type == el) {
                    Object.keys(orders[el]).forEach(prop => {
                        ingridients[prop] -= orders[el][prop] * qty;
                    });
                }
                else if (isValid == false && type == el){
                    output = `Error: not enough ${propMissing} in stock`;
                }
            });
            return output; 
        },
        report: function() {
            return `protein=${this.protein} carbohydrate=${this.carbohydrate} fat=${this.fat} flavour=${this.flavour}`;
        }

    }
    function inner(string) {
        [action, type, qty] = string.split(' ');
        let trackOrder = orders;
        let output = '';
        let trackIngridients = ingridients;
        if (action == 'restock') {
            output = trackIngridients.restock(type, qty);
        }
        else if (action == 'prepare') {
            output = trackIngridients.prepeare(type, qty);
        }
        else if (action == 'report') {
            output = trackIngridients.report();
        }
        console.log(output);
        return output;
    }
    return inner;
}
let manager = solution();
manager('restock protein 100');
manager('restock carbohydrate 100');
manager('restock fat 100');
manager('restock flavour 100');
manager('report');
manager('prepare apple 2');
manager('report');
manager('prepare apple 1');
manager('report');



