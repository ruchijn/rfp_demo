import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import DataGrid from '../DataGrid';

describe('<DataGrid />', () => {
  const fetchRates = jest.fn();

  const defaultProp = {
    fetchRates,
  };

  const e = { preventDefault: jest.fn() };
  let dataGridWrapper;

  beforeEach(() => {
    dataGridWrapper = shallow(<DataGrid {...defaultProp} />);
  });

  it('matches the snapshot', () => {
    expect(shallowToJson(dataGridWrapper)).toMatchSnapshot();
  });

  it('renders loading while fetching data', () => {
    const loadingProp = {
      ...defaultProp,
      isLoading: true,
    };
    const loadingWrapper = shallow(<DataGrid {...loadingProp} />);
    expect(loadingWrapper.find('styledComponents__Text').props().color).toEqual('shuttleGrey');
  });

  it('renders error when error passed', () => {
    const errorProp = {
      ...defaultProp,
      error: {
        status: '422',
        message: 'Error occurred',
      },
    };
    const errorWrapper = shallow(<DataGrid {...errorProp} />);
    expect(errorWrapper.find('styledComponents__Text').props().color).toEqual('red');
  });

  it('renders data when data returned', () => {
    const dataProp = {
      ...defaultProp,
      rates: {
        base: 'CAD',
        date: '2019-09-20',
        rates: {
          USD: '23.98',
          EUR: '12.23',
        },
      },
    };
    const dataWrapper = shallow(<DataGrid {...dataProp} />);
    expect(dataWrapper.find('styledComponents__TopInformationWrapper')).toHaveLength(1);
  });

  it('renders data when no rates returned', () => {
    const dataProp = {
      ...defaultProp,
      rates: {
        base: 'CAD',
        date: '2019-09-20',
      },
    };
    const dataWrapper = shallow(<DataGrid {...dataProp} />);
    expect(dataWrapper.find('styledComponents__TopInformationWrapper')).toHaveLength(1);
  });

  describe('test static functions', () => {
    describe('handleButtonClick', () => {
      it('calls handleButtonClick', () => {
        dataGridWrapper.instance().handleButtonClick(e);

        expect(fetchRates).toBeCalled();
      });
    });
  });
});
