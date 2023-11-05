import { FC } from 'react';
import tw from 'tailwind-styled-components';

const SectionWrapper = tw.section`
static -mt-[240px] bg-transparent max-desktop:-mt-[254px] max-mobile-landscape:-mt-[166px]
`;

const CmpSectionCTA: FC = () => {
  return <SectionWrapper></SectionWrapper>;
};

export default CmpSectionCTA;
