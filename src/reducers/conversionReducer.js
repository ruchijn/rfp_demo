import { GET_RATES } from '../actions/conversionActions';

const defaultState = {
  rates: {},
  error: {},
  isLoading: false,
};

export default (state = defaultState, action) => {
  const { type, payload = {} } = action;
  switch (type) {
    case `${GET_RATES}_SUCCESS`:
      return {
        ...state,
        isLoading: false,
        rates: payload,
      };
    case `${GET_RATES}_REQUEST`:
      return {
        ...state,
        isLoading: true,
      };
    case `${GET_RATES}_FAILURE`:
    default:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
  }
};
