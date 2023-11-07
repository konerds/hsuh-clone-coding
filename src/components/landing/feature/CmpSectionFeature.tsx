import { FC, useState, useRef, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { IObjFeature, TPropsNeedPositionTopScroll } from '../../../interface';
import { getObjFeature } from '../../../api';
import CmpElFeature from './element/CmpElFeature';
import {
  customRPTransitionBottomToTop,
  customRPTransitionDuration,
  useGetIsStartableAnimating,
} from '../../../utils';
import { Transition } from 'react-transition-group';

const SectionWrapper = tw.section`
mt-0 bg-transparent
`;

const DivWrapper = tw.div`
px-[2.5rem]
`;

const DivContainer = tw.div`
mx-auto w-full max-w-[73.25rem]
`;

const DivWrapperPaddedVertical = tw.div`
px-0 py-[6rem] max-mobile-landscape:py-[4rem]
`;

const DivContainerIntroduce = tw.div`
overflow-visible
`;

const DivWrapperIntroduce = tw.div`
mx-auto max-w-[672px] text-center
`;

const DivWrapperTitleIntroduce = tw.div`
mx-0 mb-[2rem] mt-0 max-desktop:static
`;

const DivWrapperAnimation = tw.div`
overflow-hidden
`;

const H2TitleIntroduce = tw.h2`
my-0 text-[3.75rem] font-extrabold leading-[130%] text-[color:#1e1e20] transition-transform [transform-style:preserve-3d] max-tablet:text-[3rem] max-tablet:leading-[3.8rem]
`;

const DivWrapperDescIntroduce = tw.div`
mx-0 mb-[6rem] mt-0
`;

const PDescIntroduce = tw.p`
mb-0 leading-[200%] text-[color:#1e1e2066] transition-transform [transform-style:preserve-3d]
`;

const DivContainerListFeature = tw.div`
grid gap-[4rem] [grid-auto-columns:1fr] [grid-template-columns:1fr_1fr_1fr] [grid-template-rows:auto] max-desktop:[grid-template-columns:1fr]
`;

type TPropsCmpSectionFeature = TPropsNeedPositionTopScroll;

const CmpSectionFeature: FC<TPropsCmpSectionFeature> = ({ posTopScroll }) => {
  const timeoutTransition = 0;
  const [objFeature, setObjFeature] = useState<IObjFeature>();
  const refH2TitleIntroduce = useRef<HTMLHeadingElement>(null);
  const refPDescIntroduce = useRef<HTMLParagraphElement>(null);
  const isStartableAnimatingH2TitleIntroduce = useGetIsStartableAnimating(
    posTopScroll,
    refH2TitleIntroduce,
    {
      pointDestTouching: 'top',
    },
  );
  const isStartableAnimatingPDescIntroduce = useGetIsStartableAnimating(
    posTopScroll,
    refPDescIntroduce,
    {
      pointDestTouching: 'top',
    },
  );
  useEffect(() => {
    getObjFeature().then((dataObjFeature) => {
      setObjFeature(dataObjFeature);
    });
  }, []);
  return (
    <SectionWrapper ref={refH2TitleIntroduce}>
      <DivWrapper>
        <DivContainer>
          <DivWrapperPaddedVertical>
            <DivContainerIntroduce>
              <DivWrapperIntroduce>
                <DivWrapperTitleIntroduce>
                  {objFeature?.introduce.title.map(
                    (titleIntroduce, idxTitleIntroduce) => {
                      return (
                        <DivWrapperAnimation key={idxTitleIntroduce}>
                          <Transition
                            in={isStartableAnimatingH2TitleIntroduce}
                            timeout={timeoutTransition}
                          >
                            {(stateTransitionH2TitleIntroduce) => {
                              const durationTransition = 1000;
                              return (
                                <H2TitleIntroduce
                                  ref={refH2TitleIntroduce}
                                  style={{
                                    ...customRPTransitionDuration(
                                      durationTransition,
                                    ),
                                    ...customRPTransitionBottomToTop.default,
                                    ...customRPTransitionBottomToTop.transition[
                                      stateTransitionH2TitleIntroduce
                                    ],
                                  }}
                                >
                                  {titleIntroduce}
                                </H2TitleIntroduce>
                              );
                            }}
                          </Transition>
                        </DivWrapperAnimation>
                      );
                    },
                  )}
                </DivWrapperTitleIntroduce>
                <DivWrapperDescIntroduce>
                  <Transition
                    in={!!objFeature && isStartableAnimatingPDescIntroduce}
                    timeout={timeoutTransition}
                  >
                    {(stateTransitionPDescIntroduce) => {
                      const durationTransition = 1000;
                      return (
                        <PDescIntroduce
                          ref={refPDescIntroduce}
                          style={{
                            ...customRPTransitionDuration(durationTransition),
                            ...customRPTransitionBottomToTop.default,
                            ...customRPTransitionBottomToTop.transition[
                              stateTransitionPDescIntroduce
                            ],
                          }}
                        >
                          {objFeature?.introduce.description}
                        </PDescIntroduce>
                      );
                    }}
                  </Transition>
                </DivWrapperDescIntroduce>
              </DivWrapperIntroduce>
            </DivContainerIntroduce>
            <DivContainerListFeature>
              {objFeature?.listContent.map((objContent, idxObjContent) => {
                return (
                  <CmpElFeature
                    key={idxObjContent}
                    posTopScroll={posTopScroll}
                    objContent={objContent}
                  />
                );
              })}
            </DivContainerListFeature>
          </DivWrapperPaddedVertical>
        </DivContainer>
      </DivWrapper>
    </SectionWrapper>
  );
};

export default CmpSectionFeature;
