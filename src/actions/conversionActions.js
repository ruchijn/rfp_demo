export const GET_RATES = 'GET_RATES';

export const getRatesRequest = () => ({
  type: `${GET_RATES}_REQUEST`,
});

export const getRatesSuccess = data => ({
  type: `${GET_RATES}_SUCCESS`,
  payload: data,
});

export const getRatesFailure = error => ({
  type: `${GET_RATES}_FAILURE`,
  payload: error,
});

export const fetchRates = () => {
  return dispatch => {
    dispatch(getRatesRequest());
    /*
      Comment below to see loading scenario
    */
    fetch('https://api.exchangeratesapi.io/latest')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(getRatesSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(getRatesFailure(error));
      });
    /*
      Un-comment below to see error scenario
    */
    // const error = { status: '422', message: 'Error occurred' };
    // dispatch(getRatesFailure(error));
  };
};
