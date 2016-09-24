// Single Line Comment

/**
 *
 * Block Comment
 *
 **/

// 1. Trigger our function
var button = document.getElementById('runButton');
button.addEventListener("click", createMadLib);

// 2. Collect information
function getName() {
    var name = document.getElementById('theName').value;
    return name;
}

function getMovie() {
    var movie = document.getElementById('favoriteMovie').value;
    console.log(movie);
    if (movie == '' || movie == undefined) {
        movie = "all the moviessssss!";
    }

    return movie;
}

// 3. Insert that into madlib
function createMadLib() {
    var name = getName();
    var movie = getMovie();
    var madlib = "My name is " + name + " and my favorite movie is " + movie + ".";

    //4. Log out the madlib
    console.log(madlib);
}



// function gatherInfo() {
//   var name = document.getElementById('theName').value;
//   var movie = document.getElementById('favoriteMovie').value;
//
//   createMadLib(name, movie);
// }

// var num = Math.random();
// var flavor = 'dark chocolate';
// var message = '';
//
// switch (flavor) {
//   case "dark chocolate":
//     message = "Dark chocolate is my heart!";
//     break;
//
//   case 'chocolate':
//     message += " But all chocolate is great.";
//     break;
//
//   case 'vanilla':
//     console.log("That's a flavor.");
//     break;
//
//   default:
//     console.log(flavor +"?! That's a crazy flavor!");
//     break;
// }
//
// console.log(message);
// if (num < .25) {
//
//     if (num < .19) {
//         console.log(num + " Whoa, real small!");
//     } else {
//         console.log(num + " is a small number.");
//     }
//
// } else if (num >= .25 && num < .5) {
//     console.log(num + " is a medium number.");
// } else if (num > .5) {
//   console.log("Stuffffff");
// } else {
//     console.log(num + " is a larger number.");
// }

//BOOLEAN: TRUE | FALSE

// var amount = 25;
// var newAmount = "Hello Worlds!";
// var newerAmount = 17;
// var newName = "David";
// var isPuddingAwesome = true;
//
// var amount = 25,
//   newAmount = "Hello Worlds!",
//   newerAmount = 17,
//   newName = "David",
//   isPuddingAwesome = true;
//
//
// console.log(typeof amount == "number" && amount > 20);
// console.log(typeof amount == 'string' || amount < 20);

// console.log("newAmount: " + newAmount);
// console.log("newAmount equals undefined? " + (newAmount == undefined));
// console.log(extraNewAmount);
// console.log(newAmount == 25);

// console.log(400 * .5 < 200); // false
// console.log((300 - 100) * 2 > 100); // true
// console.log(2 + 3 == 5); // true
// console.log(2 + 3 == 15); // false
// console.log(2 + 3);
// console.log("Hello " + "World" + "!");
// console.log('Don\'t look now.');
// console.log("Don't look now.");
