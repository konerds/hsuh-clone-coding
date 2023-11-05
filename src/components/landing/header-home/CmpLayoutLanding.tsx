import { FC } from 'react';
import tw from 'tailwind-styled-components';
import CmpSectionHeaderHome from '../CmpSectionHeaderHome';
import CmpSectionClient from '../client/CmpSectionClient';
import CmpSectionFeature from '../feature/CmpSectionFeature';
import CmpSectionAbout from '../about/CmpSectionAbout';
import CmpSectionCTA from '../cta/CmpSectionCTA';

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
      <CmpSectionFeature posTopScroll={posTopScroll} />
      <CmpSectionAbout />
      <CmpSectionCTA />
    </DivWrapperMain>
  );
};

export default CmpLayoutLanding;
