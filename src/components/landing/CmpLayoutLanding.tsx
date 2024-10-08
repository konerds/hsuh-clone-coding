import { TPropsNeedPositionTopScroll } from '../../interface';
import { FC } from 'react';
import CmpSectionHeaderHome from './header-home/CmpSectionHeaderHome';
import CmpSectionClient from './client/CmpSectionClient';
import CmpSectionFeature from './feature/CmpSectionFeature';
import CmpSectionAbout from './about/CmpSectionAbout';
import CmpSectionCTA from './cta/CmpSectionCTA';

type TPropsCmpLayoutLanding = TPropsNeedPositionTopScroll;

const CmpLayoutLanding: FC<TPropsCmpLayoutLanding> = ({ posTopScroll }) => {
  return (
    <div>
      <CmpSectionHeaderHome posTopScroll={posTopScroll} />
      <CmpSectionClient posTopScroll={posTopScroll} />
      <CmpSectionFeature posTopScroll={posTopScroll} />
      <CmpSectionAbout posTopScroll={posTopScroll} />
      <CmpSectionCTA posTopScroll={posTopScroll} />
    </div>
  );
};

export default CmpLayoutLanding;
