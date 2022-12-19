import React, { ReactNode, useEffect, useState, useCallback } from "react";
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
  getBurger,
} from "../../features/cms-access";

import {
  GlobalNav,
  GlobalNavItem,
  Logo,
  LogoImg,
  GlobalNavMenu,
  Actions,
  NavbarButtons,
  BurgerImg,
  GlobalNavMobileContainer,
  GlobalNavContainer,
  GlobalNavMobileBurger,
  GlobalNavMobileMenu,
} from "./global-header.styles";

import { GenericButton, ButtonTypes } from "../generic-button/generic-button";
import NavLinkMobile from "./nav-link-mobile";

type Props = {};

const GlobalHeader = ({}: Props): JSX.Element => {
  const [menu, setMenu] = useState({} as CmsNavItem[]);
  const [logo, setLogo] = useState({} as CmsImage);
  const [burger, setBurger] = useState({} as CmsImage);
  const [mobileMenuVisible, setMobileSubMenuVisible] = useState(false);

  // read the header logo and nav data from the CMS on every page load

  useEffect(() => {
    !menu.length ? fillOutHeaderNavigationLinks() : console.info(menu);
    fillOutHeaderLogo();
    fillOutHeaderBurger();
  }, [menu]);

  // the calls to the state.set* functions are asynchronous. This userEffect demonstrates
  // this - if you put the console.info calls immediately after the call to setLogo then
  // the logo is still undefined. The useEffect is triggered whenever logo changes.

  useEffect(() => {
    console.log(logo.attribution);
    console.log(logo.caption);
    console.log(logo.reference);
  }, [logo]);

  useEffect(() => {
    console.log(burger.attribution);
    console.log(burger.caption);
    console.log(burger.reference);
  }, [burger]);

  // this function is used to switch from a desktop horizontal menu to a mobile
  // vertical one based on the screen size.

  const useMediaQuery = (width: number) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e: any) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }, [updateTarget, width]);

    return targetReached;
  };

  // functions used to grab the content and images from the CMS as callbacks

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

  const fillOutHeaderBurger = async () => {
    const burgerCallback = (burgerData: CmsImage) => {
      setBurger(burgerData);
    };
    getBurger(burgerCallback);
  };

  // render the menu items in desktop and mobile formats

  const renderMenu = (item: CmsNavItem, index: number) => {
    const linkKey = "top2".concat(item.title);

    if (!item || !item.enabled || !item.url) {
      return "empty" + index;
    }
    return (
      <NavLink
        key={linkKey}
        url={item.url}
        title={item.title}
        subMenuItems={item.subMenuItems}
      />
    );
  };

  const renderMobileMenu = (item: CmsNavItem, index: number) => {
    const linkKey = "topM2".concat(item.title);

    if (!item || !item.enabled || !item.url) {
      return "empty" + index;
    }
    return (
      <NavLinkMobile
        key={linkKey}
        url={item.url}
        title={item.title}
        subMenuItems={item.subMenuItems}
      />
    );
  };

  // add the logo and burger images or handle failure elegantly 

  const addLogoToHeader = () => {
    if (logo.reference != undefined) {
      const logoUrl: string = getImageUrl(logo.reference, 50, 50);
      return <LogoImg src={logoUrl} alt={logo.caption} />;
    }

    return <LogoImg src="./blanklogo.jpg" alt="temp logo" />;
  };

  const addBurgerToHeader = () => {
    if (burger.reference != undefined) {
      const burgerUrl: string = getImageUrl(burger.reference, 30, 30);
      return <BurgerImg src={burgerUrl} alt={burger.caption} onClick={() => onClickBurger()}/>;
    }

    return <BurgerImg src="./blanklogo.jpg" alt="temp logo" />;
  };

  // handle clicking on the burger menu

  const onClickBurger = () => {
    setMobileSubMenuVisible(!mobileMenuVisible);
  }

  const isBreakpoint = useMediaQuery(768);

  return (
    <GlobalNav>
      {isBreakpoint ? (
        <GlobalNavMobileContainer>
          <Logo>
            <Link href="/">{addLogoToHeader()}</Link>
          </Logo>
          <GlobalNavMobileBurger>
            <GenericButton style={ButtonTypes.InactiveCta}>
              {addBurgerToHeader()}
            </GenericButton>
          </GlobalNavMobileBurger>
          <GlobalNavMobileMenu isVisible={mobileMenuVisible}>
            {menu[0] &&
              menu.map((item, index) => renderMobileMenu(item, index))}
            <Actions>
              <NavbarButtons>
                <GenericButton style={ButtonTypes.ActiveCta} text="phone" />
                <GenericButton style={ButtonTypes.ActiveCta} text="email" />
              </NavbarButtons>
            </Actions>
          </GlobalNavMobileMenu>
        </GlobalNavMobileContainer>
      ) : (
        <GlobalNavContainer>
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
                <GenericButton style={ButtonTypes.ActiveCta} text="phone" />
                <GenericButton style={ButtonTypes.ActiveCta} text="email" />
              </NavbarButtons>
            </Actions>
          </GlobalNavItem>
        </GlobalNavContainer>
      )}
    </GlobalNav>
  );
};

export default GlobalHeader;
