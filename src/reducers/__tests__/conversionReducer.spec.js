import reducer from '../conversionReducer';
import { GET_RATES } from '../../actions/conversionActions';

describe('converstion reducer', () => {
  const defaultState = {
    rates: {},
    error: {},
    isLoading: false,
  };

  it('should return default state', () => {
    expect(reducer(undefined, GET_RATES)).toEqual(defaultState);
  });

  it('should handle REQUEST action type', () => {
    const requestState = {
      ...defaultState,
      isLoading: true,
    };
    expect(reducer(undefined, { type: `${GET_RATES}_REQUEST` })).toEqual(requestState);
  });

  it('should handle FAILURE action type', () => {
    const errorResponse = {
      status: '422',
      message: 'Error occurred',
    };

    const failureState = {
      ...defaultState,
      isLoading: false,
      error: errorResponse,
    };

    const errorPayload = {
      type: `${GET_RATES}_FAILURE`,
      payload: errorResponse,
    };

    expect(reducer(undefined, errorPayload)).toEqual(failureState);
  });

  it('should handle SUCCESS action type', () => {
    const successResponse = {
      base: 'CAD',
      date: '2019-09-20',
    };

    const successState = {
      ...defaultState,
      isLoading: false,
      rates: successResponse,
    };

    const actionPayload = {
      type: `${GET_RATES}_SUCCESS`,
      payload: successResponse,
    };

    expect(reducer(undefined, actionPayload)).toEqual(successState);
  });
});
