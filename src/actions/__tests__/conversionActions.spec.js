import { getRatesRequest, getRatesFailure, getRatesSuccess, GET_RATES } from '../conversionActions';

describe('conversion Actions', () => {
  it('creates action type GET_RATES_REQUEST', () => {
    const dispatchedAction = getRatesRequest();
    expect(dispatchedAction).toHaveProperty('type', `${GET_RATES}_REQUEST`);
  });

  it('creates action type GET_RATES_FAILURE', () => {
    const error = {
      status: '422',
      message: 'Error occurred',
    };
    const dispatchedAction = getRatesFailure(error);
    expect(dispatchedAction).toHaveProperty('type', `${GET_RATES}_FAILURE`);
    expect(dispatchedAction).toHaveProperty('payload', error);
  });

  it('creates action type GET_RATES_SUCCESS', () => {
    const success = {
      base: 'CAD',
      date: '2019-09-20',
    };
    const dispatchedAction = getRatesSuccess(success);
    expect(dispatchedAction).toHaveProperty('type', `${GET_RATES}_SUCCESS`);
    expect(dispatchedAction).toHaveProperty('payload', success);
  });
});
