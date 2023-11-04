import { FC } from 'react';
import tw from 'tailwind-styled-components';

const FooterWrapper = tw.footer`
mt-[120px] overflow-hidden border-t-[1px] border-t-[#2f2f2f3d] bg-transparent
`;

const DivWrapper = tw.div`
`;

const DivContainer = tw.div`
`;

const DivWrapperInside = tw.div`
`;

const DivWrapperContentFooter = tw.div`
`;

const DivLayoutGridContentFooter = tw.div`
`;

const DivContainerItemContentFooter = tw.div`
`;

const DivWrapperCopyright = tw.div`
`;

const DivContainerCopyright = tw.div`
`;

const DivCopyrightLeft = tw.div`
`;

const DivWrapperTextCopyright = tw.div`
`;

const DivCopyrightRight = tw.div`
`;

const DivContainerPrivacyPolicy = tw.div`
`;

const LinkTermCondition = tw.a`
`;

const LinkPrivacyPolicy = tw.a`
`;

const CmpFooter: FC = () => {
  return (
    <FooterWrapper>
      <DivWrapper>
        <DivContainer>
          <DivWrapperInside>
            <DivWrapperContentFooter>
              <DivLayoutGridContentFooter>
                <DivContainerItemContentFooter></DivContainerItemContentFooter>
                <DivContainerItemContentFooter></DivContainerItemContentFooter>
                <DivContainerItemContentFooter></DivContainerItemContentFooter>
                <DivContainerItemContentFooter></DivContainerItemContentFooter>
              </DivLayoutGridContentFooter>
            </DivWrapperContentFooter>
            <DivWrapperCopyright>
              <DivContainerCopyright>
                <DivCopyrightLeft>
                  <DivWrapperTextCopyright>
                    © 2021 Hush Inc. Copyright and All rights reserved.
                  </DivWrapperTextCopyright>
                </DivCopyrightLeft>
                <DivCopyrightRight>
                  <DivContainerPrivacyPolicy>
                    <LinkTermCondition href="#">
                      Terms and Conditions
                    </LinkTermCondition>
                    {' · '}
                    <LinkPrivacyPolicy href="#">
                      Privacy Policy
                    </LinkPrivacyPolicy>
                  </DivContainerPrivacyPolicy>
                </DivCopyrightRight>
              </DivContainerCopyright>
            </DivWrapperCopyright>
          </DivWrapperInside>
        </DivContainer>
      </DivWrapper>
    </FooterWrapper>
  );
};

export default CmpFooter;
