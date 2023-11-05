import tw from 'tailwind-styled-components';
import PageLanding from './pages/PageLanding';

type TPropsDivApp = {
  $isDev: boolean;
};
const DivApp = tw.div<TPropsDivApp>`
${(p) => (p.$isDev ? 'debug-screens' : '')}
`;

const App = () => {
  return (
    <DivApp $isDev={import.meta.env.MODE !== 'production'}>
      <PageLanding />
    </DivApp>
  );
};

export default App;
