import { combineReducers } from 'redux';

import conversion from './conversionReducer';

const rootReducer = combineReducers({
  conversion,
});

export default rootReducer;
