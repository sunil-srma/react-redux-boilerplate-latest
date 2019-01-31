import React from 'react';
import ReactDOM from "react-dom";
import  { Provider } from 'react-redux';

import Container from './container';
import configStore from './store';

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
document.getElementById("root"));
