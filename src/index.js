import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import CreateStore from './redux';

import routes from './config/routes';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const initialStore = {
  phones: [
    {
      model: 'Iphone 7',
      price: 699,
      id: 1110,
      status: 'old',
    },
    {
      model: 'Iphone 8',
      price: 799,
      id: 1111,
      status: 'old',
    },
  ],
  auth: {
    loggedIn: false,
  },
};

const store = CreateStore(initialStore);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {renderRoutes(routes)}
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
