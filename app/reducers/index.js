import { combineReducers } from 'redux';

/**
 * Import all reducers here and combine them here
*/
import test from './test';

const rootReducers = combineReducers({
    testData: test
});

export default rootReducers;