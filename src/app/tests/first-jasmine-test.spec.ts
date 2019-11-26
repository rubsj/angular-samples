describe('supersimple test', () => {
  it('true is true', () => {
    expect(true).toBeTruthy();
  });
  it('false is false', () => {
    expect(false).toEqual(false);
  });
  it('false is false', () => {
    expect(false).toBe(false);
  });

  it('2 + 2 equals ', () => {
    expect(2 + 2).toBe(4);
  });
});
