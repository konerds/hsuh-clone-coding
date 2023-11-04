import { FC } from 'react';
import tw from 'tailwind-styled-components';

const SectionWrapper = tw.section`
mt-0 bg-transparent
`;

const CmpSectionFeature: FC = () => {
  return <SectionWrapper></SectionWrapper>;
};

export default CmpSectionFeature;
