// let person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   let person1 = {
//     firstName: "Patricia",
//     lastName: "Ester"
//   }
  
//   let fullName = person.fullName.apply(person1, [" Bogor", " Indonesia"]);
  
//   console.log(fullName);



let greet = function() {
    return `Halo, ${this.name}! Selamat datang di ${this.city}.`;
};

let person = {
    name: 'Patricia ',
    city: 'Malaysia '
};

let greetingMessage = greet.bind(person);

console.log(greetingMessage());


