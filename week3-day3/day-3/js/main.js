console.clear();

var btn = document.getElementById('add');
btn.addEventListener('click', addValues);

function addValues() {
  var isOfAge = false;
  var num1 = Number(document.getElementById('num1').value);
  // var num2 = parseInt(document.getElementById('num2').value);

  try {
    if (isNaN(num1)) throw "Num1 is not a number.";
    if (num1 < 18) throw "Whoa buddy! Come back next year.";
    // if (isNaN(num2)) throw "Num2 is not a number.";

    isOfAge = true;
  } catch(error) {
    document.getElementById('message').innerHTML = error;

  }

  if (isOfAge) {
    document.getElementById('message').innerHTML = '';
    console.log('Welcome!');
  }
  // console.log(num1 + num2);
}
