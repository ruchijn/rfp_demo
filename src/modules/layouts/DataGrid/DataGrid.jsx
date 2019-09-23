import React from 'react';
import PropTypes from 'prop-types';
import isEmptyObj from '../../../utils/objectUtil';

import {
  DataGridContainer,
  FetchDataButtonWrapper,
  FetchDataButton,
  TextWrapper,
  Text,
  TopInformationWrapper,
  TopInformationSection,
  RatesWrapper,
  RatesRow,
  RatesCol,
} from './styledComponents';

class DataGrid extends React.Component {
  handleButtonClick = e => {
    const { fetchRates } = this.props;
    e.preventDefault();
    fetchRates();
  };

  renderText = (displayText, fontColor = 'regular') => {
    return (
      <TextWrapper>
        <Text color={fontColor}>{displayText}</Text>
      </TextWrapper>
    );
  };

  renderConversionRow = rateEntry => {
    const currency = rateEntry[0];
    const value = rateEntry[1];

    return (
      <RatesRow key={currency}>
        <RatesCol rightBorder>{currency}</RatesCol>
        <RatesCol>{value}</RatesCol>
      </RatesRow>
    );
  };

  renderData = () => {
    const {
      rates: { base, date, rates },
    } = this.props;

    const baseCurrency = this.renderText(`Base currency: ${base}`);
    const conversionDate = this.renderText(`Conversion date: ${date}`);
    const rateEntries = !isEmptyObj(rates) ? Object.entries(rates) : [];

    return (
      <React.Fragment>
        <TopInformationWrapper>
          <TopInformationSection>{baseCurrency}</TopInformationSection>
          <TopInformationSection right>{conversionDate}</TopInformationSection>
        </TopInformationWrapper>
        <RatesWrapper>
          {rateEntries && rateEntries.map(rateEntry => {
            return this.renderConversionRow(rateEntry);
          })}
        </RatesWrapper>
      </React.Fragment>
    );
  };

  renderError = () => {
    const displayText = 'We are sorry. We are not able to get the data you requested.';
    return this.renderText(displayText, 'red');
  };

  renderLoader = () => {
    return this.renderText('Loading...', 'shuttleGrey');
  };

  renderSection = () => {
    const { isLoading, error, rates } = this.props;
    if (isLoading) return this.renderLoader();

    if (!isEmptyObj(error)) return this.renderError();

    if (!isEmptyObj(rates)) return this.renderData();

    return this.renderText('Please click on button to get the conversion rates');
  };

  render = () => {
    return (
      <DataGridContainer>
        <FetchDataButtonWrapper>
          <FetchDataButton onClick={e => this.handleButtonClick(e)}>
            Click me to get data
          </FetchDataButton>
        </FetchDataButtonWrapper>
        {this.renderSection()}
      </DataGridContainer>
    );
  };
}

DataGrid.propTypes = {
  fetchRates: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  rates: PropTypes.object,
};

DataGrid.defaultProps = {
  isLoading: false,
  error: {},
  rates: {},
};

export default DataGrid;
