import { FC, useState, useRef, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { IObjContentFeature } from '../../../interface';
import { customRPTransitionBottomToTop } from '../../../utils';
import { Transition } from 'react-transition-group';

const timeoutTransition = 0;

const {
  default: defaultTransitionBottomToTop,
  transition: objTransitionBottomToTop,
} = customRPTransitionBottomToTop;

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

type TPropsCmpElFeature = {
  objContent: IObjContentFeature;
  posTopScroll: number;
  isStartingAnimateParent: boolean;
  customRPTransitionDurationDefault: React.CSSProperties;
};

const CmpElFeature: FC<TPropsCmpElFeature> = ({
  objContent,
  posTopScroll,
  isStartingAnimateParent,
  customRPTransitionDurationDefault,
}) => {
  const [isStartingAnimate, setIsStartingAnimate] = useState(false);
  const refDivWrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (refDivWrapper.current) {
      if (
        refDivWrapper.current.getBoundingClientRect().bottom <=
        window.innerHeight * 1.1
      ) {
        setIsStartingAnimate(true);
      }
    }
  }, [posTopScroll, refDivWrapper]);
  return (
    <Transition
      in={isStartingAnimate && isStartingAnimateParent}
      timeout={timeoutTransition}
    >
      {(stateTransitionSectionWrapper) => (
        <DivWrapper ref={refDivWrapper}>
          <DivContainer>
            <DivWrapperAnimation>
              <ImgIconFeature
                src={objContent.icon}
                style={{
                  ...customRPTransitionDurationDefault,
                  ...defaultTransitionBottomToTop,
                  ...objTransitionBottomToTop[stateTransitionSectionWrapper],
                }}
                loading="lazy"
                alt=""
              />
            </DivWrapperAnimation>
          </DivContainer>
          <DivContainer>
            <DivWrapperAnimation>
              <H3TitleFeature
                style={{
                  ...customRPTransitionDurationDefault,
                  ...defaultTransitionBottomToTop,
                  ...objTransitionBottomToTop[stateTransitionSectionWrapper],
                }}
              >
                {objContent.title}
              </H3TitleFeature>
            </DivWrapperAnimation>
          </DivContainer>
          <DivContainer>
            <DivWrapperAnimation>
              <PDescFeature
                style={{
                  ...customRPTransitionDurationDefault,
                  ...defaultTransitionBottomToTop,
                  ...objTransitionBottomToTop[stateTransitionSectionWrapper],
                }}
              >
                {objContent.description}
              </PDescFeature>
            </DivWrapperAnimation>
          </DivContainer>
        </DivWrapper>
      )}
    </Transition>
  );
};

export default CmpElFeature;
