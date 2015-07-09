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
});
