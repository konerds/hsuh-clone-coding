import { FC } from 'react';
import CmpHeader from '../components/shared/CmpHeader';
import CmpLayoutLanding from '../components/landing/CmpLayoutLanding';
import CmpFooter from '../components/shared/CmpFooter';
import { TPropsNeedPositionTopScroll } from '../interface';

type TPropsPageLanding = TPropsNeedPositionTopScroll;

const PageLanding: FC<TPropsPageLanding> = ({ posTopScroll }) => {
  return (
    <>
      <CmpHeader posTopScroll={posTopScroll} />
      <CmpLayoutLanding posTopScroll={posTopScroll} />
      <CmpFooter posTopScroll={posTopScroll} />
    </>
  );
};

export default PageLanding;
