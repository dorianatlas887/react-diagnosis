import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { sessionService } from 'redux-react-session';
import { ROUTE_LOGIN } from 'routes';

import initialState from 'store/globalState/initialState';

import configureStore from 'store/configureStore';
import App from 'routes/App';
import OverrideTheme from 'components/OverrideTheme';
import registerServiceWorker from './registerServiceWorker';
import 'styles/index.css';

const sessionOptions = { refreshOnCheckAuth: true, redirectPath: ROUTE_LOGIN };
const store = configureStore(initialState);

sessionService.initSessionService(store, sessionOptions);

render(
  <Provider store={store}>
    <OverrideTheme>
      <App />
    </OverrideTheme>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
