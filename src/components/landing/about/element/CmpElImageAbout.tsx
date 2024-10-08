import { FC, useRef, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { Transition } from 'react-transition-group';
import {
  customRPTransitionDuration,
  customRPTransitionOpacity,
  customRPTransitionBackToFront,
  preloadImageBySource,
  useGetIsStartableAnimating,
} from '../../../../utils';
import { IObjAbout, TPropsNeedPositionTopScroll } from '../../../../interface';

const DivContainerImageAbout = tw.div`
[grid-area:span_1_\/_span_1_\/_span_1_\/_span_1]
`;

const ImgImageAbout = tw.img`
w-auto transition-[opacity,transform] [transform-style:preserve-3d]
`;

type TPropsCmpElImageAbout = TPropsNeedPositionTopScroll & {
  objContent: Pick<IObjAbout, 'image'>;
  isDonePreload: boolean;
  setIsDonePreload: React.Dispatch<React.SetStateAction<boolean>>;
};

const CmpElImageAbout: FC<TPropsCmpElImageAbout> = ({
  posTopScroll,
  objContent,
  isDonePreload,
  setIsDonePreload,
}) => {
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
  useEffect(() => {
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
              loading="lazy"
              alt=""
            />
          </DivContainerImageAbout>
        );
      }}
    </Transition>
  );
};

export default CmpElImageAbout;
