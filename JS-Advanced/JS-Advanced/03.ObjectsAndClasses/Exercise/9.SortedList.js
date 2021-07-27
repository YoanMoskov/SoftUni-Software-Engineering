class List {
    constructor() {
        this.numbers = [];
        this.size = this.numbers.length;
    }
    add(element){
        this.numbers.push(element);
        this.numbers.sort((a, b) => a - b);
        this.size += 1;
    }
    remove(index){
        if (index >= 0 && index < this.numbers.length) {
            this.size -= 1;
            return this.numbers.splice(index, 1);   
        }
    }
    get(index) {
        if (index >= 0 && index < this.numbers.length) {
            return Number(this.numbers[index]);
        }
    }
}
let list = new List();
list.add(7);
list.add(6);
list.add(8);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);