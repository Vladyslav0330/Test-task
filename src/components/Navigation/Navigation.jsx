import {
  StyledNavList,
  StyledListItem,
  StyledNavLink,
} from './Navigation.styled';

export default function Navigation() {
  return (
    <StyledNavList>
      <StyledListItem>
        <StyledNavLink to="/">Home</StyledNavLink>
      </StyledListItem>
      <StyledListItem>
        <StyledNavLink to="/tweets">Tweets</StyledNavLink>
      </StyledListItem>
    </StyledNavList>
  );
}
