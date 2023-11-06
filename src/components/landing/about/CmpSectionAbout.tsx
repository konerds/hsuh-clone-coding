import { FC, useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { IObjAbout, TPropsNeedPositionTopScroll } from '../../../interface';
import { getListObjAbout } from '../../../api';
import CmpElImageAbout from './CmpElImageAbout';
import CmpElIntroduceAbout from './CmpElIntroduceAbout';

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

type TPropsDivLayoutGridAbout = {
  $isIdxEven: boolean;
};
const DivLayoutGridAbout = tw.div<TPropsDivLayoutGridAbout>`
grid gap-[16px] pt-[10rem] [grid-auto-columns:1fr] [grid-template-rows:auto] max-mobile-landscape:gap-[4rem]
${(p) =>
  p.$isIdxEven
    ? '[grid-template-columns:1.75fr_1.25fr] max-desktop:[grid-template-columns:1.25fr] max-tablet:pt-[6rem] max-mobile-landscape:pt-[4rem]'
    : '[grid-template-columns:1.25fr_1.75fr] max-desktop:[grid-template-columns:1.75fr]'}
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
                const isIdxEven = idxObjAbout % 2 === 0;
                return (
                  <DivLayoutGridAbout key={idxObjAbout} $isIdxEven={isIdxEven}>
                    {isIdxEven ? (
                      <>
                        <CmpElImageAbout
                          posTopScroll={posTopScroll}
                          imageContent={objAbout.image}
                        />
                        <CmpElIntroduceAbout
                          posTopScroll={posTopScroll}
                          objContent={{
                            ...objAbout,
                          }}
                          isIdxEven={true}
                        />
                      </>
                    ) : (
                      <>
                        <CmpElIntroduceAbout
                          posTopScroll={posTopScroll}
                          objContent={{
                            ...objAbout,
                          }}
                          isIdxEven={false}
                        />
                        <CmpElImageAbout
                          posTopScroll={posTopScroll}
                          imageContent={objAbout.image}
                        />
                      </>
                    )}
                  </DivLayoutGridAbout>
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
