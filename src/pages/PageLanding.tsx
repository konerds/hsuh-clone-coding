import { memo } from 'react';

import CmpHeader from '../components/shared/CmpHeader';
import CmpLayoutLanding from '../components/landing/CmpLayoutLanding';
import CmpFooter from '../components/shared/CmpFooter';

const PageLanding = () => {
  return (
    <>
      <CmpHeader />
      <CmpLayoutLanding />
      <CmpFooter />
    </>
  );
};

export default memo(PageLanding);
