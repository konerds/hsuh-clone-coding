import { FC, useState, useRef, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { Transition } from 'react-transition-group';
import {
  customRP,
  customRPTransitionBottomToTop,
  customRPTransitionDuration,
  customRPTransitionOpacity,
  preloadImageBySource,
  useGetIsStartableAnimating,
} from '../../../utils';
import ImageBgHomeHeader from '../../../assets/image/img-bg-header-home.png';
import ImageOverlayHighlight04 from '../../../assets/image/img-overlay-highlight-04.png';
import ImageOverlayHighlight05 from '../../../assets/image/img-overlay-highlight-05.png';
import ImageOverlayMac from '../../../assets/image/img-overlay-mac.png';
import {
  IObjHeaderHome,
  TPropsNeedPositionTopScroll,
} from '../../../interface';
import { getObjHeaderHome } from '../../../api';

const customRPSectionWrapper = customRP({
  backgroundImage: `url(${ImageBgHomeHeader})`,
});
const SectionWrapper = tw.section`
h-[1200px] bg-cover bg-[position:50%_50%] max-desktop:h-[1036px] max-tablet:h-[806px]
`;

const DivWrapper = tw.div`
px-[2.5rem] max-mobile-landscape:px-[1.5rem]
`;

const DivContainer = tw.div`
mx-auto w-full max-w-[73.25rem]
`;

const DivWrapperPaddedVertical = tw.div`
px-0 pb-[6rem] pt-[8rem]
`;

const DivHeaderHeaderHome = tw.div`
mt-[60px] transition-opacity max-tablet:mt-[10px] max-mobile-landscape:mt-[60px]
`;

const DivContainerContentHeaderHome = tw.div`
mx-auto max-w-[648px] text-center
`;

const DivTitleHeaderHome = tw.div`
mx-0 mb-[2rem] mt-0 max-desktop:static
`;

const DivWrapperAnimation = tw.div`
overflow-hidden
`;

const H1LineTitle = tw.h1`
my-0 text-center text-[6rem] leading-[115%] text-[color:#f4f4f4] transition-transform [transform-style:preserve-3d] max-desktop:static max-tablet:text-[4.5rem] max-tablet:leading-[4.8rem] max-mobile-landscape:text-[4rem] max-mobile-landscape:leading-[4.4rem]
`;

const DivDescHeaderHome = tw.div`
mx-0 mb-[3rem] mt-0
`;

const PDesc = tw.p`
mx-auto mb-0 max-w-[476px] text-[16px] leading-[200%] text-[color:#f4f4f466] transition-transform [transform-style:preserve-3d]
`;

const DivDownloadHeaderHome = tw.div`
mx-0 mt-0
`;

const LinkBtnDownload = tw.a`
relative z-[1] mx-auto flex h-[62px] w-[272px] max-w-full items-center justify-center rounded-[40px] border-[1px] border-[color:#f4f4f429] bg-[image:linear-gradient(to_right,#4c85fa,#236bfe)] px-[26px] py-[20px] transition-opacity [text-decoration:none] hover:border-[color:#f4f4f4] hover:bg-transparent hover:bg-[image:linear-gradient(transparent,transparent)]
`;

const ImgOverlayHighlight05 = tw.img`
absolute inset-[-18px_auto_auto_-18px]
`;

const ImgOverlayMac = tw.img`
mr-[10px]
`;

const DivTextDownload = tw.div`
text-[18px] leading-[24px] text-[color:#f5f5f5]
`;

const DivOverlayShadow = tw.div`
absolute mt-0 h-[62px] w-[272px] rounded-[40px] bg-transparent shadow-[#387aff_1px_1px_140px_0px]
`;

const DivContainerImageHeaderHome = tw.div`
relative flex items-center justify-center
`;

const ImgOverlayHighlight04 = tw.img`
absolute inset-[16px_-60px_auto_auto] transition-opacity max-desktop:-right-[38px] max-desktop:top-[58px] max-desktop:w-[72px] max-mobile-landscape:-right-[20px] max-mobile-landscape:top-[78px] max-mobile-landscape:w-[34px]
`;

const DivImageDashboard = tw.div`
mt-[6rem]
`;

const ImgDashboardHomeHeader = tw.img`
transition-[opacity,transform] [transform-style:preserve-3d]
`;

type TPropsCmpSectionHeaderHome = TPropsNeedPositionTopScroll;

const CmpSectionHeaderHome: FC<TPropsCmpSectionHeaderHome> = ({
  posTopScroll,
}) => {
  const timeoutTransition = 0;
  const [objHeaderHome, setObjHeaderHome] = useState<IObjHeaderHome>();
  const [isDonePreload, setIsDonePreload] = useState(false);
  const refDivHeaderHeaderHome = useRef<HTMLDivElement>(null);
  const isStartableAnimatingDivHeaderHeaderHome = useGetIsStartableAnimating(
    posTopScroll,
    refDivHeaderHeaderHome,
    {
      pointDestTouching: 'top',
    },
  );
  useEffect(() => {
    getObjHeaderHome().then((dataObjHeaderHome) => {
      if (dataObjHeaderHome) {
        setObjHeaderHome(dataObjHeaderHome);
      }
    });
  }, []);
  useEffect(() => {
    preloadImageBySource(objHeaderHome?.imageContent).then((isDone) => {
      setIsDonePreload(isDone);
    });
  }, [objHeaderHome]);
  return (
    <SectionWrapper style={customRPSectionWrapper}>
      <DivWrapper>
        <DivContainer>
          <DivWrapperPaddedVertical>
            <Transition
              in={
                !!objHeaderHome &&
                isDonePreload &&
                isStartableAnimatingDivHeaderHeaderHome
              }
              timeout={timeoutTransition}
            >
              {(stateTransitionDivHeaderHome) => {
                const durationTransition = 1000;
                return (
                  <DivHeaderHeaderHome
                    ref={refDivHeaderHeaderHome}
                    style={{
                      ...customRPTransitionDuration(durationTransition),
                      ...customRPTransitionOpacity.default,
                      ...customRPTransitionOpacity.transition[
                        stateTransitionDivHeaderHome
                      ],
                    }}
                  >
                    <DivContainerContentHeaderHome>
                      <DivTitleHeaderHome>
                        {objHeaderHome?.introduce.title.map(
                          (elTitle, idxElTitle) => {
                            return (
                              <DivWrapperAnimation key={idxElTitle}>
                                <H1LineTitle
                                  style={{
                                    ...customRPTransitionDuration(
                                      durationTransition,
                                    ),
                                    ...customRPTransitionBottomToTop.default,
                                    ...customRPTransitionBottomToTop.transition[
                                      stateTransitionDivHeaderHome
                                    ],
                                  }}
                                >
                                  {elTitle}
                                </H1LineTitle>
                              </DivWrapperAnimation>
                            );
                          },
                        )}
                      </DivTitleHeaderHome>
                      <DivDescHeaderHome>
                        <DivWrapperAnimation>
                          <PDesc
                            style={{
                              ...customRPTransitionDuration(durationTransition),
                              ...customRPTransitionBottomToTop.default,
                              ...customRPTransitionBottomToTop.transition[
                                stateTransitionDivHeaderHome
                              ],
                            }}
                          >
                            {objHeaderHome?.introduce.description}
                          </PDesc>
                        </DivWrapperAnimation>
                      </DivDescHeaderHome>
                      <DivDownloadHeaderHome>
                        <LinkBtnDownload
                          href={objHeaderHome?.introduce.url}
                          style={{
                            ...customRPTransitionDuration(durationTransition),
                            ...customRPTransitionOpacity.default,
                            ...customRPTransitionOpacity.transition[
                              stateTransitionDivHeaderHome
                            ],
                          }}
                        >
                          <ImgOverlayHighlight05
                            src={ImageOverlayHighlight05}
                            loading="lazy"
                            alt=""
                          />
                          <ImgOverlayMac
                            src={ImageOverlayMac}
                            loading="lazy"
                            alt=""
                          />
                          <DivTextDownload>
                            {objHeaderHome?.introduce.labelUrl}
                          </DivTextDownload>
                          <DivOverlayShadow></DivOverlayShadow>
                        </LinkBtnDownload>
                      </DivDownloadHeaderHome>
                    </DivContainerContentHeaderHome>
                    <DivContainerImageHeaderHome>
                      <Transition
                        in={stateTransitionDivHeaderHome === 'entered'}
                        timeout={durationTransition}
                      >
                        {(stateTransitionImgOverlayHighlight04) => (
                          <ImgOverlayHighlight04
                            src={ImageOverlayHighlight04}
                            style={{
                              ...customRPTransitionDuration(durationTransition),
                              ...customRPTransitionOpacity.default,
                              ...customRPTransitionOpacity.transition[
                                stateTransitionImgOverlayHighlight04
                              ],
                            }}
                            loading="eager"
                            alt=""
                          />
                        )}
                      </Transition>
                      <DivImageDashboard>
                        <DivWrapperAnimation>
                          <ImgDashboardHomeHeader
                            src={objHeaderHome?.imageContent}
                            style={{
                              ...customRPTransitionDuration(durationTransition),
                              ...customRPTransitionOpacity.default,
                              ...customRPTransitionOpacity.transition[
                                stateTransitionDivHeaderHome
                              ],
                              ...customRPTransitionBottomToTop.default,
                              ...customRPTransitionBottomToTop.transition[
                                stateTransitionDivHeaderHome
                              ],
                            }}
                            loading="eager"
                            alt=""
                          />
                        </DivWrapperAnimation>
                      </DivImageDashboard>
                    </DivContainerImageHeaderHome>
                  </DivHeaderHeaderHome>
                );
              }}
            </Transition>
          </DivWrapperPaddedVertical>
        </DivContainer>
      </DivWrapper>
    </SectionWrapper>
  );
};

export default CmpSectionHeaderHome;
