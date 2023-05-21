import {
  StyledHeader,
  StyledContainer,
  StyledMain,
} from './SharedLayout.styled';

import Navigation from '../Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

export default function SharedLayout() {
  return (
    <StyledContainer>
      <StyledHeader>
        <Navigation />
      </StyledHeader>
          <StyledMain>
              <Suspense fallback={Loader}>
                  <Outlet/>
              </Suspense>
      </StyledMain>
    </StyledContainer>
  );
}
