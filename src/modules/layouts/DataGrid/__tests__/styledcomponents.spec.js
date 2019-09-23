import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { colorLightGrey, colorShuttleGrey, colorCardinal } from '../../../../colorVariables';

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
} from '../styledComponents';

describe('<DataGridContainer />', () => {
  it('renders correctly', () => {
    const dataGridContainerWrapperTree = renderer
      .create(<DataGridContainer>Wrapper for data grid</DataGridContainer>)
      .toJSON();
    expect(dataGridContainerWrapperTree).toMatchSnapshot();
  });
});

describe('<FetchDataButtonWrapper />', () => {
  it('renders correctly', () => {
    const fetchDataButtonWrapperTree = renderer
      .create(<FetchDataButtonWrapper>this is button wrapper</FetchDataButtonWrapper>)
      .toJSON();
    expect(fetchDataButtonWrapperTree).toMatchSnapshot();
  });
});

describe('<FetchDataButton />', () => {
  it('renders correctly', () => {
    const fetchDataButtonTree = renderer
      .create(<FetchDataButton>This is the button</FetchDataButton>)
      .toJSON();
    expect(fetchDataButtonTree).toMatchSnapshot();
  });
});

describe('<TextWrapper />', () => {
  it('renders correctly', () => {
    const textWrapperTree = renderer
      .create(<TextWrapper>this is wrapper for text</TextWrapper>)
      .toJSON();
    expect(textWrapperTree).toMatchSnapshot();
  });
});

describe('<Text />', () => {
  it('renders correctly', () => {
    const textTree = renderer.create(<Text>link</Text>).toJSON();
    expect(textTree).toMatchSnapshot();
  });

  it('renders with appropriate color for red when passed', () => {
    const redTextTree = renderer.create(<Text color="red">link</Text>).toJSON();
    expect(redTextTree).toHaveStyleRule('color', colorCardinal);
  });

  it('renders with appropriate color for shuttelGrey when passed', () => {
    const redTextTree = renderer.create(<Text color="shuttleGrey">link</Text>).toJSON();
    expect(redTextTree).toHaveStyleRule('color', colorShuttleGrey);
  });
});

describe('<TopInformationWrapper />', () => {
  it('renders correctly', () => {
    const topInformationWrapperTree = renderer
      .create(<TopInformationWrapper>this is top row wrapper</TopInformationWrapper>)
      .toJSON();
    expect(topInformationWrapperTree).toMatchSnapshot();
  });
});

describe('<TopInformationSection />', () => {
  it('renders correctly', () => {
    const topInformationSectionTree = renderer
      .create(<TopInformationSection>section for top row</TopInformationSection>)
      .toJSON();
    expect(topInformationSectionTree).toMatchSnapshot();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('renders with appropriate style', () => {
    const topInformationSectionTree = renderer
      .create(<TopInformationSection right>section for top row</TopInformationSection>)
      .toJSON();
    expect(topInformationSectionTree).toHaveStyleRule('justify-content', 'flex-end');
  });
});

describe('<RatesWrapper />', () => {
  it('renders correctly', () => {
    const ratesWrapperTree = renderer
      .create(<RatesWrapper>wrapper for data table</RatesWrapper>)
      .toJSON();
    expect(ratesWrapperTree).toMatchSnapshot();
  });
});

describe('<RatesRow />', () => {
  it('renders correctly', () => {
    const ratesRowTree = renderer.create(<RatesRow>each row of data</RatesRow>).toJSON();
    expect(ratesRowTree).toMatchSnapshot();
  });
});

describe('<RatesCol />', () => {
  it('renders correctly', () => {
    const ratesColTree = renderer.create(<RatesCol>each column of data</RatesCol>).toJSON();
    expect(ratesColTree).toMatchSnapshot();
  });

  it('renders with appropriate right border color when passed', () => {
    const ratesColTree = renderer
      .create(<RatesCol rightBorder>each column of data</RatesCol>)
      .toJSON();
    expect(ratesColTree).toHaveStyleRule('border-right', `1px solid ${colorLightGrey}`);
  });
});
