class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
    }
    newCustomer(ownerName, petName, kind, procedures){
        if (this.clients.length + 1 == this.capacity) {
            throw new Error('Sorry, we are not able to accept more patients!');
        }
        if (this.clients[ownerName] != undefined) {

        }   
        this.clients[ownerName] = []
        let pet = {
            petName, 
            kind, 
            procedures,
        }
        clients[ownerName].push(pet);
        //Update workload prop
        return `Welcome ${petName}`;
    }
    onLeaving(ownerName, petName){
        if (this.clients[ownerName] == undefined) {
            throw new Error('Sorry, there is no such client!');
        }
        if (!this.clients[ownerName].petName == petName) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`)
        }
    }

}
let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])); 
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
console.log(clinic.toString());