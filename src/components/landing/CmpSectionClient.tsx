import { FC } from 'react';
import tw from 'tailwind-styled-components';

const SectionWrapper = tw.section`
mt-[352px] bg-transparent max-desktop:mt-[164px] max-tablet:mt-[134px]
`;

const CmpSectionClient: FC = () => {
  return <SectionWrapper></SectionWrapper>;
};

export default CmpSectionClient;
