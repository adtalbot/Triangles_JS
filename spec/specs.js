describe('triangleFinder', function() {
  it('will return equilateral if all sides are equal', function() {
    expect(triangleFinder(2,2,2)).to.equal('This triangle is an equilateral triangle.');
  });

  it('will return isosceles if two sides are equal', function() {
    expect(triangleFinder(2,2,5)).to.equal('This triangle is an isosceles triangle.');
  });

  it('will return scalene if no sides are equal', function() {
    expect(triangleFinder(2,3,4)).to.equal('This triangle is a scalene triangle.');
  });

  it('will return not a triangle if one side is the same or larger than the sum of the other two sides', function() {
    expect(triangleFinder(2,3,7)).to.equal('This is not a triangle.');
  });
});
