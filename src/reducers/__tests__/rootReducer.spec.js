/* eslint-disable import/first */
jest.mock('redux', () => {
  return {
    combineReducers: jest.fn(),
  };
});

import { combineReducers } from 'redux';

describe('rootReducer', () => {
  it('by default returns default state', () => {
    // eslint-disable-next-line global-require
    require('../index');
    expect(combineReducers).toBeCalled();
  });
});
