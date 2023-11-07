import { FC, useState, useRef, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import {
  customRPTransitionDuration,
  customRPTransitionOpacity,
  customRPTransitionBackToFront,
  useGetIsStartableAnimating,
  preloadImageBySource,
} from '../../../utils';
import { Transition } from 'react-transition-group';
import { IObjClient, TPropsNeedPositionTopScroll } from '../../../interface';
import { getObjClient } from '../../../api';

const SectionWrapper = tw.section`
mt-[352px] bg-transparent max-desktop:mt-[164px] max-tablet:mt-[134px]
`;

const DivWrapper = tw.div`
px-[2.5rem] max-mobile-landscape:px-[1.5rem]
`;

const DivContainer = tw.div`
mx-auto w-full max-w-[73.25rem]
`;

const DivWrapperPaddedVertical = tw.div`
px-0 py-[4rem]
`;

const DivContainerIntroduce = tw.div`
transition-[opacity,transform] [transform-style:preserve-3d]
`;

const DivWrapperParagraphIntroduce = tw.div`
mx-0 mb-[2rem] mt-0 max-desktop:static
`;

const DivTextParagraph = tw.div`
text-center text-[18px] font-bold leading-[24px] text-[color:#1e1e2052]
`;

const DivContainerListClient = tw.div`
mx-auto flex max-w-[600px] place-items-center justify-center max-tablet:mx-0 max-tablet:max-w-none max-tablet:flex-row max-mobile-landscape:flex-col
`;

const ImgLogoClient = tw.img`
mr-[40px] w-auto max-tablet:mr-[24px] max-mobile-landscape:mr-0 max-mobile-landscape:mt-[24px]
`;

type TPropsCmpSectionClient = TPropsNeedPositionTopScroll;

const CmpSectionClient: FC<TPropsCmpSectionClient> = ({ posTopScroll }) => {
  const timeoutTransition = 0;
  const [objClient, setObjClient] = useState<IObjClient>();
  const [isDonePreload, setIsDonePreload] = useState(false);
  const refDivContainerIntroduce = useRef<HTMLDivElement>(null);
  const isStartableAnimatingDivContainerIntroduce = useGetIsStartableAnimating(
    posTopScroll,
    refDivContainerIntroduce,
    {
      flagAdditional: isDonePreload,
    },
  );
  useEffect(() => {
    getObjClient().then((dataObjClient) => {
      setObjClient(dataObjClient);
    });
  }, []);
  useEffect(() => {
    preloadImageBySource(objClient?.listImage).then((listIsDone: boolean[]) => {
      setIsDonePreload(listIsDone.every((isDone) => isDone));
    });
  }, [objClient]);
  return (
    <SectionWrapper>
      <DivWrapper>
        <DivContainer>
          <DivWrapperPaddedVertical>
            <Transition
              in={isStartableAnimatingDivContainerIntroduce}
              timeout={timeoutTransition}
            >
              {(stateTransitionDivContainerIntroduce) => {
                const durationTransition = 1000;
                return (
                  <DivContainerIntroduce
                    ref={refDivContainerIntroduce}
                    style={{
                      ...customRPTransitionDuration(durationTransition),
                      ...customRPTransitionOpacity.default,
                      ...customRPTransitionOpacity.transition[
                        stateTransitionDivContainerIntroduce
                      ],
                      ...customRPTransitionBackToFront.default,
                      ...customRPTransitionBackToFront.transition[
                        stateTransitionDivContainerIntroduce
                      ],
                    }}
                  >
                    <DivWrapperParagraphIntroduce>
                      <DivTextParagraph>
                        {objClient?.introduce}
                      </DivTextParagraph>
                    </DivWrapperParagraphIntroduce>
                    <DivContainerListClient>
                      {objClient?.listImage.map((urlImage, idxUrlImage) => {
                        return (
                          <ImgLogoClient
                            key={idxUrlImage}
                            src={urlImage}
                            loading="lazy"
                            alt=""
                          />
                        );
                      })}
                    </DivContainerListClient>
                  </DivContainerIntroduce>
                );
              }}
            </Transition>
          </DivWrapperPaddedVertical>
        </DivContainer>
      </DivWrapper>
    </SectionWrapper>
  );
};

export default CmpSectionClient;
