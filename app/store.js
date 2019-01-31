'use strict'

//To make it compatible with generator function
import 'regenerator-runtime/runtime';

import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
import logger from 'redux-logger';

const composeEnhancers = process.env.NODE_ENV === 'production' ? compose : ((window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(immutableStateInvariantMiddleware());
    middlewares.push(logger);
}
const store = () => ({
    ...createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middlewares))
    ),
    runSaga: sagaMiddleware.run(rootSaga)
});

export default store;
