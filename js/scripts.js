var triangleFinder = function(side_1, side_2, side_3) {
  if ((side_1 === side_2) && (side_2 === side_3)) {
    return 'This triangle is an equilateral triangle.';
  } else if ((side_1 === side_2) || (side_1 === side_3) || (side_2 === side_3)) {
    return 'This triangle is an isosceles triangle.';
  } else {
    return 'This triangle is a scalene triangle.';
  };
};
