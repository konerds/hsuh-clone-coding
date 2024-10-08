import tw from 'tailwind-styled-components';
import PageLanding from './pages/PageLanding';
import { usePositionScrollWindow } from './utils';

type TPropsDivApp = {
  $isDev: boolean;
};
const DivApp = tw.div<TPropsDivApp>`
${(p) => (p.$isDev ? 'debug-screens' : '')}
`;

const App = () => {
  const posTopScroll = usePositionScrollWindow('y');
  return (
    <DivApp $isDev={import.meta.env.DEV}>
      <PageLanding posTopScroll={posTopScroll} />
    </DivApp>
  );
};

export default App;
