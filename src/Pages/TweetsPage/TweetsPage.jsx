import CardList from '../../components/CardList/CardList';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function TweetsPage() {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <NavLink
        style={{
          fontSize: 24,
          textDecoration: 'none',
          color: 'black',
          position: 'absolute',
          top: -50,
          left: -200,
        }}
        to={backLinkHref.current}
      >
        Go back
      </NavLink>
      <CardList />
    </div>
  );
}
