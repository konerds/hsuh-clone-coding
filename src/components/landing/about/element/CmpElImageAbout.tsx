import { memo, useRef, useLayoutEffect } from 'react';

import { tw } from '../../../../utils';
import { Transition } from 'react-transition-group';
import {
  customRPTransitionDuration,
  customRPTransitionOpacity,
  customRPTransitionBackToFront,
  preloadImageBySource,
  useGetIsStartableAnimating,
  usePositionScrollWindow,
} from '../../../../utils';
import { IObjAbout } from '../../../../interface';

const DivContainerImageAbout = tw.div`
[grid-area:span_1_\/_span_1_\/_span_1_\/_span_1]
`;

const ImgImageAbout = tw.img`
w-auto transition-[opacity,transform] [transform-style:preserve-3d]
`;

type TPropsCmpElImageAbout = {
  objContent: Pick<IObjAbout, 'image'>;
  isDonePreload: boolean;
  setIsDonePreload: React.Dispatch<React.SetStateAction<boolean>>;
};

const CmpElImageAbout = ({
  objContent,
  isDonePreload,
  setIsDonePreload,
}: TPropsCmpElImageAbout) => {
  const posTopScroll = usePositionScrollWindow();
  const timeoutTransition = 0;
  const refDivContainerImageAbout = useRef<HTMLDivElement>(null);
  const isStartableDivContainerImageAbout = useGetIsStartableAnimating(
    posTopScroll,
    refDivContainerImageAbout,
    {
      pointDestTouching: 'top',
      flagAdditional: isDonePreload,
    },
  );
  useLayoutEffect(() => {
    preloadImageBySource(objContent.image).then((isDone) => {
      setIsDonePreload(isDone);
    });
  }, [objContent.image, setIsDonePreload]);
  return (
    <Transition
      in={isStartableDivContainerImageAbout}
      timeout={timeoutTransition}
    >
      {(stateTransitionDivContainerImageAbout) => {
        const durationTransition = 1000;
        return (
          <DivContainerImageAbout ref={refDivContainerImageAbout}>
            <ImgImageAbout
              src={objContent.image}
              style={{
                ...customRPTransitionDuration(durationTransition),
                ...customRPTransitionOpacity.default,
                ...customRPTransitionOpacity.transition[
                  stateTransitionDivContainerImageAbout
                ],
                ...customRPTransitionBackToFront.default,
                ...customRPTransitionBackToFront.transition[
                  stateTransitionDivContainerImageAbout
                ],
              }}
              alt=""
            />
          </DivContainerImageAbout>
        );
      }}
    </Transition>
  );
};

export default memo(CmpElImageAbout);
