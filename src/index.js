import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from '../node_modules/react-redux';
import store from './Store/store';

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
