import { memo, useState, useRef, useLayoutEffect } from 'react';

import { tw } from '../../utils';
import { EViewport, IObjHeader } from '../../interface';
import { getObjHeader } from '../../api';
import {
  customRPTransitionBottomToTop,
  customRPTransitionDuration,
  customRPTransitionOpacity,
  preloadImageBySource,
  queryByMaxWidth,
  useGetIsStartableAnimating,
  usePositionScrollWindow,
} from '../../utils';
import { useMediaQuery } from 'react-responsive';
import AnimateHeight from 'react-animate-height';
import { Transition } from 'react-transition-group';

const HeaderWrapper = tw.header`
absolute inset-[0%_0%_auto] z-[11] block overflow-hidden bg-transparent px-[2.5rem] py-[20px]
`;

const DivContainerNav = tw.div`
relative mx-auto flex h-full w-full max-w-[73.25rem] items-center justify-between py-0 transition-[opacity,transform] [transform-style:preserve-3d]
`;

const DivWrapperMenuNav = tw.div`
flex flex-row items-center justify-center max-desktop:bg-transparent max-desktop:pb-0 max-tablet:text-transparent
`;

const LinkHome = tw.a`
relative float-left text-[color:#333333] [text-decoration:none] max-tablet:pl-[10px] max-mobile-landscape:mr-0 max-mobile-landscape:pl-0 desktop:mr-[100px]
`;

const ImgLogo = tw.img`
h-auto w-[90px]
`;

const NavWrapperMenuDesktop = tw.nav`
relative float-right block
`;

const LinkNavDesktop = tw.a`
relative ml-auto mr-[40px] inline-block p-[20px] text-left align-top text-[18px] font-medium leading-[27px] text-[color:#f4f4f466] transition-[color] duration-200 ease-[ease] [text-decoration:none] hover:text-white
`;

const DivWrapperBtnNav = tw.div`
flex justify-end
`;

const LinkBtnSignup = tw.a`
inline-block min-w-max rounded-[32px] border-[1px] border-[color:#f4f4f429] bg-transparent px-[24px] py-[16px] text-[18px] leading-[inherit] text-[color:#f4f4f49c] [text-decoration:none] hover:border-[color:#f4f4f4] hover:text-[color:#f4f4f4] max-desktop:px-[24px] max-tablet:py-[12px] max-tablet:text-[16px] max-tablet:leading-[20px]
`;

const DivWrapperMenuHamburgerMobile = tw.div`
relative float-right cursor-pointer select-text p-[18px] text-[24px] tap-highlight-color max-desktop:ml-[20px] max-desktop:border-[1px] max-desktop:border-[color:#96a0b526] max-tablet:px-[14px] max-tablet:py-[12px] max-mobile-landscape:ml-0
`;

const DivMenuHamburgerMobile = tw.div`
font-['webflow-icons'] font-normal leading-[1] [font-style:normal] [font-variant:normal] [speak:none] [text-transform:none] before:content-hamburger
`;

const DivNavOverlay = tw.div`
relative block
`;

const NavWrapperMenuOverlay = tw.nav`
ml-auto block w-fit max-w-full overflow-visible bg-[color:#f4f4f4] text-center text-[color:#f4f4f4] max-mobile-landscape:w-full
`;

const LinkNavOverlay = tw.a`
relative mx-auto block p-[20px] text-left text-[18px] font-medium leading-[27px] text-[color:#1e1e20a3] transition-[color] duration-200 ease-[ease] [text-decoration:none] hover:text-[color:#1e1e20]
`;

export const CmpHeader = () => {
  const posTopScroll = usePositionScrollWindow();
  const timeoutTransition = 0;
  const isWithinTablet = useMediaQuery(queryByMaxWidth(EViewport.DESKTOP));
  const isWithinMobilePortrait = useMediaQuery(
    queryByMaxWidth(EViewport.MOBILE_LANDSCAPE),
  );
  const [objHeader, setObjHeader] = useState<IObjHeader>();
  const [isDonePreload, setIsDonePreload] = useState(false);
  const [isOpenedMenuHamburger, setIsOpenedMenuHamburger] = useState(false);
  const refDivContainerNav = useRef<HTMLDivElement>(null);
  const isStartableAnimatingDivContainerNav = useGetIsStartableAnimating(
    posTopScroll,
    refDivContainerNav,
    {
      pointDestTouching: 'top',
      flagAdditional: isDonePreload,
    },
  );
  useLayoutEffect(() => {
    getObjHeader().then((dataObjHeader) => {
      if (dataObjHeader) {
        setObjHeader(dataObjHeader);
        preloadImageBySource(dataObjHeader.iconUrl).then((isDone) => {
          setIsDonePreload(isDone);
        });
      }
    });
  }, []);
  return (
    <HeaderWrapper>
      <Transition
        in={isStartableAnimatingDivContainerNav}
        timeout={timeoutTransition}
      >
        {(stateTransitionDivContainerNav) => {
          const durationTransition = 1000;
          return (
            <DivContainerNav
              ref={refDivContainerNav}
              style={{
                ...customRPTransitionDuration(durationTransition),
                ...customRPTransitionOpacity.default,
                ...customRPTransitionOpacity.transition[
                  stateTransitionDivContainerNav
                ],
                ...customRPTransitionBottomToTop.default,
                ...customRPTransitionBottomToTop.transition[
                  stateTransitionDivContainerNav
                ],
              }}
            >
              <DivWrapperMenuNav>
                <LinkHome>
                  <ImgLogo src={objHeader?.iconUrl} alt="" />
                </LinkHome>
                {!isWithinTablet && (
                  <NavWrapperMenuDesktop>
                    {objHeader?.listMenu.map(
                      (objMenuHeader, idxObjMenuHeader) => {
                        return (
                          <LinkNavDesktop
                            key={idxObjMenuHeader}
                            href={objMenuHeader.url}
                          >
                            {objMenuHeader.name}
                          </LinkNavDesktop>
                        );
                      },
                    )}
                  </NavWrapperMenuDesktop>
                )}
              </DivWrapperMenuNav>
              <DivWrapperBtnNav>
                {!isWithinMobilePortrait && (
                  <LinkBtnSignup href="https://webflow.com/Caddyflow">
                    Create Account
                  </LinkBtnSignup>
                )}
                {isWithinTablet && (
                  <DivWrapperMenuHamburgerMobile
                    onClick={() => {
                      setIsOpenedMenuHamburger(!isOpenedMenuHamburger);
                    }}
                  >
                    <DivMenuHamburgerMobile></DivMenuHamburgerMobile>
                  </DivWrapperMenuHamburgerMobile>
                )}
              </DivWrapperBtnNav>
            </DivContainerNav>
          );
        }}
      </Transition>
      <AnimateHeight
        duration={500}
        height={
          objHeader?.listMenu &&
          isStartableAnimatingDivContainerNav &&
          isWithinTablet &&
          isOpenedMenuHamburger
            ? 'auto'
            : 0
        }
      >
        <DivNavOverlay>
          {isWithinTablet && isOpenedMenuHamburger && (
            <NavWrapperMenuOverlay>
              {objHeader?.listMenu.map((objMenuHeader, idxObjMenuHeader) => {
                return (
                  <LinkNavOverlay
                    key={idxObjMenuHeader}
                    href={objMenuHeader.url}
                  >
                    {objMenuHeader.name}
                  </LinkNavOverlay>
                );
              })}
            </NavWrapperMenuOverlay>
          )}
        </DivNavOverlay>
      </AnimateHeight>
    </HeaderWrapper>
  );
};

export default memo(CmpHeader);
