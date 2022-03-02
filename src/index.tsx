import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './theme/GlobalStyles';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
