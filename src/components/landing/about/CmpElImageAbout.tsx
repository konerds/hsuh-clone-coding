import { FC, useState, useRef, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { Transition } from 'react-transition-group';
import {
  customRPTransitionDuration,
  customRPTransitionOpacity,
  customRPTransitionBackToFront,
  useGetIsStartableAnimating,
  preloadImageBySource,
} from '../../../utils';
import { TPropsNeedPositionTopScroll } from '../../../interface';

const DivContainerImageAbout = tw.div`
[grid-area:span_1_\/_span_1_\/_span_1_\/_span_1]
`;

const ImgImageAbout = tw.img`
w-auto transition-[opacity,transform] [transform-style:preserve-3d]
`;

type TPropsCmpElImageAbout = TPropsNeedPositionTopScroll & {
  imageContent: string;
};

const CmpElImageAbout: FC<TPropsCmpElImageAbout> = ({
  posTopScroll,
  imageContent,
}) => {
  const timeoutTransition = 0;
  const [isDonePreload, setIsDonePreload] = useState(false);
  const refImgImageAbout = useRef<HTMLImageElement>(null);
  const isStartableAnimatingImgImageAbout = useGetIsStartableAnimating(
    posTopScroll,
    refImgImageAbout,
  );
  useEffect(() => {
    preloadImageBySource(imageContent).then((isDone) => {
      setIsDonePreload(isDone);
    });
  }, [imageContent]);
  return (
    <DivContainerImageAbout>
      <Transition
        in={isDonePreload && isStartableAnimatingImgImageAbout}
        timeout={timeoutTransition}
      >
        {(stateTransitionImgImageAbout) => {
          const durationTransition = 1000;
          return (
            <ImgImageAbout
              ref={refImgImageAbout}
              src={imageContent}
              style={{
                ...customRPTransitionDuration(durationTransition),
                ...customRPTransitionOpacity.default,
                ...customRPTransitionOpacity.transition[
                  stateTransitionImgImageAbout
                ],
                ...customRPTransitionBackToFront.default,
                ...customRPTransitionBackToFront.transition[
                  stateTransitionImgImageAbout
                ],
              }}
              loading="lazy"
              alt=""
            />
          );
        }}
      </Transition>
    </DivContainerImageAbout>
  );
};

export default CmpElImageAbout;
