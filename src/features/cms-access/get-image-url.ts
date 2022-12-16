import React from "react";
import myConfiguredSanityClient from "./sanity-client";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const builder = imageUrlBuilder(myConfiguredSanityClient);

export const getImageUrl = (
  source: string,
  width?: number,
  height?: number
): string => {
  width ? width : (width = 500);
  height ? height : (height = 500);

  return builder.image(source).width(width).height(height).url().toString();
};
