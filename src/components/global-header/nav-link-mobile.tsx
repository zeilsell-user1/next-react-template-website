import React, { useState } from "react";
import Link from "next/link";
import {
  NavLinkContainer,
  NavLinkMobileContainer,
  NavSubLink,
  NavSubLinkMobileContainer,
} from "./global-header.styles";
import { CmsSubNavItem } from "../../features/cms-access";

type Props = {
  url: string;
  title: string;
  subMenuItems?: CmsSubNavItem[];
};

const NavLinkMobile = ({ url, title, subMenuItems }: Props): JSX.Element => {
  const renderSubMenu = (item: CmsSubNavItem) => {
    const sublinkkey = "sublink".concat(item.title);
    return (
      <NavSubLinkMobileContainer>
        <Link key={item.title} href={item.url}>
          {item.icon} {item.title}
        </Link>
      </NavSubLinkMobileContainer>
    );
  };

  const linkkey = "link".concat(title);

  if (!url || !title) {
    return <div />;
  }
  return (
    <NavLinkMobileContainer key={title}>
      {
        <Link key={linkkey} href={url}>
          {title}
        </Link>
      }
      {subMenuItems && subMenuItems.map((si) => renderSubMenu(si))}
    </NavLinkMobileContainer>
  );
};

export default NavLinkMobile;
