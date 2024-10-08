export enum EViewport {
  MOBILE_PORTRAIT = 0,
  MOBILE_LANDSCAPE = 479,
  TABLET = 768,
  DESKTOP = 992,
}

type TUrlBase = {
  url: string;
  labelUrl: string;
  iconUrl: string;
};

type TMenu = Pick<TUrlBase, 'url'> & {
  name: string;
};

type TIntroduceBase = {
  title: string;
  description: string;
};

export interface IObjHeader extends Omit<TUrlBase, 'labelUrl'> {
  listMenu: TMenu[];
}

export interface IObjHeaderHome {
  introduce: TUrlBase &
    Pick<TIntroduceBase, 'description'> & {
      title: string[];
    };
  imageContent: string;
}

export interface IObjClient {
  introduce: string;
  listImage: string[];
}

export interface IObjContentFeature extends TIntroduceBase {
  icon: string;
}

export interface IObjFeature {
  introduce: Pick<TIntroduceBase, 'description'> & {
    title: string[];
  };
  listContent: IObjContentFeature[];
}

export interface IObjAbout
  extends Pick<TIntroduceBase, 'description'>,
    Omit<TUrlBase, 'iconUrl'> {
  image: string;
  title: string[];
}

export interface IObjCTA extends Pick<TIntroduceBase, 'description'>, TUrlBase {
  title: string[];
}

export interface IObjFooter extends Omit<TUrlBase, 'url'> {
  category: (Pick<TMenu, 'name'> & {
    listMenu: TMenu[];
  })[];
}
