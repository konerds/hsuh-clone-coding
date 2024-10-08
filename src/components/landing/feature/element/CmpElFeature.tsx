import { FC, useState, useRef, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import {
  IObjContentFeature,
  TPropsNeedPositionTopScroll,
} from '../../../../interface';
import {
  customRPTransitionBottomToTop,
  customRPTransitionDuration,
  preloadImageBySource,
  useGetIsStartableAnimating,
} from '../../../../utils';
import { Transition } from 'react-transition-group';

const DivWrapper = tw.div`
overflow-hidden [grid-area:span_1_\/_span_1_\/_span_1_\/_span_1]
`;

const DivContainer = tw.div`
mx-0 mb-[1rem] mt-0
`;

const DivWrapperAnimation = tw.div`
overflow-hidden
`;

const ImgIconFeature = tw.img`
transition-transform [transform-style:preserve-3d]
`;

const H3TitleFeature = tw.h3`
my-0 text-[22px] font-bold leading-[200%] text-[color:#1e1e20cc] transition-transform [transform-style:preserve-3d]
`;

const PDescFeature = tw.p`
mb-0 leading-[200%] text-[color:#1e1e2052] transition-transform [transform-style:preserve-3d]
`;

type TPropsCmpElFeature = TPropsNeedPositionTopScroll & {
  objContent: IObjContentFeature;
};

const CmpElFeature: FC<TPropsCmpElFeature> = ({ posTopScroll, objContent }) => {
  const timeoutTransition = 0;
  const [isDonePreload, setIsDonePreload] = useState(false);
  const refImgIconFeature = useRef<HTMLImageElement>(null);
  const refH3TitleFeature = useRef<HTMLHeadingElement>(null);
  const refPDescFeature = useRef<HTMLParagraphElement>(null);
  const isStartableAnimatingImgIconFeature = useGetIsStartableAnimating(
    posTopScroll,
    refImgIconFeature,
    {
      flagAdditional: isDonePreload,
    },
  );
  const isStartableAnimatingH3TitleFeature = useGetIsStartableAnimating(
    posTopScroll,
    refH3TitleFeature,
  );
  const isStartableAnimatingPDescFeature = useGetIsStartableAnimating(
    posTopScroll,
    refPDescFeature,
  );
  useEffect(() => {
    preloadImageBySource(objContent.icon).then((isDone) => {
      setIsDonePreload(isDone);
    });
  }, [objContent]);
  return (
    <DivWrapper>
      <DivContainer>
        <DivWrapperAnimation>
          <Transition
            in={isStartableAnimatingImgIconFeature}
            timeout={timeoutTransition}
          >
            {(stateTransitionImgIconFeature) => {
              const durationTransition = 1000;
              return (
                <ImgIconFeature
                  ref={refImgIconFeature}
                  src={objContent.icon}
                  style={{
                    ...customRPTransitionDuration(durationTransition),
                    ...customRPTransitionBottomToTop.default,
                    ...customRPTransitionBottomToTop.transition[
                      stateTransitionImgIconFeature
                    ],
                  }}
                  loading="lazy"
                  alt=""
                />
              );
            }}
          </Transition>
        </DivWrapperAnimation>
      </DivContainer>
      <DivContainer>
        <DivWrapperAnimation>
          <Transition
            in={isStartableAnimatingH3TitleFeature}
            timeout={timeoutTransition}
          >
            {(stateTransitionH3TitleFeature) => {
              const durationTransition = 1000;
              return (
                <H3TitleFeature
                  ref={refH3TitleFeature}
                  style={{
                    ...customRPTransitionDuration(durationTransition),
                    ...customRPTransitionBottomToTop.default,
                    ...customRPTransitionBottomToTop.transition[
                      stateTransitionH3TitleFeature
                    ],
                  }}
                >
                  {objContent.title}
                </H3TitleFeature>
              );
            }}
          </Transition>
        </DivWrapperAnimation>
      </DivContainer>
      <DivContainer>
        <DivWrapperAnimation>
          <Transition
            in={isStartableAnimatingPDescFeature}
            timeout={timeoutTransition}
          >
            {(stateTransitionPDescFeature) => {
              const durationTransition = 1000;
              return (
                <PDescFeature
                  ref={refPDescFeature}
                  style={{
                    ...customRPTransitionDuration(durationTransition),
                    ...customRPTransitionBottomToTop.default,
                    ...customRPTransitionBottomToTop.transition[
                      stateTransitionPDescFeature
                    ],
                  }}
                >
                  {objContent.description}
                </PDescFeature>
              );
            }}
          </Transition>
        </DivWrapperAnimation>
      </DivContainer>
    </DivWrapper>
  );
};

export default CmpElFeature;
