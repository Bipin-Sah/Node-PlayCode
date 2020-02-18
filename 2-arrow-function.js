const materials = [
    'Hydrogen', 'Helium', 'Lithium', 'Berylium'
];
const materialLength = materials.map(material => material.length);
// console.log(materialLength);

// const square = function (x) {
//     return x*x;
// }

// const square = (x) => { return x*x; }
const square = (x) => x*x ;

console.log(square(8));

const event = {
    name: 'Birthday Party',
    // printGuestList: function () {
    //     console.log('Guest List for ', this.name);
    // }

    /* Arrow function is not working due to 'this'. */
    // printGuestList : () => {
    //     console.log('Guest List for ', this.name);  
    // }
    guest: ['Andrew', 'Jon', 'Mani'],

    printGuestList() {
        console.log('Guest List for ', this.name);
        this.guest.forEach((guest)=> {
            console.log(guest, 'Attending to ', this.name);
        })  
    }
}
event.printGuestList();
