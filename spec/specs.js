describe('triangleFinder', function() {
  it('will return equilateral if all sides are equal', function() {
    expect(triangleFinder(2,2,2)).to.equal('equilateral');
  });
});
