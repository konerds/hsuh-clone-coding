import { FC } from 'react';
import tw from 'tailwind-styled-components';

const SectionWrapper = tw.section`
mt-0 h-[1872px] bg-[#111212] max-desktop:h-[2690px] max-tablet:h-[2240px] max-mobile-landscape:h-[2320px]
`;

const CmpSectionAbout: FC = () => {
  return <SectionWrapper></SectionWrapper>;
};

export default CmpSectionAbout;
