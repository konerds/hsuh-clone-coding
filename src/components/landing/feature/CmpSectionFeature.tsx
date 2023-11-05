import { FC, useState, useRef, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { IObjFeature } from '../../../interface';
import { getObjFeature } from '../../../api';
import CmpElFeature from './CmpElFeature';
import {
  customRPTransitionBottomToTop,
  customRPTransitionDuration,
} from '../../../utils';
import { Transition } from 'react-transition-group';

const durationTransitionIn = 0;
const durationTransition = 1000;

const customRPTransitionDurationDefault =
  customRPTransitionDuration(durationTransition);

const {
  default: defaultTransitionBottomToTop,
  transition: objTransitionBottomToTop,
} = customRPTransitionBottomToTop;

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
mb-2rem mx-0 mt-0
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

type TPropsCmpSectionFeature = {
  posTopScroll: number;
};

const CmpSectionFeature: FC<TPropsCmpSectionFeature> = ({ posTopScroll }) => {
  const [isStartingAnimate, setIsStartingAnimate] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [objFeature, setObjFeature] = useState<IObjFeature>();
  const refSectionWrapper = useRef<HTMLElement>(null);
  useEffect(() => {
    getObjFeature().then((dataObjFeature) => {
      setObjFeature(dataObjFeature);
      setIsFetched(true);
    });
  }, []);
  useEffect(() => {
    if (refSectionWrapper.current) {
      if (
        isFetched &&
        refSectionWrapper.current.getBoundingClientRect().bottom <=
          window.innerHeight * 1.5
      ) {
        setIsStartingAnimate(true);
      }
    }
  }, [isFetched, posTopScroll, refSectionWrapper]);
  return (
    <Transition in={isStartingAnimate} timeout={durationTransitionIn}>
      {(stateTransitionSectionWrapper) => (
        <SectionWrapper ref={refSectionWrapper}>
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
                              <H2TitleIntroduce
                                style={{
                                  ...customRPTransitionDurationDefault,
                                  ...defaultTransitionBottomToTop,
                                  ...objTransitionBottomToTop[
                                    stateTransitionSectionWrapper
                                  ],
                                }}
                              >
                                {titleIntroduce}
                              </H2TitleIntroduce>
                            </DivWrapperAnimation>
                          );
                        },
                      )}
                    </DivWrapperTitleIntroduce>
                    <DivWrapperDescIntroduce>
                      <PDescIntroduce
                        style={{
                          ...customRPTransitionDurationDefault,
                          ...defaultTransitionBottomToTop,
                          ...objTransitionBottomToTop[
                            stateTransitionSectionWrapper
                          ],
                        }}
                      >
                        {objFeature?.introduce.description}
                      </PDescIntroduce>
                    </DivWrapperDescIntroduce>
                  </DivWrapperIntroduce>
                </DivContainerIntroduce>
                <DivContainerListFeature>
                  {objFeature?.listContent.map((objContent, idxObjContent) => {
                    return (
                      <CmpElFeature
                        key={idxObjContent}
                        objContent={objContent}
                        posTopScroll={posTopScroll}
                        isStartingAnimateParent={
                          stateTransitionSectionWrapper === 'entered'
                        }
                        customRPTransitionDurationDefault={
                          customRPTransitionDurationDefault
                        }
                      />
                    );
                  })}
                </DivContainerListFeature>
              </DivWrapperPaddedVertical>
            </DivContainer>
          </DivWrapper>
        </SectionWrapper>
      )}
    </Transition>
  );
};

export default CmpSectionFeature;
