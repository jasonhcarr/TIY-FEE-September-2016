// i = i+1 // i++
// i = i-1 // i--

/** WHILE LOOP **/
// var number = 1;
// while (number < 10) {
//   console.log(number);
//   number++;
// }
// console.log(number);

/** DO WHILE **/
// var number = 1;
// do {
//   console.log(number);
//   number++;
// } while (number <= 5);
// console.log(number);

/** FOR LOP - FIZZBUZZ **/
// If divisible by 3 = fizz
// If divisible by 5 = buzz
// If divisible by 3&5 = fizzbuzz
// else = number

// for (var apple=1; apple < 100; apple++) {
//
//   if (apple % 3 === 0 && apple % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (apple % 3 === 0) {
//     console.log('Fizz');
//   } else if (apple % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(apple);
//   }
//
//
//   // if (i === 3) {
//   //   console.log("Three");
//   // } else {
//   //   console.log(i);
//   // }
//
// }

/** FIZZBUZZ FUNCTION **/
// function fizzbuzz(max, text) {
//   text = text || 'FizzBuzz';
//   // console.log(text);
//   for (var apple=1; apple < max; apple++) {
//     if (apple % 3 === 0 && apple % 5 === 0) {
//       console.log(text);
//     } else if (apple % 3 === 0) {
//       console.log('Fizz');
//     } else if (apple % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(apple);
//     }
//   }
// }
//
// fizzbuzz(25, 'Hoozah!');

/** ARRAYS **/
// var testing = ['TestOne', 23, 'More Content'];
// console.log( testing[2] );
//
// var fake = new Array(testing);
// console.log(fake);

// var names = ["Robby", "Marliana", "Jason", "Andrew", "Tony", "Marian", "Julia", "Leigh", "Sam", "Samantha", "Lindsey", "Zach", "Chloe"];
// var totalNames = names.length;
// console.log( names[12], names[3], totalNames );

// for (var index=0; index < totalNames; index++) {
//   console.log( names[index] );
// }

// console.log( names.pop() );
// console.log(names);
// console.log( names.push('Chloe') );
// console.log(names);

// console.log(names.splice(2, 3));
// console.log(names);


//


/** DOG CONSTRUCTOR **/
// function Dog() {
//   this.fixed = true;
//   this.vaccines = ['Rabies', 'Bordetella'];
// };
//
// var abbie = new Dog();
// abbie.name = 'Abbie';
// abbie.hobbies = 'Swimming';
// console.log(abbie);
//
// var troy = new Dog();


/** DOG OBJECT **/
// var dog = {
//   name: 'Abbie',
//   toys: ['ball', 'squeaky'],
//   breed: 'Whippet',
//   hobbies: 'Fetch',
//   puppyFunction: function(newhobby) {
//     console.log(dog.hobbies, newhobby);
//     console.log(this.toys.length);
//   }
// };

// var dognew = new Object();
// console.log( dog['na'+'me'] );
// console.log( dog.breed );

// dog.puppyFunction('Swimming');

// dog.name = "Troy";
// console.log(dog);
// dog.puppyFunction('Swimming');




/** NEW CLASS & INHERITANCE **/
// This is the Car class
// function Car() {
//   this.tires = 5;
//   this.steeringWheel = true;
//   this.features = [];
// }
//
// // car1 is an instance of the Car class
// var car1 = new Car();
// car1.make = 'Mazda';
// car1.model = "Mazda6";
// car1.features.push('Anti-lock Brakes');
// console.log(car1);
//
// var car2 = new Car();
// car2.make = 'Ford';
// car2.model = 'Taurus';
// car2.sunroof = true;
// console.log(car2);

var buttonStyles = {
  background: 'black',
  color: 'white',
  padding: '20px',
  transform: 'rotate(50deg)'
}

var properties = ['background', 'color', 'padding', 'transform'];
var values = ['black', 'white' ,'20px', 'rotate(50deg)'];

var propertyName = 'padding';


// buttonStyles.padding = '15px';

var btn = document.getElementById('generate');
btn.style = buttonStyles;
btn.style.padding = buttonStyles[propertyName];
btn.style.background = buttonStyles.background;
btn.style.color = buttonStyles.color;
btn.style.transform = buttonStyles.transform;


/**
* @param string theName
* return string theName
**/
function getName(theName) {
  return theName;
}

//
