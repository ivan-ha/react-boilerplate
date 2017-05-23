import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';

import App from './components/app'

const store = createStore(reducer, applyMiddleware());

const AppContainter = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

ReactDOM.render(<AppContainter />, document.querySelector('.container'));
