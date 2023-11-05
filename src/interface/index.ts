export enum EViewport {
  MOBILE_PORTRAIT = 0,
  MOBILE_LANDSCAPE = 479,
  TABLET = 768,
  DESKTOP = 992,
}

export interface IObjMenuHeader {
  name: string;
  url: string;
}

export interface IObjClient {
  introduce: string;
  listImage: string[];
}
