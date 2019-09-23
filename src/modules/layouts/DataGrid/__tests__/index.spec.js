import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import DataGrid from '../index';

const mockStore = configureStore();

describe('MiniCatalogueSelector index', () => {
  const conversion = {
    isLoading: false,
    error: {},
    rates: {
      base: 'CAD',
      date: '2019-09-20',
    },
  };

  const state = {
    conversion,
  };

  const store = mockStore(state);
  const wrapper = shallow(<DataGrid store={store} />);

  it('mapStateToProps test ', () => {
    expect(wrapper.props().rates).toBe(state.conversion.rates);
  });
});
