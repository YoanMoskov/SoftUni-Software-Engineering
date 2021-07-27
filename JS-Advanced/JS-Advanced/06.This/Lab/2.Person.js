class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value){
        let nameArr = value.split(' ');
        if(nameArr.length == 2){
            this.firstName = nameArr[0];
            this.lastName = nameArr[1];
        }
    }
}