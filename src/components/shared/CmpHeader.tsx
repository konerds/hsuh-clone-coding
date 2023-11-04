import { FC } from 'react';
import tw from 'tailwind-styled-components';

const HeaderWrapper = tw.header`
absolute inset-[0%_0%_auto] z-[11] block overflow-hidden bg-transparent px-[2.5rem] py-[20px]
`;

const DivContainerNav = tw.div`
relative mx-auto flex h-full w-full max-w-[73.25rem] items-center justify-between py-0
`;

const DivWrapperMenuNav = tw.div``;

const DivWrapperBtnNav = tw.div``;

const CmpHeader: FC = () => {
  return (
    <HeaderWrapper>
      <DivContainerNav>
        <DivWrapperMenuNav></DivWrapperMenuNav>
        <DivWrapperBtnNav></DivWrapperBtnNav>
      </DivContainerNav>
    </HeaderWrapper>
  );
};

export default CmpHeader;
