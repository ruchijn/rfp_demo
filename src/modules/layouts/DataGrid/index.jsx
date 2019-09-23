import { connect } from 'react-redux';
import { fetchRates } from '../../../actions/conversionActions';

import DataGrid from './DataGrid';

export const mapStateToProps = state => {
  const { rates, error, isLoading } = state.conversion;

  return {
    rates,
    error,
    isLoading,
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchRates: () => {
    dispatch(fetchRates());
  },
});

const getConnectedDataGrid = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataGrid);

export default getConnectedDataGrid;
