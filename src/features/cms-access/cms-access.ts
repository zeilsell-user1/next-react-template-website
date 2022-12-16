import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { CmsImage, CmsNavItem } from "./cms.types";
import myConfiguredSanityClient from "./sanity-client";

// the CmsNavItem is a simple JSON array of data stored in the CMS. There is no
// need to abstract this type from the rest of the code as changing the CMS will
// not ake a differnce to the way the data is returned.

export const getNavItems = async (callback: Function) => {
  let query = `*[_type == "headernav"] | order(order) {
        enabled, order, title, url, 
        subMenuItems[]->{enabled, order, title, url, icon}}`;
  await cmsAccess(query).then((navItems) => {
    if (navItems) {
      callback(navItems);
    }
  });
};

export const getLogo = async (callback: Function) => {
  let query = '*[_type == "logo"]';
  await cmsAccess(query).then((result) => {
    if (result) {
      let logo: CmsImage = {
        attribution: result[0].attribution,
        caption: result[0].caption,
        reference: result[0].image.asset._ref,
      };
      callback(logo);
    } else {
      callback({} as CmsImage);
    }
  });
};

export const get404Image = async (callback: Function) => {
  let query = '*[_type == "fourohfour"]';
  await cmsAccess(query).then((result) => {
    if (result) {
      let imge404: CmsImage = {
        attribution: result[0].attribution,
        caption: result[0].caption,
        reference: result[0].image.asset._ref,
      };
      callback(imge404);
    } else {
      callback({} as CmsImage);
    }
  });
};

// the call to the CMS

const cmsAccess = async (query: string, params?: string): Promise<any[]> => {
  params ? params : {};
  return myConfiguredSanityClient.fetch(query, params).then((result: any[]) => {
    console.info("received data length = ", result.length);
    console.info("received data", result);
    if (result.length > 0) {
      return result;
    }
  });
};
