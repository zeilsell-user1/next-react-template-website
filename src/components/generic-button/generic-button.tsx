import React, { ReactNode, useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";

import {
  getLogo,
  getNavItems,
  getImageUrl,
  CmsImage,
  CmsNavItem,
  getBurger,
} from "../../features/cms-access";

export const enum ButtonTypes {
  ActiveCta,
  InactiveCta,
  Back,
  Okay,
  Cancel,
}

type Props = {
  children?: ReactNode;
  style: ButtonTypes;
  onCLick?: () => {};
  text?: string;
};

const StyledButton = styled.button<{
  color: string;
  background: string;
  border: string;
  font: string;
  hoverColor: string;
}>`
  cursor: pointer;
  border-radius: 5%;
  font: ${({ font }) => (font ? font : "Poppins")};
  font-size: 2vh;
  background: ${({ background }) => (background ? background : "white")};
  color: ${({ color }) => (color ? color : "black")};
  border: 1px solid ${({ border }) => (border ? border : "black")};
  margin: 1vh;

  &:hover {
    color: ${({ hoverColor }) => (hoverColor ? hoverColor : "black")};
    position: relative;
    box-shadow: 0 1rem 2.5rem rgba(22, 28, 45, 0.1),
      0 0.5rem 1rem -0.75rem rgba(22, 28, 45, 0.1) !important;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
`;

export const GenericButton = ({
  children,
  style,
  onCLick,
  text,
}: Props): JSX.Element => {
  type ButtonStyle = {
    textColor: string;
    hoverColor: string;
    background: string;
    border: string;
    font: string;
  };

  const setStyle = (): ButtonStyle => {
    let styleDetails: ButtonStyle = {} as ButtonStyle;

    switch (style) {
      case ButtonTypes.ActiveCta: {
        styleDetails.background = "#e69122";
        styleDetails.textColor = "#30220f";
        styleDetails.hoverColor = "black";
        styleDetails.border = "#30220f";
        styleDetails.font = "Montserrat";
        break;
      }
      case ButtonTypes.InactiveCta: {
        styleDetails.background = "#e3ddd5";
        styleDetails.textColor = "#ebcea9";
        styleDetails.hoverColor = "#ebcea9";
        styleDetails.border = "#24190a";
        styleDetails.font = "Montserrat";
        break;
      }
      case ButtonTypes.Back: {
        styleDetails.background = "#f5f3f05";
        styleDetails.textColor = "#30220f";
        styleDetails.hoverColor = "#30220f";
        styleDetails.border = "#24190a";
        styleDetails.font = "Montserrat";
        break;
      }
      case ButtonTypes.Okay: {
        styleDetails.background = "#f5f3f05";
        styleDetails.textColor = "#30220f";
        styleDetails.hoverColor = "#f76402";
        styleDetails.border = "#24190a";
        styleDetails.font = "Montserrat";
        break;
      }
      case ButtonTypes.Cancel: {
        styleDetails.background = "#f5f3f05";
        styleDetails.textColor = "#30220f";
        styleDetails.hoverColor = "#30220f";
        styleDetails.border = "#24190a";
        styleDetails.font = "Montserrat";
        break;
      }
      default:
        styleDetails.background = "#f5f3f05";
        styleDetails.textColor = "#30220f";
        styleDetails.hoverColor = "#30220f";
        styleDetails.border = "#24190a";
        styleDetails.font = "Montserrat";
    }
    return styleDetails;
  };

  const [buttonStyle, setButtonStyle] = useState(setStyle());

  console.log(buttonStyle);

  return (
    <StyledButton
      background={buttonStyle.background}
      color={buttonStyle.textColor}
      hoverColor={buttonStyle.hoverColor}
      border={buttonStyle.border}
      font={buttonStyle.font}
    >
      {text}
      {children}
    </StyledButton>
  );
};
