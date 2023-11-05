import { FC } from 'react';
import tw from 'tailwind-styled-components';
import CmpSectionHeaderHome from './CmpSectionHeaderHome';
import CmpSectionClient from './CmpSectionClient';
import CmpSectionFeature from './CmpSectionFeature';
import CmpSectionAbout from './CmpSectionAbout';
import CmpSectionCTA from './CmpSectionCTA';

const DivWrapperMain = tw.div`
`;

type TPropsCmpLayoutLanding = {
  posTopScroll: number;
};

const CmpLayoutLanding: FC<TPropsCmpLayoutLanding> = ({ posTopScroll }) => {
  return (
    <DivWrapperMain>
      <CmpSectionHeaderHome />
      <CmpSectionClient posTopScroll={posTopScroll} />
      <CmpSectionFeature />
      <CmpSectionAbout />
      <CmpSectionCTA />
    </DivWrapperMain>
  );
};

export default CmpLayoutLanding;
