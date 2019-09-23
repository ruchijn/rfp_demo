const isEmptyObj = passedObj =>
  // eslint-disable-next-line implicit-arrow-linebreak
  !(passedObj && passedObj === Object(passedObj) && Object.keys(passedObj).length !== 0);

export default isEmptyObj;
