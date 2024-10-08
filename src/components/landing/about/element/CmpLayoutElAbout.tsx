import { FC, useState } from 'react';
import tw from 'tailwind-styled-components';
import { IObjAbout, TPropsNeedPositionTopScroll } from '../../../../interface';
import CmpElImageAbout from './CmpElImageAbout';
import CmpElIntroduceAbout from './CmpElIntroduceAbout';

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

type TPropsCmpLayoutElAbout = TPropsNeedPositionTopScroll & {
  isIdxEven: boolean;
  objAbout: IObjAbout;
};

const CmpLayoutElAbout: FC<TPropsCmpLayoutElAbout> = ({
  posTopScroll,
  isIdxEven,
  objAbout,
}) => {
  const [isDonePreload, setIsDonePreload] = useState(false);
  return (
    <>
      {
        <DivLayoutGridAbout $isIdxEven={isIdxEven}>
          {isIdxEven ? (
            <>
              <CmpElImageAbout
                posTopScroll={posTopScroll}
                objContent={{ ...objAbout }}
                isDonePreload={isDonePreload}
                setIsDonePreload={setIsDonePreload}
              />
              <CmpElIntroduceAbout
                posTopScroll={posTopScroll}
                objContent={{
                  ...objAbout,
                }}
                isIdxEven={true}
                isDonePreload={isDonePreload}
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
                isDonePreload={isDonePreload}
              />
              <CmpElImageAbout
                posTopScroll={posTopScroll}
                objContent={{ ...objAbout }}
                isDonePreload={isDonePreload}
                setIsDonePreload={setIsDonePreload}
              />
            </>
          )}
        </DivLayoutGridAbout>
      }
    </>
  );
};

export default CmpLayoutElAbout;
