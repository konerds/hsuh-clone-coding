import { tw } from './utils';
import PageLanding from './pages/PageLanding';
import { useEffect, useState } from 'react';
import { VerticalScrollPositionContext } from './utils';

type TPropsDivApp = {
  $isDev: boolean;
};
const DivApp = tw.div<TPropsDivApp>`
  ${(p) => (p.$isDev ? 'debug-screens' : '')}
`;

const App = () => {
  const [verticalScrollPosition, setVerticalScrollPosition] = useState(0);
  useEffect(() => {
    const updatePosition = () => {
      setVerticalScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);
  return (
    <VerticalScrollPositionContext.Provider value={verticalScrollPosition}>
      <DivApp $isDev={import.meta.env.DEV}>
        <PageLanding />
      </DivApp>
    </VerticalScrollPositionContext.Provider>
  );
};

export default App;
