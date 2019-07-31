import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';
import 'animate.css';
import './index.css';

import {Provider} from 'react-redux';
import store from "./data/store";

const app =
    <Provider store={store}>
        <App/>
    </Provider>;


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
