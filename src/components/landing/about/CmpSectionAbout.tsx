import { FC, useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { IObjAbout, TPropsNeedPositionTopScroll } from '../../../interface';
import { getListObjAbout } from '../../../api';
import CmpLayoutElAbout from './element/CmpLayoutElAbout';

const SectionWrapper = tw.section`
mt-0 h-[1872px] bg-[#111212] max-desktop:h-[2690px] max-tablet:h-[2240px] max-mobile-landscape:h-[2320px]
`;

const DivWrapper = tw.div`
px-[2.5rem] max-mobile-landscape:px-[1.5rem]
`;

const DivContainer = tw.div`
mx-auto w-full max-w-[73.25rem]
`;

const DivWrapperPaddedVertical = tw.div`
px-0
`;

type TPropsCmpSectionAbout = TPropsNeedPositionTopScroll;

const CmpSectionAbout: FC<TPropsCmpSectionAbout> = ({ posTopScroll }) => {
  const [listObjAbout, setListObjAbout] = useState<IObjAbout[]>([]);
  useEffect(() => {
    getListObjAbout().then((dataListObjAbout) => {
      if (dataListObjAbout) {
        setListObjAbout(dataListObjAbout);
      }
    });
  }, []);
  return (
    <SectionWrapper>
      <DivWrapper>
        <DivContainer>
          <DivWrapperPaddedVertical>
            <div>
              {listObjAbout.map((objAbout, idxObjAbout) => {
                return (
                  <CmpLayoutElAbout
                    key={idxObjAbout}
                    posTopScroll={posTopScroll}
                    isIdxEven={idxObjAbout % 2 === 0}
                    objAbout={objAbout}
                  />
                );
              })}
            </div>
          </DivWrapperPaddedVertical>
        </DivContainer>
      </DivWrapper>
    </SectionWrapper>
  );
};

export default CmpSectionAbout;
