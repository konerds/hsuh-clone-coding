import { FC } from 'react';
import CmpHeader from '../components/shared/CmpHeader';
import CmpLayoutLanding from '../components/landing/CmpLayoutLanding';
import CmpFooter from '../components/shared/CmpFooter';
import { usePositionScrollWindow } from '../utils';

const PageLanding: FC = () => {
  const posTopScroll = usePositionScrollWindow('y');
  return (
    <>
      <CmpHeader />
      <CmpLayoutLanding posTopScroll={posTopScroll} />
      <CmpFooter />
    </>
  );
};

export default PageLanding;
