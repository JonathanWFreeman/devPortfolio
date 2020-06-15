import styled from 'styled-components';

import { SocialWidth } from './social';
import { SiteWidth } from '../../Global';
import { Above, Below } from '../utilities';

export const SiteLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 60px 100px;
  grid-template-areas:
    'header'
    'main'
    'social'
    'footer';

  ${Above.small`
    grid-template-columns: ${SocialWidth} 1fr;
    grid-template-rows: 100px 1fr 50px;
    grid-template-areas:
      'header header'
      'social main'
      'footer footer';
  `}
`;

export const ContentWrapper = styled.section`
  margin: 8vh auto;
  ${Above.small`
    max-width: calc(${`${SiteWidth} + ${SocialWidth}`});
    padding-right: ${SocialWidth};       
  `}

  ${Below.small`
    padding: 0 2%;
  `}
`;

export const MainWrapper = styled.main`
  min-height: 80vh;
  grid-area: main;
  ${'' /* margin: 8vh 0; */}
`;
