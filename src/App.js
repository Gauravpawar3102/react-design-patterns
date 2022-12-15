import { SplitScreen } from './SplitScreen';

const LeftHandComponent = () => {
  return <h1>Left</h1>;
};

const RightHandComponent = () => {
  return <h1>Right</h1>;
};

function App() {
  return <SplitScreen left={LeftHandComponent} right={RightHandComponent} />;
}

export default App;
