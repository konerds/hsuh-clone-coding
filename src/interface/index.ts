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

export interface IObjHeaderHome {
  introduce: {
    title: string[];
    description: string;
    url: string;
    labelUrl: string;
  };
  imageContent: string;
}

export interface IObjClient {
  introduce: string;
  listImage: string[];
}

export interface IObjContentFeature {
  icon: string;
  title: string;
  description: string;
}

export interface IObjFeature {
  introduce: {
    title: string[];
    description: string;
  };
  listContent: IObjContentFeature[];
}

export interface IObjAbout {
  image: string;
  title: string[];
  description: string;
  url: string;
  labelUrl: string;
}

export type TPropsNeedPositionTopScroll = {
  posTopScroll: number;
};
