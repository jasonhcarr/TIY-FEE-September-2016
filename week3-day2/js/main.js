console.clear();

var testString = 'Blue Whale';
var testString2 = 'Bigger Whale!';
var concatString = 'Actual string '.concat(testString2);

console.log( 'Blue whale'.includes('Whale') );

var url = 'www.google.com';
var url2 = 'http://www.google.com';
var url3 = 'google.com';

if (url3.includes('http://')) {
  // All is good
} else {
  if (!url3.includes('www.')) {
    url3 = 'http://www.'+ url3;
  } else {
    url3 = 'http://'+ url3;
  }
}
console.log(url3);
console.log(nothing);

console.log('Blue Whale Whale'.replace('Whale', 'Bird'));

console.log('Bluer Whale'.indexOf('Whale'), 'whale'.length);

var dog = {
  name: "Abbie",
  breed: "Whippet",
  weight: 21,
  vaccines: ['Rabies', "bordetella"]
};
var cat = ['thing', 'thing2', 'thing3'];


dog.toys = ['Tennis ball', 'Squeaky cow'];

for (apple in cat) {
  console.log(apple, cat[apple]);
}
