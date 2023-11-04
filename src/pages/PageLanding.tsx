import { FC } from 'react';
import CmpHeader from '../components/shared/CmpHeader';
import CmpLayoutLanding from '../components/landing/CmpLayoutLanding';
import CmpFooter from '../components/shared/CmpFooter';

const PageLanding: FC = () => {
  return (
    <>
      <CmpHeader />
      <CmpLayoutLanding />
      <CmpFooter />
    </>
  );
};

export default PageLanding;
