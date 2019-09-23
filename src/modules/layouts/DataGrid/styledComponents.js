import styled from 'styled-components';
import { colorLightGrey, colorShuttleGrey, colorCardinal } from '../../../colorVariables';

export const DataGridContainer = styled.div({
  display: 'flex',
  maxWidth: '80%',
  justifyContent: 'center',
  margin: '5rem auto',
  flexDirection: 'column',
});

export const FetchDataButtonWrapper = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '1rem',
});

export const FetchDataButton = styled.button({
  border: `1px solid ${colorLightGrey}`,
  padding: '1rem 2rem',
});

export const TextWrapper = styled.div({
  marginTop: '1rem',
});

export const Text = styled.p(({ color }) => ({
  fontSize: '1.5rem',
  textAlign: 'center',
  ...(color === 'shuttleGrey' && {
    color: colorShuttleGrey,
  }),
  ...(color === 'red' && {
    color: colorCardinal,
  }),
}));

export const TopInformationWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '@media screen and (min-width: 992px) {': {
    flexDirection: 'row',
  },
});

export const TopInformationSection = styled.div(({ right }) => ({
  display: 'flex',
  '@media screen and (min-width: 992px) {': {
    flex: '1 1 50%',
    ...(right && {
      justifyContent: 'flex-end',
    }),
  },
}));

export const RatesWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${colorLightGrey}`,
  '&:last-child {': {
    borderBottom: 'none',
  },
});

export const RatesRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  borderBottom: `1px solid ${colorLightGrey}`,
});

export const RatesCol = styled.div(({ rightBorder }) => ({
  flex: '1 1 50%',
  padding: '0.5rem 1rem',
  ...(rightBorder && {
    borderRight: `1px solid ${colorLightGrey}`,
  }),
}));
