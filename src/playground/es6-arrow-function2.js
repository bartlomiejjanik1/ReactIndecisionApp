//arguments object

const add = (a, b) => {
    //console.log(arguments);
    return a+b;
}

console.log(add(55,1, 1001));


//ths keyword - no longer bound

const user = {
    name: 'Bart',
    cities: ['Krakow', 'Warszawa'],
    printPlacesLived: function () {
        this.cities.forEach((city) => {
            console.log(this.name + ' Has lived in ' + city);
        });
    }
};
user.printPlacesLived();
