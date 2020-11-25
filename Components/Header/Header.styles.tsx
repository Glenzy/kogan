import styled from 'styled-components';

export const HEIGHT = '7.2rem';
export const ITEM_HEIGHT = '5.6rem';

export const Base = styled.header`
  display: block;
  height: ${HEIGHT};
`;

export const NavHeader = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #ccc;
`;
export const Container = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  height: ${HEIGHT};
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${ITEM_HEIGHT};
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  margin-left: 4rem;
`;

export const StyledLogo = styled.img`
  flex-basis: 20rem;
  max-width: 20rem;
`

export const StyledHeaderType = styled.h1`
align-items: center;
font-weight: 100;
justify-content: flex-end;
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  flex-grow: 1;
  > * {
    margin: 0.5rem;
  }
 }
`;

export const StyledLink = styled.a<{ active: boolean }>`

  text-decoration: none;
  color: ${props => props.active ? 'red' : '#333'};
  ${props => props.active && 'border-bottom: 1px #333 solid;'}
  transition: opacity .2s ease-in-out;
 cursor: pointer;
  &:hover {
   opacity: 0.75;
  }
`