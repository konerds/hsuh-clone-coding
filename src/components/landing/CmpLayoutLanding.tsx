import { FC } from 'react';
import tw from 'tailwind-styled-components';
import CmpSectionHeaderHome from './CmpSectionHeaderHome';
import CmpSectionClient from './CmpSectionClient';
import CmpSectionFeature from './CmpSectionFeature';
import CmpSectionAbout from './CmpSectionAbout';
import CmpSectionCTA from './CmpSectionCTA';

const DivWrapperMain = tw.div`
`;

const CmpLayoutLanding: FC = () => {
  return (
    <DivWrapperMain>
      <CmpSectionHeaderHome />
      <CmpSectionClient />
      <CmpSectionFeature />
      <CmpSectionAbout />
      <CmpSectionCTA />
    </DivWrapperMain>
  );
};

export default CmpLayoutLanding;
