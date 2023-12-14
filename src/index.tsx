import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchFilmsAction } from './store/api-action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchFilmsAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        filmTitle={'The Grand Budapest Hotel'}
        filmGenre={'Drama'}
        filmYear={2014}
      />
    </Provider>
  </React.StrictMode>,
);
