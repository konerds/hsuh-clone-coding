import { memo, useState, useRef, useLayoutEffect } from 'react';

import { tw } from '../../utils';
import { IObjFooter } from '../../interface';
import { getObjFooter } from '../../api';
import { Transition } from 'react-transition-group';
import {
  customRPTransitionBottomToTop,
  customRPTransitionDuration,
  customRPTransitionOpacity,
  preloadImageBySource,
  useGetIsStartableAnimating,
  usePositionScrollWindow,
} from '../../utils';

const FooterWrapper = tw.footer`
mt-[120px] overflow-hidden border-t-[1px] border-t-[#2f2f2f3d] bg-transparent
`;

const DivWrapper = tw.div`
px-[2.5rem] max-mobile-landscape:px-[1.5rem]
`;

const DivContainer = tw.div`
mx-auto w-full max-w-[73.25rem]
`;

const DivWrapperInside = tw.div`
px-0 pb-[2rem] pt-[4rem]
`;

const DivWrapperContentFooter = tw.div`
transition-[opacity,transform] [transform-style:preserve-3d]
`;

const DivLayoutGridContentFooter = tw.div`
grid gap-[4rem] [grid-auto-columns:1fr] [grid-template-columns:2.5fr_1fr_1fr_1fr] [grid-template-rows:auto] max-tablet:place-items-center max-tablet:[grid-template-columns:1fr]
`;

type TPropsDivContainerItemContentFooter = {
  $isLeftSection?: boolean;
};
const DivContainerItemContentFooter = tw.div<TPropsDivContainerItemContentFooter>`
[grid-area:span_1_\/_span_1_\/_span_1_\/_span_1] max-tablet:text-center
${(p) => (p.$isLeftSection ? 'max-tablet:place-self-center' : '')}
`;

const DivWrapperLogo = tw.div`
mx-0 mb-[1rem] mt-0
`;

const DivWrapperSlogan = tw.div`
mx-0 mt-0
`;

const DivSlogan = tw.div`
max-w-[304px] font-bold leading-[200%] text-[color:#1e1e203d]
`;

const DivWrapperCategoryMenu = tw.div`
mx-0 mb-[2rem] mt-0 max-desktop:static
`;

const H4Category = tw.h4`
text-[16px] leading-[22px] text-[color:#1e1e20a3]
`;

const LinkMenu = tw.a`
mb-[10px] block text-[16px] leading-[200%] text-[color:#1e1e203d] [text-decoration:none] hover:text-[color:#1e1e2099]
`;

const DivWrapperCopyright = tw.div`
transition-[opacity,transform] [transform-style:preserve-3d]
`;

const DivContainerCopyright = tw.div`
mt-[54px] flex justify-between max-tablet:flex-col max-tablet:items-center max-tablet:justify-center max-mobile-landscape:text-center
`;

const DivWrapperTextCopyright = tw.div`
font-medium text-[color:#1e1e203d]
`;

const DivCopyrightRight = tw.div`
max-tablet:mt-[12px]
`;

const DivContainerPrivacyPolicy = tw.div`
font-bold text-[color:#1e1e203d]
`;

const LinkPrivacyPolicy = tw.a`
font-medium text-[color:#1e1e203d] [text-decoration:none] hover:text-[color:#1e1e2099]
`;

const CmpFooter = () => {
  const posTopScroll = usePositionScrollWindow();
  const timeoutTransition = 0;
  const [objFooter, setObjFooter] = useState<IObjFooter>();
  const [isDonePreload, setIsDonePreload] = useState(false);
  const refDivWrapperInside = useRef<HTMLDivElement>(null);
  const isStartableAnimatingDivWrapperInside = useGetIsStartableAnimating(
    posTopScroll,
    refDivWrapperInside,
    {
      pointDestTouching: 'top',
      flagAdditional: isDonePreload,
    },
  );
  useLayoutEffect(() => {
    getObjFooter().then((dataObjFooter) => {
      if (dataObjFooter) {
        setObjFooter(dataObjFooter);
        preloadImageBySource(dataObjFooter.iconUrl).then((isDone) => {
          setIsDonePreload(isDone);
        });
      }
    });
  }, []);
  return (
    <FooterWrapper>
      <DivWrapper>
        <DivContainer>
          <Transition
            in={isStartableAnimatingDivWrapperInside}
            timeout={timeoutTransition}
          >
            {(stateTransitionDivWrapperInside) => {
              const durationTransition = 1000;
              return (
                <DivWrapperInside ref={refDivWrapperInside}>
                  <DivWrapperContentFooter
                    style={{
                      ...customRPTransitionDuration(durationTransition),
                      ...customRPTransitionOpacity.default,
                      ...customRPTransitionOpacity.transition[
                        stateTransitionDivWrapperInside
                      ],
                      ...customRPTransitionBottomToTop.default,
                      ...customRPTransitionBottomToTop.transition[
                        stateTransitionDivWrapperInside
                      ],
                    }}
                  >
                    <DivLayoutGridContentFooter>
                      <DivContainerItemContentFooter $isLeftSection={true}>
                        <DivWrapperLogo>
                          <img src={objFooter?.iconUrl} alt="" />
                        </DivWrapperLogo>
                        <DivWrapperSlogan>
                          <DivSlogan>{objFooter?.labelUrl}</DivSlogan>
                        </DivWrapperSlogan>
                      </DivContainerItemContentFooter>
                      {objFooter?.category.map((objMenu, idxObjMenu) => {
                        return (
                          <DivContainerItemContentFooter
                            key={idxObjMenu}
                            $isLeftSection={false}
                          >
                            <DivWrapperCategoryMenu>
                              <H4Category>{objMenu.name}</H4Category>
                            </DivWrapperCategoryMenu>
                            <div>
                              {objMenu.listMenu.map((elMenu, idxElMenu) => {
                                return (
                                  <LinkMenu key={idxElMenu} href={elMenu.url}>
                                    {elMenu.name}
                                  </LinkMenu>
                                );
                              })}
                            </div>
                          </DivContainerItemContentFooter>
                        );
                      })}
                    </DivLayoutGridContentFooter>
                  </DivWrapperContentFooter>
                  <DivWrapperCopyright
                    style={{
                      ...customRPTransitionDuration(durationTransition),
                      ...customRPTransitionOpacity.default,
                      ...customRPTransitionOpacity.transition[
                        stateTransitionDivWrapperInside
                      ],
                      ...customRPTransitionBottomToTop.default,
                      ...customRPTransitionBottomToTop.transition[
                        stateTransitionDivWrapperInside
                      ],
                    }}
                  >
                    <DivContainerCopyright>
                      <div>
                        <DivWrapperTextCopyright>
                          © 2021 Hush Inc. Copyright and All rights reserved.
                        </DivWrapperTextCopyright>
                      </div>
                      <DivCopyrightRight>
                        <DivContainerPrivacyPolicy>
                          <LinkPrivacyPolicy href="#">
                            Terms and Conditions
                          </LinkPrivacyPolicy>
                          {' · '}
                          <LinkPrivacyPolicy href="#">
                            Privacy Policy
                          </LinkPrivacyPolicy>
                        </DivContainerPrivacyPolicy>
                      </DivCopyrightRight>
                    </DivContainerCopyright>
                  </DivWrapperCopyright>
                </DivWrapperInside>
              );
            }}
          </Transition>
        </DivContainer>
      </DivWrapper>
    </FooterWrapper>
  );
};

export default memo(CmpFooter);
