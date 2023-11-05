import { useState, useEffect } from 'react';
import { EViewport } from '../interface';

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

export const usePositionScrollWindow = (axis: 'x' | 'y') => {
  const [positionScroll, setPositionScroll] = useState(0);
  useEffect(() => {
    const updatePosition = () => {
      setPositionScroll(axis === 'y' ? window.scrollY : window.scrollX);
    };
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  return positionScroll;
};
