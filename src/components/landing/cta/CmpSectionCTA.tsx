import { FC } from 'react';
import tw from 'tailwind-styled-components';
import { TPropsNeedPositionTopScroll } from '../../../interface';

const SectionWrapper = tw.section`
static -mt-[240px] bg-transparent max-desktop:-mt-[254px] max-mobile-landscape:-mt-[166px]
`;

type TPropsCmpSectionCTA = TPropsNeedPositionTopScroll;

const CmpSectionCTA: FC<TPropsCmpSectionCTA> = () => {
  return <SectionWrapper></SectionWrapper>;
};

export default CmpSectionCTA;
