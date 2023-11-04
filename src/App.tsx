import tw from 'tailwind-styled-components';

type TPropsDivApp = {
  $isDev: boolean;
};
const DivApp = tw.div<TPropsDivApp>`
${(p) => (p.$isDev ? 'debug-screens' : '')}
`;

const App = () => {
  return <DivApp $isDev={import.meta.env.NODE_ENV !== 'production'}></DivApp>;
};

export default App;
