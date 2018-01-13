import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore, compose, applyMiddleware } from 'redux';
import { enthusiasm } from './reducers';
import { StoreState } from './types';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import Hello from './containers/Hello';
import { GenericStoreEnhancer } from 'redux';

const DEV_TOOLS_EXTENSION = 'devToolsExtension';
const devToolsExtension: GenericStoreEnhancer = window[DEV_TOOLS_EXTENSION] ?
  window[DEV_TOOLS_EXTENSION]() : f => f;

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
// tslint:disable-next-line:align
}, compose(
  applyMiddleware(thunk, logger),
  devToolsExtension
) as GenericStoreEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
