import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  filmTitle: string;
  filmGenre: string;
  filmYear: number;
}

function App(props: AppProps): JSX.Element {
  return (
    <MainPage {...props} />
  );
}

export default App;
