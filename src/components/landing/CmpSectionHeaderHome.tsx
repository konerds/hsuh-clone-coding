import { FC, useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { Transition } from 'react-transition-group';
import {
  customRP,
  customRPTransitionBottomToTop,
  customRPTransitionDuration,
  customRPTransitionOpacity,
} from '../../utils';
import ImageBgHomeHeader from '../../assets/image/img-bg-header-home.png';
import ImageOverlayHighlight04 from '../../assets/image/img-overlay-highlight-04.png';
import ImageOverlayHighlight05 from '../../assets/image/img-overlay-highlight-05.png';
import ImageOverlayMac from '../../assets/image/img-overlay-mac.png';
import ImageDashboardHomeHeader from '../../assets/image/img-dashboard-header-home.png';

const durationTransition = 1000;

const defaultTransitionDuration =
  customRPTransitionDuration(durationTransition);

const { default: defaultTransitionOpacity, transition: objTransitionOpacity } =
  customRPTransitionOpacity;

const {
  default: defaultTransitionBottomToTop,
  transition: objTransitionBottomToTop,
} = customRPTransitionBottomToTop;

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

const DivWrapperPushingHeader = tw.div`
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
relative z-[1] mx-auto flex h-[62px] w-[272px] max-w-full items-center justify-center rounded-[40px] border-[1px] border-[color:#f4f4f429] bg-[image:linear-gradient(to_right,#4c85fa,#236bfe)] px-[26px] py-[20px] transition-opacity [text-decoration:none]
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
transition-transform [transform-style:preserve-3d]
`;

const CmpSectionHeaderHome: FC = () => {
  const [isMounting, setIsMounting] = useState(false);
  useEffect(() => {
    setIsMounting(true);
  }, []);
  return (
    <SectionWrapper style={customRPSectionWrapper}>
      <DivWrapper>
        <DivContainer>
          <DivWrapperPushingHeader>
            <Transition in={isMounting} timeout={durationTransition}>
              {(stateTransitionDivHeaderHome) => (
                <DivHeaderHeaderHome
                  style={{
                    ...defaultTransitionDuration,
                    ...defaultTransitionOpacity,
                    ...objTransitionOpacity[stateTransitionDivHeaderHome],
                  }}
                >
                  <DivContainerContentHeaderHome>
                    <DivTitleHeaderHome>
                      {['Connect with ', 'your team'].map(
                        (elTitle, idxElTitle) => {
                          return (
                            <DivWrapperAnimation key={idxElTitle}>
                              <H1LineTitle
                                style={{
                                  ...defaultTransitionDuration,
                                  ...defaultTransitionBottomToTop,
                                  ...objTransitionBottomToTop[
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
                            ...defaultTransitionDuration,
                            ...defaultTransitionBottomToTop,
                            ...objTransitionBottomToTop[
                              stateTransitionDivHeaderHome
                            ],
                          }}
                        >
                          Hush is a messaging app for your team that will helps
                          you to connect with everyone in a easy and comfortable
                          way posssible
                        </PDesc>
                      </DivWrapperAnimation>
                    </DivDescHeaderHome>
                    <DivDownloadHeaderHome>
                      <LinkBtnDownload
                        href="https://webflow.com/Caddyflow"
                        style={{
                          ...defaultTransitionDuration,
                          ...defaultTransitionOpacity,
                          ...objTransitionOpacity[stateTransitionDivHeaderHome],
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
                        <DivTextDownload>Download for MacOS</DivTextDownload>
                        <DivOverlayShadow></DivOverlayShadow>
                      </LinkBtnDownload>
                    </DivDownloadHeaderHome>
                  </DivContainerContentHeaderHome>
                  <DivContainerImageHeaderHome>
                    <ImgOverlayHighlight04
                      src={ImageOverlayHighlight04}
                      style={{
                        ...defaultTransitionDuration,
                        ...defaultTransitionOpacity,
                        ...objTransitionOpacity[stateTransitionDivHeaderHome],
                      }}
                      loading="lazy"
                      alt=""
                    />
                    <DivImageDashboard>
                      <DivWrapperAnimation>
                        <ImgDashboardHomeHeader
                          src={ImageDashboardHomeHeader}
                          style={{
                            ...defaultTransitionDuration,
                            ...defaultTransitionOpacity,
                            ...objTransitionOpacity[
                              stateTransitionDivHeaderHome
                            ],
                          }}
                          loading="lazy"
                          alt=""
                        />
                      </DivWrapperAnimation>
                    </DivImageDashboard>
                  </DivContainerImageHeaderHome>
                </DivHeaderHeaderHome>
              )}
            </Transition>
          </DivWrapperPushingHeader>
        </DivContainer>
      </DivWrapper>
    </SectionWrapper>
  );
};

export default CmpSectionHeaderHome;
