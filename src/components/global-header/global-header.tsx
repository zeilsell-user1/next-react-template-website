import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "./nav-link";

// the logo and the list of upto 5 navigation options are provided by the CMS.
// included in CMS behaviours are the utility functions to manipulate images

import {
  getLogo,
  getNavItems,
  getImageUrl,
  CmsImage,
  CmsNavItem,
} from "../../features/cms-access";

import {
  GlobalNav,
  GlobalNavItem,
  Logo,
  LogoImg,
  GlobalNavMenu,
  GlobalNavMenuItems,
  Actions,
  NavbarButtons,
  ContactButton,
} from "./global-header.styles";

type Props = {};

const GlobalHeader = ({}: Props): JSX.Element => {
  const [menu, setMenu] = useState({} as CmsNavItem[]);
  const [logo, setLogo] = useState({} as CmsImage);

  // read the header logo and nav data from the CMS on every page load

  useEffect(() => {
    !menu.length ? fillOutHeaderNavigationLinks() : console.info(menu);
    fillOutHeaderLogo();
  }, [menu]);

  // the calls to the state.set* functions are asynchronous. This userEffect demonstrates
  // this - if you put the console.info calls immediately after the call to setLogo then
  // the logo is still undefined. The useEffect is triggered whenever logo changes.

  useEffect(() => {
    console.log(logo.attribution);
    console.log(logo.caption);
    console.log(logo.reference);
  }, [logo]);

  const fillOutHeaderNavigationLinks = async () => {
    const navLinksCallback = (navItemsData: CmsNavItem[]) => {
      // the header nav links are ordered in the fetch fromt he CMS. If
      // not then enable this code to sort the nav items by order
      /*
            navItemsData.sort((a, b) => {
                if (a.order < b.order) return -1; 
                if (a.order > b.order) return 1;
                return 0;
              });
              */

      setMenu(navItemsData);
    };
    getNavItems(navLinksCallback);
  };

  const fillOutHeaderLogo = async () => {
    const logoCallback = (logoData: CmsImage) => {
      setLogo(logoData);
    };
    getLogo(logoCallback);
  };

  const renderMenu = (item: CmsNavItem, index: number) => {
    const linkKey1 = "top1".concat(item.title);
    const linkKey2 = "top2".concat(item.title);

    if (!item || !item.enabled || !item.url) {
      return "empty" + index;
    }
    return (
      <GlobalNavMenuItems key={linkKey1}>
        <NavLink
          key={linkKey2}
          url={item.url}
          title={item.title}
          subMenuItems={item.subMenuItems}
        />
      </GlobalNavMenuItems>
    );
  };

  const addLogoToHeader = () => {
    if (logo.reference != undefined) {
      const logoUrl: string = getImageUrl(logo.reference, 50, 50);
      return <LogoImg src={logoUrl} alt={logo.caption} />;
    }

    return <LogoImg src="./blanklogo.jpg" alt="temp logo" />;
  };

  return (
    <GlobalNav>
      <GlobalNavItem>
        <Logo>
          <Link href="/">{addLogoToHeader()}</Link>
        </Logo>
      </GlobalNavItem>
      <GlobalNavItem>
        <GlobalNavMenu>
          {menu[0] && menu.map((item, index) => renderMenu(item, index))}
        </GlobalNavMenu>
      </GlobalNavItem>
      <GlobalNavItem>
        <Actions>
          <NavbarButtons>
            <ContactButton>
              <a href="tel:+44 1234 567890">Phone</a>
            </ContactButton>
            <ContactButton>
              <a href="email:rjg.test.website@gmail.com">Email</a>
            </ContactButton>
          </NavbarButtons>
        </Actions>
      </GlobalNavItem>
    </GlobalNav>
  );
};

export default GlobalHeader;
