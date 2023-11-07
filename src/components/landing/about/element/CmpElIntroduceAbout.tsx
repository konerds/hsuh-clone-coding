import { FC, useRef } from 'react';
import tw from 'tailwind-styled-components';
import {
  customRPTransitionBottomToTop,
  customRPTransitionDuration,
  customRPTransitionOpacity,
  customRPTransitionBackToFront,
  useGetIsStartableAnimating,
} from '../../../../utils';
import { Transition } from 'react-transition-group';
import { IObjAbout, TPropsNeedPositionTopScroll } from '../../../../interface';

type TPropsDivContainerIntroduceAbout = {
  $isIdxEven: boolean;
};
const DivContainerIntroduceAbout = tw.div<TPropsDivContainerIntroduceAbout>`
[grid-area:span_1_\/_span_1_\/_span_1_\/_span_1]
${(p) => (p.$isIdxEven ? 'self-center' : 'place-self-center')}
`;

const DivContainerHeadingAbout = tw.div`
mx-0 mb-[2rem] mt-0 max-desktop:static
`;

const DivWrapperAnimation = tw.div`
overflow-hidden
`;

const H2TitleAbout = tw.h2`
my-0 text-[3.75rem] font-extrabold leading-[130%] text-[color:#f4f4f4] transition-transform [transform-style:preserve-3d] max-tablet:text-[3rem] max-tablet:leading-[3.8rem]
`;

const PDescAbout = tw.p`
mb-0 leading-[200%] text-[color:#f4f4f466] transition-transform [transform-style:preserve-3d]
`;

const DivContainerBtnAbout = tw.div`
mx-0 mt-0
`;

const LinkBtnAbout = tw.a`
inline-block cursor-pointer rounded-[32px] border-[1px] border-[color:#f4f4f429] bg-transparent px-[24px] py-[16px] text-[18px] leading-[inherit] text-[color:#f4f4f4a3] transition-[opacity,transform] [transform-style:preserve-3d] [text-decoration:none] hover:border-[color:#f4f4f4] hover:text-[color:#f4f4f4] max-tablet:py-[12px] max-tablet:text-[16px] max-tablet:leading-[20px]
`;

type TPropsCmpElIntroduce = TPropsNeedPositionTopScroll & {
  objContent: Omit<IObjAbout, 'image'>;
  isIdxEven: boolean;
  isDonePreload: boolean;
};

const CmpElIntroduceAbout: FC<TPropsCmpElIntroduce> = ({
  posTopScroll,
  objContent,
  isIdxEven,
  isDonePreload,
}) => {
  const timeoutTransition = 0;
  const timeoutTransitionDivContainerBtnAbout = 300;
  const refDivContainerIntroduceAbout = useRef<HTMLDivElement>(null);
  const refDivContainerBtnAbout = useRef<HTMLDivElement>(null);
  const isStartableDivContainerIntroduceAbout = useGetIsStartableAnimating(
    posTopScroll,
    refDivContainerIntroduceAbout,
    {
      pointDestTouching: 'top',
      flagAdditional: isDonePreload,
    },
  );
  const isStartableDivContainerBtnAbout = useGetIsStartableAnimating(
    posTopScroll,
    refDivContainerBtnAbout,
    {
      flagAdditional: isDonePreload,
    },
  );
  return (
    <Transition
      in={isStartableDivContainerIntroduceAbout}
      timeout={timeoutTransition}
    >
      {(stateTransitionDivContainerIntroduceAbout) => {
        const durationTransition = 1000;
        return (
          <DivContainerIntroduceAbout
            ref={refDivContainerIntroduceAbout}
            $isIdxEven={isIdxEven}
          >
            <div>
              <DivContainerHeadingAbout>
                {objContent.title.map((elTitle, idxElTitle) => {
                  return (
                    <DivWrapperAnimation key={idxElTitle}>
                      <H2TitleAbout
                        style={{
                          ...customRPTransitionDuration(durationTransition),
                          ...customRPTransitionBottomToTop.default,
                          ...customRPTransitionBottomToTop.transition[
                            stateTransitionDivContainerIntroduceAbout
                          ],
                        }}
                      >
                        {elTitle}
                      </H2TitleAbout>
                    </DivWrapperAnimation>
                  );
                })}
              </DivContainerHeadingAbout>
            </div>
            <div>
              <DivContainerHeadingAbout>
                <DivWrapperAnimation>
                  <PDescAbout
                    style={{
                      ...customRPTransitionDuration(durationTransition),
                      ...customRPTransitionBottomToTop.default,
                      ...customRPTransitionBottomToTop.transition[
                        stateTransitionDivContainerIntroduceAbout
                      ],
                    }}
                  >
                    {objContent.description}
                  </PDescAbout>
                </DivWrapperAnimation>
              </DivContainerHeadingAbout>
            </div>
            <Transition
              in={isStartableDivContainerBtnAbout}
              timeout={timeoutTransitionDivContainerBtnAbout}
            >
              {(stateTransitionLinkBtnAbout) => {
                return (
                  <DivContainerBtnAbout ref={refDivContainerBtnAbout}>
                    <LinkBtnAbout
                      href={objContent.url}
                      style={{
                        ...customRPTransitionDuration(durationTransition),
                        ...customRPTransitionOpacity.default,
                        ...customRPTransitionOpacity.transition[
                          stateTransitionLinkBtnAbout
                        ],
                        ...customRPTransitionBackToFront.default,
                        ...customRPTransitionBackToFront.transition[
                          stateTransitionLinkBtnAbout
                        ],
                      }}
                    >
                      {objContent.labelUrl}
                    </LinkBtnAbout>
                  </DivContainerBtnAbout>
                );
              }}
            </Transition>
          </DivContainerIntroduceAbout>
        );
      }}
    </Transition>
  );
};

export default CmpElIntroduceAbout;
