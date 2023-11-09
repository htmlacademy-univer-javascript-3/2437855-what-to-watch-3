import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { FILMS } from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      filmTitle={'The Grand Budapest Hotel'}
      filmGenre={'Drama'}
      filmYear={2014}
      films = {FILMS}
    />
  </React.StrictMode>
);
