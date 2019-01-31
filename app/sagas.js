import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { actions as ActionConstants } from './actions/actionConstants';
import * as Api from './api';

function* getGitHubUser(action) {
    try {
        const response = yield call(Api.getGitHubUsers);
        yield put({
            type: ActionConstants.FETCH_GITHUB_USERS_SUCCESS,
            payload: response.data.result
        });      
    } catch(error) {
        yield put({
            type: ActionConstants.FETCH_GITHUB_USERS_ERROR,
            payload: error
        });
    }
}


export default function* rootSaga() {
    yield all([
        takeLatest(ActionConstants.FETCH_GITHUB_USERS, getGitHubUser)
    ]);
}
