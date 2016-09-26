//
// function Dog() {
//   this.fixed = true;
//   this.vaccines = ['Rabies', 'Bordetella'];
// }
//
// var allDogs = [];
//
// var dog1 = new Dog();
// dog1.breed = 'Whippet';
// dog1.name = 'Abbie';
// allDogs.push(dog1);
//
//
// var dog2 = new Dog();
// dog2.breed = "Norwegian Elkhound";
// dog2.name = "Ragnar";
// allDogs.push(dog2);
//
// console.log(allDogs);
//
// for (var i=0; i<allDogs.length; i++) {
//   console.log(allDogs[i]);
// }
//
// var dogs = {
//   "Abbie": {
//     breed: "Whippet"
//   },
//   "Ragnar": {
//     breed: "Norwegian Elkhound"
//   }
// }
// var dogNames = ['Abbie', 'Ragnar'];
//
// for (var i=0; i<dogNames.length; i++) {
//   console.log(dogs[dogNames[i]].breed);
// }
//
// var dog = {
//   name: "Abbie",
//   age: 4,
//   breed: "Whippet Mix",
//   hobbies: ['Fetch', 'Swimming', 'Sleeping']
// }
//
// document.write(dog['name'] +" is a "+ dog.breed +' who loves '+ dog.hobbies.join(', '));
//
//
// var names = ["Robby", "Marliana", "Jason", "Andrew", "Tony", "Marian", "Julia", "Leigh", "Sam", "Samantha", "Lindsey", "Zach", "Chloe"],
//   length = names.length,
//   number, person,
//   container = document.getElementById('namescontainer'),
//   btn = document.getElementById('generate');
//
// btn.addEventListener("click", generateGroup);
//
// function generateGroup() {
//   container.innerHTML = '';
//   if (length > 3) {
//     container.innerHTML = "<p>" + generatePerson() + "</p>";
//     container.innerHTML += "<p>" + generatePerson() + "</p>";
//   } else if (length === 3) {
//     btn.remove();
//     for (var i = 0; i < length; i++) {
//       container.innerHTML += "<p>" + names[i] + "</p>";
//     }
//   }
// }
//
// function generatePerson() {
//   number = Math.floor(Math.random() * length);
//   person = names[number];
//
//   updateGlobals(number);
//   return person;
// }
//
// function updateGlobals(number) {
//   names.splice(number, 1);
//   length = names.length;
// }
