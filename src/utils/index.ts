import { memo, useState, useEffect, useContext, createContext } from 'react';

import _tw from 'tailwind-styled-components';
import { EViewport } from '../interface';

export const tw = {
  div: <T extends object>(...args: Parameters<typeof _tw.div<T>>) =>
    memo(_tw.div<T>(...args)),
  header: <T extends object>(...args: Parameters<typeof _tw.header<T>>) =>
    memo(_tw.header<T>(...args)),
  a: <T extends object>(...args: Parameters<typeof _tw.a<T>>) =>
    memo(_tw.a<T>(...args)),
  img: <T extends object>(...args: Parameters<typeof _tw.img<T>>) =>
    memo(_tw.img<T>(...args)),
  nav: <T extends object>(...args: Parameters<typeof _tw.nav<T>>) =>
    memo(_tw.nav<T>(...args)),
  section: <T extends object>(...args: Parameters<typeof _tw.section<T>>) =>
    memo(_tw.section<T>(...args)),
  footer: <T extends object>(...args: Parameters<typeof _tw.footer<T>>) =>
    memo(_tw.footer<T>(...args)),
  p: <T extends object>(...args: Parameters<typeof _tw.p<T>>) =>
    memo(_tw.p<T>(...args)),
  h1: <T extends object>(...args: Parameters<typeof _tw.h1<T>>) =>
    memo(_tw.h1<T>(...args)),
  h2: <T extends object>(...args: Parameters<typeof _tw.h2<T>>) =>
    memo(_tw.h2<T>(...args)),
  h3: <T extends object>(...args: Parameters<typeof _tw.h3<T>>) =>
    memo(_tw.h3<T>(...args)),
  h4: <T extends object>(...args: Parameters<typeof _tw.h4<T>>) =>
    memo(_tw.h4<T>(...args)),
};

export const customRP = (obj: React.CSSProperties) => obj;

export const queryByMaxWidth = (maxWidth: EViewport) => {
  return { maxWidth: maxWidth - 0.02 };
};

export const customRPTransitionDuration = (duration: number) =>
  customRP({
    transitionDuration: `${duration}ms`,
  });

export const customRPTransitionOpacity = {
  default: customRP({
    opacity: 0,
  }),
  transition: {
    entering: customRP({
      opacity: 0,
    }),
    entered: customRP({
      opacity: 1,
    }),
    exiting: {},
    exited: {},
    unmounted: {},
  },
};

export const customRPTransitionBottomToTop = {
  default: customRP({
    transform:
      'translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
  }),
  transition: {
    entering: customRP({
      transform:
        'translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    }),
    entered: customRP({
      transform:
        'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    }),
    exiting: {},
    exited: {},
    unmounted: {},
  },
};

export const customRPTransitionBackToFront = {
  default: customRP({
    transform:
      'translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
  }),
  transition: {
    entering: customRP({
      transform:
        'translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    }),
    entered: customRP({
      transform:
        'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    }),
    exiting: {},
    exited: {},
    unmounted: {},
  },
};

export const useGetIsStartableAnimating = <T extends HTMLElement>(
  posTopScroll: number,
  refElement: React.RefObject<T>,
  additional?: {
    pointDestTouching?: 'top' | 'bottom';
    flagAdditional?: boolean;
  },
) => {
  const [isStartableAnimating, setIsStartableAnimating] = useState(false);
  useEffect(() => {
    if (refElement.current) {
      const flagAdditional = additional?.flagAdditional || true;
      const rectCreatedByViewport = refElement.current.getBoundingClientRect();
      const positionTouching =
        additional?.pointDestTouching === 'top'
          ? rectCreatedByViewport.top
          : rectCreatedByViewport.bottom;
      setIsStartableAnimating(
        flagAdditional && positionTouching <= window.innerHeight,
      );
    }
  }, [posTopScroll, refElement, additional]);
  return isStartableAnimating;
};

export const preloadImageBySource: (
  sourceAny?: string | string[],
) => Promise<any> = async (sourceAny?: string | string[]) => {
  if (Array.isArray(sourceAny) && sourceAny.length > 0) {
    return Promise.all(
      sourceAny.map((elSource) => {
        return preloadImageBySource(elSource);
      }),
    );
  } else {
    return new Promise<boolean>((resolve, reject) => {
      if (typeof sourceAny === 'string') {
        const instanceImage = new Image();
        instanceImage.onload = () => {
          resolve(true);
        };
        instanceImage.onerror = instanceImage.onabort = () => {
          reject();
        };
        instanceImage.src = sourceAny;
      } else {
        resolve(false);
      }
    });
  }
};

export const VerticalScrollPositionContext = createContext(0);

export function usePositionScrollWindow() {
  return useContext(VerticalScrollPositionContext);
}
