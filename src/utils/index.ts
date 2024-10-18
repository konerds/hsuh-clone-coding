import { useState, useEffect, useContext, createContext } from 'react';

import _tw from 'tailwind-styled-components';
import { EViewport } from '../interface';

export const tw = _tw;

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
