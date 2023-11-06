import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  transition: 250ms linear;
  &:hover {
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  }
  text-decoration: none;
  color: ${props => (props.active === 'true' ? 'tomato' : 'black')};
  /* &.active {
    color: tomato;
  } */
`;