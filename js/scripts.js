var triangleFinder = function(side_1, side_2, side_3) {
  if ((side_1 === side_2) && (side_2 === side_3)) {
    return 'equilateral';

  } else if ((side_1 === side_2) || (side_1 === side_3) || (side_2 === side_3)) {
    return 'isosceles';

  } else if ((side_1 >= (side_2 + side_3)) || (side_2 >= (side_1 + side_3)) || (side_3 >= (side_1 + side_2))) {
    return 'not a valid';

  } else  {
    return 'scalene';
  };
};


$(document).ready(function() {
  $('form#triangle-finder').submit(function(event) {
    var side_one = parseInt($('input#side_one').val());
    var side_two = parseInt($('input#side_two').val());
    var side_three = parseInt($('input#side_three').val());

    var result = triangleFinder(side_one, side_two, side_three);

    $('.side_one').text(side_one);
    $('.side_two').text(side_two);
    $('.side_three').text(side_three);
    $('.result').text(result);

    $('#result').show();
    event.preventDefault();
  });
});
