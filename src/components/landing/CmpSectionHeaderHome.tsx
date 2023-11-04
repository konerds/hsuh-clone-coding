import { FC } from 'react';
import tw from 'tailwind-styled-components';
import ImageBgHomeHeader from '../../assets/image/img-bg-header-home.png';
import { customRP } from '../../utils';

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
mt-[60px] max-tablet:mt-[10px] max-mobile-landscape:mt-[60px]
`;

const DivContainerContentHeaderHome = tw.div`
`;

const DivContainerImageHeaderHome = tw.div`
`;

const CmpSectionHeaderHome: FC = () => {
  return (
    <SectionWrapper style={customRPSectionWrapper}>
      <DivWrapper>
        <DivContainer>
          <DivWrapperPushingHeader>
            <DivHeaderHeaderHome>
              <DivContainerContentHeaderHome></DivContainerContentHeaderHome>
              <DivContainerImageHeaderHome></DivContainerImageHeaderHome>
            </DivHeaderHeaderHome>
          </DivWrapperPushingHeader>
        </DivContainer>
      </DivWrapper>
    </SectionWrapper>
  );
};

export default CmpSectionHeaderHome;
