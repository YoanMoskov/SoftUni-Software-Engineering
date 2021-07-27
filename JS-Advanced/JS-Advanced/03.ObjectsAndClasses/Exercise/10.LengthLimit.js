class Stringer{
    constructor(string, length) {
        this.string = string;
        this.length = length;
        this.initialString = string;
    }
    increase(length){

    }
    decrease(length){
        if(length >= this.length){
            return '...';
        }
    }
    toString(){
        return
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test