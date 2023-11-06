import { FC, useRef } from 'react';
import tw from 'tailwind-styled-components';
import {
  useGetIsStartableAnimating,
  customRPTransitionBottomToTop,
  customRPTransitionDuration,
  customRPTransitionOpacity,
  customRPTransitionBackToFront,
} from '../../../utils';
import { Transition } from 'react-transition-group';
import { IObjAbout, TPropsNeedPositionTopScroll } from '../../../interface';

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
inline-block cursor-pointer rounded-[32px] border-[1px] border-[color:#f4f4f429] bg-transparent px-[24px] py-[16px] text-[18px] leading-[inherit] text-[color:#f4f4f4a3] transition-[opacity,transform] [transform-style:preserve-3d] [text-decoration:none] hover:border-[color:#f4f4f4] hover:text-[color:#f4f4f4] max-desktop:mx-[24px] max-tablet:py-[12px] max-tablet:text-[16px] max-tablet:leading-[20px]
`;

type TPropsCmpElIntroduce = TPropsNeedPositionTopScroll & {
  objContent: Omit<IObjAbout, 'image'>;
  isIdxEven: boolean;
};

const CmpElIntroduceAbout: FC<TPropsCmpElIntroduce> = ({
  posTopScroll,
  objContent,
  isIdxEven,
}) => {
  const timeoutTransition = 0;
  const refH2TitleAbout = useRef<HTMLHeadingElement>(null);
  const refPDescAbout = useRef<HTMLParagraphElement>(null);
  const refLinkBtnAbout = useRef<HTMLAnchorElement>(null);
  const isStartableAnimatingH2TitleAbout = useGetIsStartableAnimating(
    posTopScroll,
    refH2TitleAbout,
  );
  const isStartableAnimatingPDescAbout = useGetIsStartableAnimating(
    posTopScroll,
    refPDescAbout,
  );
  const isStartableAnimatingLinkBtnAbout = useGetIsStartableAnimating(
    posTopScroll,
    refLinkBtnAbout,
  );
  return (
    <DivContainerIntroduceAbout $isIdxEven={isIdxEven}>
      <div>
        <DivContainerHeadingAbout>
          {objContent.title.map((elTitle, idxElTitle) => {
            return (
              <DivWrapperAnimation key={idxElTitle}>
                <Transition
                  in={isStartableAnimatingH2TitleAbout}
                  timeout={timeoutTransition}
                >
                  {(stateTransitionH2TitleAbout) => {
                    const durationTransition = 1000;
                    return (
                      <H2TitleAbout
                        ref={refH2TitleAbout}
                        style={{
                          ...customRPTransitionDuration(durationTransition),
                          ...customRPTransitionBottomToTop.default,
                          ...customRPTransitionBottomToTop.transition[
                            stateTransitionH2TitleAbout
                          ],
                        }}
                      >
                        {elTitle}
                      </H2TitleAbout>
                    );
                  }}
                </Transition>
              </DivWrapperAnimation>
            );
          })}
        </DivContainerHeadingAbout>
      </div>
      <div>
        <DivContainerHeadingAbout>
          <DivWrapperAnimation>
            <Transition
              in={isStartableAnimatingPDescAbout}
              timeout={timeoutTransition}
            >
              {(stateTransitionPDescAbout) => {
                const durationTransition = 1000;
                return (
                  <PDescAbout
                    ref={refPDescAbout}
                    style={{
                      ...customRPTransitionDuration(durationTransition),
                      ...customRPTransitionBottomToTop.default,
                      ...customRPTransitionBottomToTop.transition[
                        stateTransitionPDescAbout
                      ],
                    }}
                  >
                    {objContent.description}
                  </PDescAbout>
                );
              }}
            </Transition>
          </DivWrapperAnimation>
        </DivContainerHeadingAbout>
      </div>
      <DivContainerBtnAbout>
        <Transition
          in={isStartableAnimatingLinkBtnAbout}
          timeout={timeoutTransition}
        >
          {(stateTransitionLinkBtnAbout) => {
            const durationTransition = 1000;
            return (
              <LinkBtnAbout
                ref={refLinkBtnAbout}
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
            );
          }}
        </Transition>
      </DivContainerBtnAbout>
    </DivContainerIntroduceAbout>
  );
};

export default CmpElIntroduceAbout;
