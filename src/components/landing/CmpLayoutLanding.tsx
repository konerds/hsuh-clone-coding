import { memo } from 'react';

import CmpSectionHeaderHome from './header-home/CmpSectionHeaderHome';
import CmpSectionClient from './client/CmpSectionClient';
import CmpSectionFeature from './feature/CmpSectionFeature';
import CmpSectionAbout from './about/CmpSectionAbout';
import CmpSectionCTA from './cta/CmpSectionCTA';

const CmpLayoutLanding = () => {
  return (
    <div>
      <CmpSectionHeaderHome />
      <CmpSectionClient />
      <CmpSectionFeature />
      <CmpSectionAbout />
      <CmpSectionCTA />
    </div>
  );
};

export default memo(CmpLayoutLanding);
