import { FC, useState, useEffect, useRef } from 'react';
import tw from 'tailwind-styled-components';
import { Transition } from 'react-transition-group';
import { IObjCTA, TPropsNeedPositionTopScroll } from '../../../interface';
import { getObjCTA } from '../../../api';
import {
  customRP,
  customRPTransitionBackToFront,
  customRPTransitionBottomToTop,
  customRPTransitionDuration,
  customRPTransitionOpacity,
  preloadImageBySource,
  useGetIsStartableAnimating,
} from '../../../utils';
import ImgBgCTA from '../../../assets/image/img-bg-cta.png';

const SectionWrapper = tw.section`
static -mt-[240px] bg-transparent max-desktop:-mt-[254px] max-mobile-landscape:-mt-[166px]
`;

const DivWrapper = tw.div`
px-[2.5rem] max-mobile-landscape:px-[1.5rem]
`;

const DivContainer = tw.div`
mx-auto w-full max-w-[73.25rem]
`;

const DivWrapperPaddedVertical = tw.div`
px-0
`;

const customRPDivWrapperCTA = customRP({
  backgroundImage: `url(${ImgBgCTA})`,
});
const DivWrapperCTA = tw.div`
static block rounded-[32px] bg-cover bg-[position:50%_50%] py-[40px] max-tablet:px-[20px]
`;

const DivContentCTA = tw.div`
mx-auto max-w-[704px] text-center
`;

const DivWrapperTitleContentCTA = tw.div`
mx-0 mb-[2rem] mt-0 max-desktop:static
`;

const DivWrapperAnimation = tw.div`
overflow-hidden
`;

const H2TitleContentCTA = tw.h2`
my-0 text-[3.75rem] font-extrabold leading-[130%] text-[color:#f4f4f4] transition-transform [transform-style:preserve-3d] max-tablet:text-[3rem] max-tablet:leading-[3.8rem]
`;

const DivWrapperDescContentCTA = tw.div`
mx-0 mb-[2rem] mt-0 max-desktop:static
`;

const PDescContentCTA = tw.p`
mb-0 leading-[200%] text-[color:#f4f4f466] transition-transform [transform-style:preserve-3d]
`;

const LinkBtnContentCTA = tw.a`
relative z-[1] mx-auto flex h-[62px] w-[272px] max-w-full items-center justify-center rounded-[40px] border-[1px] border-[color:#f4f4f429] bg-[color:#f4f4f4] px-[26px] py-[20px] transition-[opacity,transfrom] [transform-style:preserve-3d] [text-decoration:none] hover:border-[color:#1e1e20]
`;

const ImgIconLinkBtnContentCTA = tw.img`
mr-[10px]
`;

const DivTextLinkBtnContentCTA = tw.div`
text-[18px] leading-[24px] text-[color:#1e1e20]
`;

type TPropsCmpSectionCTA = TPropsNeedPositionTopScroll;

const CmpSectionCTA: FC<TPropsCmpSectionCTA> = ({ posTopScroll }) => {
  const timeoutTransition = 0;
  const timeoutTransitionDivContainerBtnCTA = 300;
  const [objCTA, setObjCTA] = useState<IObjCTA>();
  const [isDonePreload, setIsDonePreload] = useState(false);
  const refDivContentCTA = useRef<HTMLDivElement>(null);
  const refDivContainerBtnCTA = useRef<HTMLDivElement>(null);
  const isStartableAnimatingDivContentCTA = useGetIsStartableAnimating(
    posTopScroll,
    refDivContentCTA,
    {
      pointDestTouching: 'top',
      flagAdditional: isDonePreload,
    },
  );
  const isStartableAnimatingDivContainerBtnCTA = useGetIsStartableAnimating(
    posTopScroll,
    refDivContainerBtnCTA,
    {
      flagAdditional: isDonePreload,
    },
  );
  useEffect(() => {
    getObjCTA().then((dataObjCTA) => {
      if (dataObjCTA) {
        setObjCTA(dataObjCTA);
      }
    });
  }, []);
  useEffect(() => {
    preloadImageBySource(objCTA?.iconUrl).then((isDone) => {
      setIsDonePreload(isDone);
    });
  }, [objCTA]);
  return (
    <SectionWrapper>
      <DivWrapper>
        <DivContainer>
          <DivWrapperPaddedVertical>
            <DivWrapperCTA style={customRPDivWrapperCTA}>
              <Transition
                in={isStartableAnimatingDivContentCTA}
                timeout={timeoutTransition}
              >
                {(stateTransitionDivContentCTA) => {
                  const durationTransition = 1000;
                  return (
                    <DivContentCTA ref={refDivContentCTA}>
                      <div>
                        <DivWrapperTitleContentCTA>
                          {objCTA?.title.map((elTitle, idxElTitle) => {
                            return (
                              <DivWrapperAnimation key={idxElTitle}>
                                <H2TitleContentCTA
                                  style={{
                                    ...customRPTransitionDuration(
                                      durationTransition,
                                    ),
                                    ...customRPTransitionBottomToTop.default,
                                    ...customRPTransitionBottomToTop.transition[
                                      stateTransitionDivContentCTA
                                    ],
                                  }}
                                >
                                  {elTitle}
                                </H2TitleContentCTA>
                              </DivWrapperAnimation>
                            );
                          })}
                        </DivWrapperTitleContentCTA>
                        <DivWrapperDescContentCTA>
                          <DivWrapperAnimation>
                            <PDescContentCTA
                              style={{
                                ...customRPTransitionDuration(
                                  durationTransition,
                                ),
                                ...customRPTransitionBottomToTop.default,
                                ...customRPTransitionBottomToTop.transition[
                                  stateTransitionDivContentCTA
                                ],
                              }}
                            >
                              {objCTA?.description}
                            </PDescContentCTA>
                          </DivWrapperAnimation>
                        </DivWrapperDescContentCTA>
                      </div>
                      <Transition
                        in={isStartableAnimatingDivContainerBtnCTA}
                        timeout={timeoutTransitionDivContainerBtnCTA}
                      >
                        {(stateTransitionDivLinkBtnContentCTA) => {
                          return (
                            <div ref={refDivContainerBtnCTA}>
                              <LinkBtnContentCTA
                                href={objCTA?.url}
                                style={{
                                  ...customRPTransitionDuration(
                                    durationTransition,
                                  ),
                                  ...customRPTransitionOpacity.default,
                                  ...customRPTransitionOpacity.transition[
                                    stateTransitionDivLinkBtnContentCTA
                                  ],
                                  ...customRPTransitionBackToFront.default,
                                  ...customRPTransitionBackToFront.transition[
                                    stateTransitionDivLinkBtnContentCTA
                                  ],
                                }}
                              >
                                <ImgIconLinkBtnContentCTA
                                  src={objCTA?.iconUrl}
                                  loading="lazy"
                                  alt=""
                                />
                                <DivTextLinkBtnContentCTA>
                                  {objCTA?.labelUrl}
                                </DivTextLinkBtnContentCTA>
                              </LinkBtnContentCTA>
                            </div>
                          );
                        }}
                      </Transition>
                    </DivContentCTA>
                  );
                }}
              </Transition>
            </DivWrapperCTA>
          </DivWrapperPaddedVertical>
        </DivContainer>
      </DivWrapper>
    </SectionWrapper>
  );
};

export default CmpSectionCTA;
