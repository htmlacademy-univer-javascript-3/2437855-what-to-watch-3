import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './components/app/App';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchFilmsAction } from './store/api-action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App
        filmTitle={'The Grand Budapest Hotel'}
        filmGenre={'Drama'}
        filmYear={2014}
      />
    </Provider>
  </React.StrictMode>,
);
