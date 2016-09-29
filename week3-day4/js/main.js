$(document).ready(function() {
  // console.log('Big whoop!');

  $('nav ul').append('<li>I guess nobody cares.</li>');

  $('a').first().attr('title', 'First brand new Link');
  $('a').last().attr({
    title: 'Last brand new Link',
    href: 'http://www.google.com'
  });

  $('a').eq(2).css({
    color: 'red',
    textDecoration: 'none'
  });

  $('a').parents('footer').css('backgroundColor', 'grey');
  $('header').find('a'); // .find() is preferred

  // $('li').first().addClass('active');
  $('li').addClass('inactive');

  $('li').click(function(event) {
    // $('li.active').removeClass('active');
    // $(this).addClass('active');
    // $('li').not('visible').fadeIn();
    // $(this).slideToggle();

    console.log(event);
    $(this).slideUp(function() {
      console.log('Now hidden!');
      $(this).css('color', 'red').slideDown();
    });

  });

var headline = $('h1');
var specificListItem = $('li').first();
// console.log(headline);
$(headline).css('color', 'red');
$listItems = $('li');
var $link = $('a').first();
// console.log($link);
$link.css('color','green');


$('form').submit(function(event) {
  event.preventDefault();
  var theName = $("input[type='text']").val();
  console.log(theName);
});

$("input[type='text']").focus(function() {
  $(this).css('border', '5px solid red');
});



/**
* Event Delegation - Best Practice
*/
// $('li').click(function() {
//   console.log('whatever');
// });

$('.unordered-list-container').on('click', 'li', function() {
  console.log('Event Delegation!');
});



});
