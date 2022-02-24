import MainScreen from '../mainScreen/mainScreen';

type AppScreenProps = {
  placeCount: number;
}

function App({placeCount}: AppScreenProps): JSX.Element {
  return <MainScreen placeCount={placeCount} />;
}

export default App;
