import isEmptyObj from '../objectUtil';

describe('isEmptyObj', () => {
  const passedObj = {
    key: 'I am an object',
  };

  it('return false when not empty object is passed ', () => {
    expect(isEmptyObj(passedObj)).toBeFalsy();
  });

  it('return true when empty object is passed ', () => {
    const emptyObj = {};
    expect(isEmptyObj(emptyObj)).toBeTruthy();
  });

  it('return true when string is passed ', () => {
    expect(isEmptyObj('blahh')).toBeTruthy();
  });

  it('return true when number is passed ', () => {
    expect(isEmptyObj(69)).toBeTruthy();
  });

  it('return true when null is passed ', () => {
    expect(isEmptyObj(null)).toBeTruthy();
  });

  it('return true when undefined is passed ', () => {
    expect(isEmptyObj()).toBeTruthy();
  });
});
