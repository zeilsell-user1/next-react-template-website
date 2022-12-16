import styled from "styled-components";

export const GlobalNav = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 3fr;
  grid-template-areas: "logo links buttons";
  background: grey;
`;

export const GlobalNavItem = styled.div`
  justify-self: stretch;
  align-self: stretch;
`;

export const Logo = styled.div``;

export const LogoImg = styled.img`
  margin-left: 1vh;
  aspect-ratio: 1;
  margin: 1vh;
`;

export const GlobalNavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  margin: 1vh;
  align-items: start;
  justify-items: center;
  column-gap: 1vh;
`;

export const GlobalNavMenuItems = styled.div`
    font-size: 1vh
    color: blue
`;

export const NavLinkContainer = styled.div`
  color: black;

  &:hover {
    color: red;
  }
`;

export const NavSubLink = styled.div<{ isVisible: boolean }>`
  color: blue;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};

  &:hover {
    color: red;
  }
`;

export const Actions = styled.div``;

export const NavbarButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const ContactButton = styled.button`
  cursor: pointer;
  border-radius: 5%;
  font-size: 2vh;
  background: orange;
  color: black;
  border: none;
  margin: 1vh;

  &:hover {
    color: green;
    position: relative;
    box-shadow: 0 1rem 2.5rem rgba(22, 28, 45, 0.1),
      0 0.5rem 1rem -0.75rem rgba(22, 28, 45, 0.1) !important;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
`;
